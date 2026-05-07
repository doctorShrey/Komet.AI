export const getWebinarResponseHtml = (name) => `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  <h2>Thank you for registering, ${name}!</h2>
  <p>We are excited to have you join our upcoming webinar.</p>
  <p><strong>Webinar Details:</strong></p>
  <ul>
    <li><strong>Topic:</strong> Introduction to Komet.AI</li>
    <li><strong>Date:</strong> (TBD - We will email you the exact date soon)</li>
    <li><strong>Link:</strong> (Link will be provided prior to the event)</li>
  </ul>
  <p>If you have any questions in the meantime, feel free to reply directly to this email.</p>
  <br>
  <p>Best regards,<br>The Komet.AI Team</p>
</div>
`;

export const getApplicationResponseHtml = (parentName, childName) => `
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  <h2>Application Received!</h2>
  <p>Hi ${parentName},</p>
  <p>Thank you for submitting an application for ${childName} to join Komet.AI.</p>
  <p>Our team is currently reviewing your application. We will reach out within the next 2-3 business days with the next steps.</p>
  <p>If you have any immediate questions, simply reply to this email.</p>
  <br>
  <p>Best regards,<br>The Komet.AI Team</p>
</div>
`;

export const getAdminNotificationHtml = (type, data) => {
  const fields = Object.entries(data)
    .map(([key, value]) => `<li><strong>${key}:</strong> ${value}</li>`)
    .join('');

  return `
    <div style="font-family: Arial, sans-serif;">
      <h2>New ${type} Submission</h2>
      <ul>${fields}</ul>
    </div>
  `;
};
