// useSubmitForm.ts
import { useState } from "react";

export function useSubmitForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (event: React.FormEvent, form: HTMLFormElement) => {
    event.preventDefault();
    setIsSubmitting(true);
    setIsSuccess(false);

    try {
      const formData = new FormData(form);
      const formObject: Record<string, string> = {};
      formData.forEach((value, key) => {
        formObject[key] = value.toString();
      });

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formObject),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setIsSuccess(true);

      // Reset form after successful submission
      form.reset();

      // After 2 seconds, reset the button text back to "Send Message"
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSuccess(false);
      }, 2000); // 2 seconds delay
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return { isSubmitting, isSuccess, handleSubmit };
}
