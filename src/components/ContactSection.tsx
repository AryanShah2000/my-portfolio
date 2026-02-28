"use client";

import React, { useState } from "react";
import GlassCard from "./GlassCard";

export default function ContactSection() {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [contactSubmitting, setContactSubmitting] = useState(false);
  const [contactSubmitted, setContactSubmitted] = useState(false);

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setContactSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/mdalvorw", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: contactForm.name,
          email: contactForm.email,
          message: contactForm.message,
        }),
      });

      if (response.ok) {
        setContactSubmitted(true);
        setContactForm({ name: "", email: "", message: "" });
        setTimeout(() => setContactSubmitted(false), 5000);
      } else {
        alert("Failed to send message. Please try again later.");
      }
    } catch (error) {
      console.error("Failed to send message:", error);
      alert("Failed to send message. Please try again later.");
    } finally {
      setContactSubmitting(false);
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
        
        <div className="flex justify-center">
          <div className="w-full max-w-lg">
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
          </div>
        </div>
      </div>
    </section>
  );
}