import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Navigation from "@/components/Navigation";
import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "sonner";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { countryCodes } from "../lib/country-codes";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    countryCode: "+1",
    phoneNumber: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCountryCodeChange = (value: string) => {
    setFormData((prev) => ({ ...prev, countryCode: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const fullPhoneNumber = formData.phoneNumber
      ? `${formData.countryCode} ${formData.phoneNumber}`
      : "";

    const promise = fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...formData, phoneNumber: fullPhoneNumber }),
    }).then((res) => {
      if (!res.ok) {
        throw new Error("Something went wrong. Please try again.");
      }
      return res.json();
    });

    toast.promise(promise, {
      loading: "Sending message...",
      success: () => {
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          countryCode: "+1",
          phoneNumber: "",
          message: "",
        });
        setIsSubmitting(false);
        return "Message sent successfully! We'll be in touch soon.";
      },
      error: (err) => {
        setIsSubmitting(false);
        return err.message;
      },
    });
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        exit={{ opacity: 0 }}
      ></motion.div>
      <Navigation />
      <div className="min-h-screen w-full pt-16 flex items-center justify-center">
        <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <Card className="max-w-2xl mx-auto">
            <CardHeader className="text-center">
              <span className="text-primary font-semibold">CONTACT</span>
              <CardTitle className="text-3xl font-bold">Get in touch</CardTitle>
            </CardHeader>
            <CardContent>
              <form
                onSubmit={handleSubmit}
                className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
              >
                <div>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    type="text"
                    name="firstName"
                    id="firstName"
                    autoComplete="given-name"
                    className="mt-2"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    type="text"
                    name="lastName"
                    id="lastName"
                    autoComplete="family-name"
                    className="mt-2"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="sm:col-span-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    className="mt-2"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="sm:col-span-2">
                  <Label htmlFor="phoneNumber">
                    Phone Number{" "}
                    <span className="text-muted-foreground">(Optional)</span>
                  </Label>
                  <div className="flex items-center gap-2 mt-2">
                    <Select
                      value={formData.countryCode}
                      onValueChange={handleCountryCodeChange}
                    >
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Code" />
                      </SelectTrigger>
                      <SelectContent>
                        {countryCodes.map((code) => (
                          <SelectItem key={code.label} value={code.value}>
                            {code.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <Input
                      type="text"
                      name="phoneNumber"
                      id="phoneNumber"
                      autoComplete="tel"
                      className="flex-1"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="sm:col-span-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Describe what you're interested in..."
                    className="mt-2"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="sm:col-span-2">
                  <Button
                    type="submit"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Submitting..." : "Submit"}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Contact; 