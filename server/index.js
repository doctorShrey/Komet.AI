import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import { z } from 'zod';
import { 
  getWebinarResponseHtml, 
  getApplicationResponseHtml, 
  getAdminNotificationHtml 
} from './emailTemplates.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000;

// Setup Nodemailer transporter for Hostinger SMTP
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.hostinger.com',
  port: parseInt(process.env.SMTP_PORT || '465'),
  secure: true, // Use SSL/TLS for port 465
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// Zod schemas for validation
const webinarSchema = z.object({
  email: z.string().email(),
  phone: z.string().min(1),
  childName: z.string().min(1),
  school: z.string().min(1),
  age: z.number().min(4).max(18),
});

const applySchema = z.object({
  parentName: z.string().min(1),
  email: z.string().email(),
  phone: z.string().optional(),
  childName: z.string().min(1),
  childGrade: z.string().min(1),
  interests: z.string().optional(),
});

app.post('/api/webinar', async (req, res) => {
  try {
    const data = webinarSchema.parse(req.body);

    const mailOptionsAdmin = {
      from: process.env.SMTP_USER,
      to: process.env.ADMIN_EMAIL,
      replyTo: data.email,
      subject: `New Webinar Registration: ${data.childName}`,
      html: getAdminNotificationHtml('Webinar Registration', data),
    };

    const mailOptionsUser = {
      from: process.env.SMTP_USER,
      to: data.email,
      subject: 'Webinar Registration Confirmed - Komet.AI',
      html: getWebinarResponseHtml(data.childName),
    };

    // Send emails concurrently
    await Promise.all([
      transporter.sendMail(mailOptionsAdmin),
      transporter.sendMail(mailOptionsUser),
    ]);

    res.status(200).json({ message: 'Registration successful' });
  } catch (error) {
    console.error('Webinar Error:', error);
    if (error instanceof z.ZodError) {
      return res.status(400).json({ error: error.errors });
    }
    res.status(500).json({ error: 'Failed to process registration' });
  }
});

app.post('/api/apply', async (req, res) => {
  try {
    const data = applySchema.parse(req.body);

    const mailOptionsAdmin = {
      from: process.env.SMTP_USER,
      to: process.env.ADMIN_EMAIL,
      replyTo: data.email,
      subject: `New Application: ${data.childName}`,
      html: getAdminNotificationHtml('Application', data),
    };

    const mailOptionsUser = {
      from: process.env.SMTP_USER,
      to: data.email,
      subject: 'Application Received - Komet.AI',
      html: getApplicationResponseHtml(data.parentName, data.childName),
    };

    // Send emails concurrently
    await Promise.all([
      transporter.sendMail(mailOptionsAdmin),
      transporter.sendMail(mailOptionsUser),
    ]);

    res.status(200).json({ message: 'Application submitted successfully' });
  } catch (error) {
    console.error('Application Error:', error);
    if (error instanceof z.ZodError) {
      return res.status(400).json({ error: error.errors });
    }
    res.status(500).json({ error: 'Failed to process application' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
