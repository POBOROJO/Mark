"use client";

import { X, Mail, Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { Label } from "@/components/ui/label";

export const ContactSection = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <div className="w-full py-24 lg:py-48">
      <div className="container max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <div>
                <Badge>Contact</Badge>
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-left font-regular">
                  Stay Connected
                </h4>
                <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-sm text-left">
                  Interested in collaborating or just want to say hello? Feel
                  free to reach out or connect with me on Twitter!
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6 items-start text-left">
              <Check className="w-4 h-4 mt-2 text-primary" />
              <div className="flex flex-col gap-1">
                <p>Personalized Interaction</p>
                <p className="text-muted-foreground text-sm">
                  I personally respond to each message and look forward to
                  hearing from you!
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center">
            <div className="rounded-md max-w-sm flex flex-col border p-8 gap-6">
              <p>Contact Me</p>
              <div className="grid w-full max-w-sm gap-3">
                <div className="grid gap-1">
                  <Label htmlFor="email">Your Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your.email@example.com"
                  />
                </div>
                <div className="grid gap-1">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Write your message here..."
                  />
                </div>
              </div>
              <Button className="gap-4 w-full">
                Send Message <Mail className="w-4 h-4" />
              </Button>
              <Button
                className="gap-4 w-full mt-4"
                variant="outline"
                onClick={() => window.open("https://twitter.com/yourtwitter", "_blank")}
              >
                Connect on Twitter <X className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
