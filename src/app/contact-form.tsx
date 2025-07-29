"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import emailjs from "@emailjs/browser";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { FaCircleNotch } from "react-icons/fa6";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().min(1),
  email: z.string(),
  message: z.string(),
});

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async ({
    name,
    email,
    message,
  }: z.infer<typeof formSchema>) => {
    const serviceID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const userID = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;
    if (!serviceID || !templateID || !userID) return;

    try {
      setIsLoading(true);
      const emailParams = {
        name: name,
        email: email,
        message: message,
      };

      await emailjs.send(serviceID, templateID, emailParams, userID);

      setIsLoading(false);
      form.reset();
      toast("Message sent successfully.");
    } catch (error) {
      setIsLoading(false);
      console.error(error);
      toast("Failed to send the message.");
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 max-w-3xl mx-auto"
      >
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your Name</FormLabel>
              <FormControl>
                <Input
                  placeholder="Full name"
                  type="text"
                  {...field}
                  disabled={isLoading}
                />
              </FormControl>
              <FormDescription>
                Please enter your full name so we know who you are.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your email"
                  type="email"
                  {...field}
                  disabled={isLoading}
                />
              </FormControl>
              <FormDescription>
                We'll use this to get back to you.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Your Message</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Type your message here..."
                  className="resize-none min-h-[300px]"
                  disabled={isLoading}
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Let us know what you're thinking or how we can help.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? <FaCircleNotch className="animate-spin" /> : "Submit"}
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
