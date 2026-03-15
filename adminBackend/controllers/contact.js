import Contact from "../models/contact.js";
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.CONTACT_KEY);

export const submitContact = async (req, res) => {
  try {
    const { name, email, phone, website, message } = req.body;

    // Save to MongoDB
    const contact = new Contact({ name, email, phone, website, message });
    await contact.save();

    // Send email
    const msg = {
      to: process.env.FROM_MAIL,
      from: process.env.FROM_MAIL,
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h3>New Contact Submission</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Website:</strong> ${website}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    await sgMail.send(msg);

    res.status(200).json({ message: "Form submitted successfully!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong." });
  }
};