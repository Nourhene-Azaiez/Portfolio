"use client";
import emailjs from "emailjs-com";
import { Label } from "../ui/label";
import { Input, Textarea } from "../ui/input";
import { cn } from "@/lib/utils";
import {
    IconBrandGithub,
    IconBrandLinkedin,
    IconLocation,
  } from "@tabler/icons-react";

export function ContactForm() {
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  
    // Get form data
    const formData = new FormData(e.target as HTMLFormElement);
    const firstName = formData.get("firstname") as string;
    const lastName = formData.get("lastname") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;
  
    const templateParams = {
      firstname: firstName,
      lastname: lastName,
      email: email,
      message: message,
    };
  
    // Send the email using EmailJS
    emailjs
      .send("your_service_id", "your_template_id", templateParams, "your_user_id")
      .then(
        (response) => {
          console.log("Message sent successfully:", response);
        },
        (error) => {
          console.error("Error sending message:", error);
        }
      );
  };

  return (
    <div className="max-w-6xl w-full lg:mx-auto mx-5 rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-zinc-200 dark:bg-black">
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Contact Me
      </h2>
      <p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
        Feel free to reach out. I&apos;ll get back to you as soon as possible.
      </p>

      <form className="my-8" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
            <div className="w-full">
                <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-3">
                <LabelInputContainer>
                    <Label htmlFor="firstname">First Name</Label>
                    <Input id="firstname" placeholder="John" type="text" required />
                </LabelInputContainer>
                <LabelInputContainer>
                    <Label htmlFor="lastname">Last Name</Label>
                    <Input id="lastname" placeholder="Doe" type="text" required />
                </LabelInputContainer>
                </div>
                <LabelInputContainer className="mb-3">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" placeholder="you@example.com" type="email" required />
                </LabelInputContainer>
            </div>
            <LabelInputContainer className="h-full">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Your message..." required />
            </LabelInputContainer>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 space-y-4 md:space-y-0 md:space-x-2 mb-4">
            <button
                className="bg-zinc-400 dark:bg-zinc-800 hover:bg-green-500 dark:hover:bg-green-700 block w-full text-black dark:text-white rounded-full h-10 font-medium shadow-md"
                type="submit"
                >
                Send Message
            </button>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-2">
                <button
                    className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-full h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                    onClick={() => window.open("https://github.com/Nourhene-Azaiez", "_blank")}

                >
                    <IconBrandGithub className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
                    <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                    GitHub
                    </span>
                    <BottomGradient />
                </button>
                <button
                    className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-full h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                    onClick={() => window.open("https://www.linkedin.com/in/nourhene-azaiez/", "_blank")}
                >
                    <IconBrandLinkedin className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
                    <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                    LinkedIn
                    </span>
                    <BottomGradient />
                </button>
                <button
                    className=" relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-full h-10 font-medium shadow-input bg-gray-50 dark:bg-zinc-900 dark:shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                    onClick={() => window.open("https://maps.app.goo.gl/8UnEd21n6AqhuKAU8", "_blank")}
                >
                    <IconLocation className="h-4 w-4 text-neutral-800 dark:text-neutral-300" />
                    <span className="text-neutral-700 dark:text-neutral-300 text-sm">
                    Tunis, Tunisia
                    </span>
                    <BottomGradient />
                </button>
            </div>
        </div>
      </form>
    </div>
  );
}

const BottomGradient = () => {
return (
    <>
    <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-0.5 w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
    <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
);
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
