"use client";

import React, { useState } from "react";
import emailjs from '@emailjs/browser';
import GlassCard from "./GlassCard";
import { EMAILJS_CONFIG } from "../config/emailjs";

export default function ContactSection() {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [coffeeForm, setCoffeeForm] = useState({
    name: "",
    email: "",
    meetingType: "online" // default to online
  });

  const [contactSubmitting, setContactSubmitting] = useState(false);
  const [coffeeSubmitting, setCoffeeSubmitting] = useState(false);
  const [contactSubmitted, setContactSubmitted] = useState(false);
  const [coffeeSubmitted, setCoffeeSubmitted] = useState(false);

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setContactSubmitting(true);
    
    try {
      // Send email using EmailJS
      const result = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.CONTACT_TEMPLATE_ID,
        {
          from_name: contactForm.name,
          from_email: contactForm.email,
          message: contactForm.message,
          to_email: "your-email@example.com", // Replace with your actual email
        },
        EMAILJS_CONFIG.USER_ID
      );
      
      console.log('Contact email sent successfully:', result);
      setContactSubmitted(true);
      setContactForm({ name: "", email: "", message: "" });
      
      // Reset success message after 5 seconds
      setTimeout(() => setContactSubmitted(false), 5000);
    } catch (error) {
      console.error('Failed to send contact email:', error);
      alert('Failed to send message. Please try again later.');
    } finally {
      setContactSubmitting(false);
    }
  };

  const handleCoffeeSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setCoffeeSubmitting(true);
    
    try {
      // Send coffee meeting request using EmailJS
      const result = await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.COFFEE_TEMPLATE_ID,
        {
          from_name: coffeeForm.name,
          from_email: coffeeForm.email,
          meeting_type: coffeeForm.meetingType === "online" ? "Online (Video Call)" : "In Person - Dallas",
          to_email: "your-email@example.com", // Replace with your actual email
        },
        EMAILJS_CONFIG.USER_ID
      );
      
      console.log('Coffee meeting email sent successfully:', result);
      setCoffeeSubmitted(true);
      setCoffeeForm({ name: "", email: "", meetingType: "online" });
      
      // Reset success message after 5 seconds
      setTimeout(() => setCoffeeSubmitted(false), 5000);
    } catch (error) {
      console.error('Failed to send coffee meeting email:', error);
      alert('Failed to send coffee meeting request. Please try again later.');
    } finally {
      setCoffeeSubmitting(false);
    }
  };

  return (
    <section id="contact" className="w-full pt-12 pb-24 px-6 bg-gradient-to-br from-[var(--bg-gradient-start)] to-[var(--bg-gradient-end)]">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-center mb-16">
          <h2 className="text-3xl font-bold text-white px-8 py-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-lg">
            Contact
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Side - Traditional Contact Form */}
          <GlassCard>
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-white mb-6 text-center">Get In Touch</h3>
              
              {contactSubmitted ? (
                <div className="text-center py-8">
                  <div className="text-green-400 text-lg mb-2">✓ Message Sent!</div>
                  <p className="text-white/80">Thank you for reaching out. I'll get back to you soon!</p>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-white/80 text-sm font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={contactForm.name}
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-white/80 text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={contactForm.email}
                      onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-white/80 text-sm font-medium mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={4}
                      value={contactForm.message}
                      onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent resize-none"
                      placeholder="Your message..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={contactSubmitting}
                    className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {contactSubmitting ? "Sending..." : "Send Message"}
                  </button>
                </form>
              )}
            </div>
          </GlassCard>
          
          {/* Right Side - Meet for Coffee */}
          <GlassCard>
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-white mb-6 text-center">Meet Me for Coffee</h3>
              
              {coffeeSubmitted ? (
                <div className="text-center py-8">
                  <div className="text-green-400 text-lg mb-2">☕ Request Received!</div>
                  <p className="text-white/80">I'll reach out to you soon to set up our coffee meeting!</p>
                </div>
              ) : (
                <form onSubmit={handleCoffeeSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="coffee-name" className="block text-white/80 text-sm font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="coffee-name"
                      required
                      value={coffeeForm.name}
                      onChange={(e) => setCoffeeForm({ ...coffeeForm, name: e.target.value })}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="coffee-email" className="block text-white/80 text-sm font-medium mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="coffee-email"
                      required
                      value={coffeeForm.email}
                      onChange={(e) => setCoffeeForm({ ...coffeeForm, email: e.target.value })}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-white/80 text-sm font-medium mb-3">
                      Meeting Type
                    </label>
                    <div className="space-y-3">
                      <label className="flex items-center cursor-pointer">
                        <input
                          type="radio"
                          name="meetingType"
                          value="online"
                          checked={coffeeForm.meetingType === "online"}
                          onChange={(e) => setCoffeeForm({ ...coffeeForm, meetingType: e.target.value })}
                          className="w-4 h-4 text-blue-600 border-white/20 focus:ring-blue-500 bg-white/10"
                        />
                        <span className="ml-3 text-white/90">
                          <span className="font-medium">Online</span>
                          <span className="text-white/70 text-sm block">Virtual coffee chat via video call</span>
                        </span>
                      </label>
                      
                      <label className="flex items-center cursor-pointer">
                        <input
                          type="radio"
                          name="meetingType"
                          value="dallas"
                          checked={coffeeForm.meetingType === "dallas"}
                          onChange={(e) => setCoffeeForm({ ...coffeeForm, meetingType: e.target.value })}
                          className="w-4 h-4 text-blue-600 border-white/20 focus:ring-blue-500 bg-white/10"
                        />
                        <span className="ml-3 text-white/90">
                          <span className="font-medium">In Person - Dallas</span>
                          <span className="text-white/70 text-sm block">Meet at a local coffee shop</span>
                        </span>
                      </label>
                    </div>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={coffeeSubmitting}
                    className="w-full py-3 bg-gradient-to-r from-orange-500 to-pink-600 text-white font-semibold rounded-lg hover:from-orange-600 hover:to-pink-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {coffeeSubmitting ? "Submitting..." : "☕ Request Coffee Meeting"}
                  </button>
                  
                  <p className="text-white/70 text-sm text-center">
                    Note: I'll reach out to you within 24-48 hours to coordinate our coffee meeting and find a time that works for both of us.
                  </p>
                </form>
              )}
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}