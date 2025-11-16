// EmailJS configuration
// To set this up:
// 1. Go to https://www.emailjs.com/
// 2. Create an account
// 3. Create an email service (Gmail, Outlook, etc.)
// 4. Create email templates
// 5. Replace the values below with your actual EmailJS credentials

export const EMAILJS_CONFIG = {
  // Your EmailJS User ID (found in your EmailJS account)
  USER_ID: "YOUR_USER_ID", // Replace with your actual User ID
  
  // Your EmailJS Service ID (the email service you created)
  SERVICE_ID: "YOUR_SERVICE_ID", // Replace with your actual Service ID
  
  // Template IDs for different forms
  CONTACT_TEMPLATE_ID: "YOUR_CONTACT_TEMPLATE_ID", // For contact form
  COFFEE_TEMPLATE_ID: "YOUR_COFFEE_TEMPLATE_ID", // For coffee meeting requests
};

// Template variables for contact form:
// {{from_name}} - sender's name
// {{from_email}} - sender's email  
// {{message}} - the message content
// {{to_email}} - your email address

// Template variables for coffee form:
// {{from_name}} - sender's name
// {{from_email}} - sender's email
// {{meeting_type}} - online or dallas
// {{to_email}} - your email address