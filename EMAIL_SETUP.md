# EmailJS Setup Guide

To make your contact forms work, follow these steps:

## 1. Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email

## 2. Connect Your Email Service
1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions
5. Note the **Service ID** (you'll need this)

## 3. Create Email Templates

### Contact Form Template
1. Go to "Email Templates" in EmailJS dashboard
2. Click "Create New Template" 
3. Set up template with these variables:
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{message}}` - The message content
   
**Sample Contact Template:**
```
Subject: New Contact from {{from_name}}

You have a new message from your portfolio website:

Name: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
Sent from your portfolio contact form
```

### Coffee Meeting Template
1. Create another template for coffee meetings
2. Use these variables:
   - `{{from_name}}` - Sender's name  
   - `{{from_email}}` - Sender's email
   - `{{meeting_type}}` - Meeting type preference

**Sample Coffee Template:**
```
Subject: Coffee Meeting Request from {{from_name}}

Someone wants to meet you for coffee!

Name: {{from_name}}
Email: {{from_email}}
Meeting Type: {{meeting_type}}

Please reach out to coordinate timing.

---
Sent from your portfolio coffee meeting form
```

## 4. Update Configuration
1. Open `src/config/emailjs.ts`
2. Replace the placeholder values:
   - `YOUR_USER_ID` - Found in EmailJS account settings
   - `YOUR_SERVICE_ID` - From step 2
   - `YOUR_CONTACT_TEMPLATE_ID` - From contact template
   - `YOUR_COFFEE_TEMPLATE_ID` - From coffee template

## 5. Update Your Email
In `ContactSection.tsx`, replace `"your-email@example.com"` with your actual email address (appears twice in the file).

## 6. Test the Forms
1. Run your development server
2. Fill out both forms
3. Check your email inbox
4. Check EmailJS dashboard for delivery status

## Alternative: Next.js API Routes
If you prefer a more professional backend approach:

1. **Install email service:**
   ```bash
   npm install resend
   # or
   npm install @sendgrid/mail
   ```

2. **Create API routes:**
   - `pages/api/contact.ts`
   - `pages/api/coffee.ts`

3. **Update forms to POST to these endpoints**

Would you like me to implement the API route approach instead?