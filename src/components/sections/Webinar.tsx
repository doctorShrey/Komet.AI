/**
 * @file Webinar.tsx
 * @brief Page section component rendering the Webinar area.
 * @author Shreyansh Dhingra
 * @role Full-Stack Engineering, Architecture, UI/UX, Security
 * @created 2026-05-01
 * 
 * @copyright Copyright (c) 2026 Komet.AI. All Rights Reserved.
 * This software is the confidential and proprietary information of Komet.AI.
 * Unauthorized copying, modification, or distribution of this file, via any medium, 
 * is strictly prohibited.
 */
import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, Clock, Video, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

/**
 * Section promoting the upcoming free webinar.
 * 
 * @returns {JSX.Element} The rendered Webinar component.
 */
export function Webinar() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [childName, setChildName] = useState("");
  const [school, setSchool] = useState("");
  const [age, setAge] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !phone || !childName || !school || !age) {
      toast({
        title: "Missing Information",
        description: "Please fill out all required fields.",
        variant: "destructive"
      });
      return;
    }

    const nameRegex = /^[a-zA-Z\s]+$/;
    if (!nameRegex.test(childName)) {
      toast({
        title: "Invalid Name",
        description: "Name should only contain alphabets.",
        variant: "destructive"
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }

    const cleanedPhone = phone.replace(/[\s\-()]/g, '');
    const phoneRegex = /^\d{1,10}$/;
    if (!phoneRegex.test(cleanedPhone)) {
      toast({
        title: "Invalid Phone Number",
        description: "Phone number must be valid and no longer than 10 digits.",
        variant: "destructive"
      });
      return;
    }

    const schoolRegex = /^[a-zA-Z0-9\s]+$/;
    if (!schoolRegex.test(school)) {
      toast({
        title: "Invalid School",
        description: "School name should only contain alphabets and numbers.",
        variant: "destructive"
      });
      return;
    }

    if (isNaN(Number(age)) || Number(age) < 4 || Number(age) > 18) {
      toast({
        title: "Invalid Age",
        description: "Please enter a valid age (4-18).",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);
    try {
      const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';
      const response = await fetch(`${API_URL}/api/webinar`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          phone: phone,
          childName: childName,
          school: school,
          age: parseInt(age)
        })
      });

      if (!response.ok) {
        throw new Error("Failed to register");
      }

      setSubmitted(true);
      toast({
        title: "Spot Reserved!",
        description: "Your registration has been successfully sent.",
      });
    } catch (error) {
      toast({
        title: "Registration Failed",
        description: "There was an error submitting your registration. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="webinar" className="py-20 bg-background relative z-20">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-secondary text-secondary-foreground rounded-[2.5rem] p-8 md:p-12 shadow-2xl relative overflow-hidden"
        >
          {/* Decorative shapes */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/4" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-black/5 rounded-full blur-xl translate-y-1/3 -translate-x-1/3" />

          <div className="grid md:grid-cols-2 gap-10 items-center relative z-10">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full text-white font-bold text-sm mb-6 backdrop-blur-sm">
                <Video size={16} /> Free Live Event
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4 leading-tight">
                Join Our Free Launch Webinar
              </h2>
              <p className="text-white/90 text-lg mb-8 font-medium">
                Discover how your child can build real AI projects. Get a live tour of the curriculum, meet the instructors, and ask us anything!
              </p>

              <div className="flex flex-col gap-4 mb-8">
                <div className="flex items-center gap-3 text-white font-bold bg-black/10 p-4 rounded-2xl w-fit backdrop-blur-sm">
                  <div className="bg-white text-secondary p-2 rounded-xl">
                    <Calendar size={24} />
                  </div>
                  <div>Saturday, May 18</div>
                </div>
                <div className="flex items-center gap-3 text-white font-bold bg-black/10 p-4 rounded-2xl w-fit backdrop-blur-sm">
                  <div className="bg-white text-secondary p-2 rounded-xl">
                    <Clock size={24} />
                  </div>
                  <div>5:00 PM IST</div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-[2rem] p-8 shadow-xl">
              <h3 className="text-2xl font-display font-bold text-foreground mb-6 text-center">Save My Spot</h3>

              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <h4 className="text-xl font-bold text-foreground mb-2">You're all set!</h4>
                  <p className="text-gray-500 font-medium">Check your email for the link.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3 text-left" noValidate>
                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-1">Parent's Email</label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="support@kometai.org"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="h-12 rounded-xl bg-gray-50 border-gray-200 text-black text-lg px-4"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-1">Phone Number</label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="9818616719"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="h-12 rounded-xl bg-gray-50 border-gray-200 text-black text-lg px-4"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="childName" className="block text-sm font-bold text-gray-700 mb-1">Child's Name</label>
                    <Input
                      id="childName"
                      type="text"
                      placeholder="Saurav Kumar"
                      value={childName}
                      onChange={(e) => setChildName(e.target.value)}
                      className="h-12 rounded-xl bg-gray-50 border-gray-200 text-black text-lg px-4"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label htmlFor="school" className="block text-sm font-bold text-gray-700 mb-1">School</label>
                      <Input
                        id="school"
                        type="text"
                        placeholder="Genesis Global School"
                        value={school}
                        onChange={(e) => setSchool(e.target.value)}
                        className="h-12 rounded-xl bg-gray-50 border-gray-200 text-black text-lg px-4"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="age" className="block text-sm font-bold text-gray-700 mb-1">Age</label>
                      <Input
                        id="age"
                        type="number"
                        placeholder="10"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        className="h-12 rounded-xl bg-gray-50 border-gray-200 text-black text-lg px-4"
                        required
                        min="4"
                        max="18"
                      />
                    </div>
                  </div>
                  <Button disabled={isSubmitting} type="submit" className="w-full h-14 rounded-xl bg-primary hover:bg-primary/90 text-white font-bold text-lg shadow-md hover:-translate-y-0.5 transition-all mt-4">
                    {isSubmitting ? "Registering..." : "Register Now"} <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                  <p className="text-xs text-center text-gray-400 font-medium mt-3">We'll send you a calendar invite and reminder.</p>
                </form>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}