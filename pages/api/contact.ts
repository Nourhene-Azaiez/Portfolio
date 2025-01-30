import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== "POST") {
      return res.status(405).json({ message: "Method Not Allowed" });
    }
  
    try {
      // Get Formspree URL from environment variable
      const formspreeUrl = process.env.FORMSPREE_ENDPOINT;
  
      if (!formspreeUrl) {
        throw new Error("Formspree endpoint not configured");
      }
  
      // Send the form data to Formspree
      const response = await fetch(formspreeUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(req.body),
      });
  
      if (!response.ok) {
        throw new Error("Failed to send message");
      }
  
      return res.status(200).json({ message: "Success"});
    } catch (error) {
      console.error("Error sending message:", error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }
  