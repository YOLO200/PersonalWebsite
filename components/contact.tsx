"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Mail, Linkedin, FileText } from "lucide-react";
import GlassIcons from "./GlassIcons";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function Contact() {
  const { ref, isVisible } = useScrollAnimation();

  const contactIcons = [
    {
      icon: <Mail className="w-full h-full" />,
      color: "blue",
      label: "Email",
      href: "mailto:yjasani@asu.edu",
    },
    {
      icon: <Linkedin className="w-full h-full" />,
      color: "indigo",
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/yashvi-jasani-26614723a",
      target: "_blank",
    },
    {
      icon: <FileText className="w-full h-full" />,
      color: "purple",
      label: "Resume",
      href: "/resume.pdf",
      target: "_blank",
    },
  ];

  return (
    <section id="contact" ref={ref} className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto text-center">
        <h2
          className={`text-3xl sm:text-4xl font-bold mb-6 text-balance transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Contact Me
        </h2>

        <p
          className={`text-lg text-muted-foreground mb-12 leading-relaxed text-pretty transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          I'm currently looking for new opportunities and my inbox is always
          open. Whether you have a question or just want to say hi, I'll try my
          best to get back to you!
        </p>

        <Card
          className={`mb-8 transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <CardHeader>
            <CardTitle>Let's Connect</CardTitle>
            <CardDescription>
              Get to know me better through any of the channels below.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex justify-center">
              <GlassIcons items={contactIcons} />
            </div>
          </CardContent>
        </Card>

        <Button
          size="lg"
          asChild
          className={`transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <a>Say Hello @ yjasani@asu.edu</a>
        </Button>
      </div>
    </section>
  );
}
