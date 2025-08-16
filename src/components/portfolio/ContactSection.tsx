import { useState } from "react";
import emailjs from "emailjs-com";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter, Instagram } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "vrajgavade17@gmail.com",
    href: "mailto:vrajgavade17@gmail.com"
  },
  {
    icon: MapPin,
    label: "Location",
    value: "India",
    href: "#"
  },
  {
    icon: Phone,
    label: "Available",
    value: "Mon - Fri, 9AM - 6PM",
    href: "#"
  }
];

const socialLinks = [
  { icon: Github, href: "https://github.com/viraj-gavade", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/viraj-gavade-8877aa30b/", label: "LinkedIn" },
  { icon: Twitter, href: "https://x.com/viraj_gavade", label: "Twitter" },
  { icon: Instagram, href: "https://www.instagram.com/_viraj.js/", label: "Instagram" },
];

export const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("");
    if (!form.name || !form.email || !form.subject || !form.message) {
      setStatus("Please fill in all fields.");
      return;
    }
    setLoading(true);
    try {
      await emailjs.send(
        "YOUR_SERVICE_ID", // replace with your EmailJS service ID
        "YOUR_TEMPLATE_ID", // replace with your EmailJS template ID
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject,
          message: form.message,
        },
        "YOUR_USER_ID" // replace with your EmailJS user ID (public key)
      );
      setStatus("Message sent successfully!");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      setStatus("Failed to send message. Please try again later.");
    }
    setLoading(false);
  };
  return (
  <div>
  <section id="contact" className="py-20 bg-muted/20 flex flex-col items-center justify-center min-h-[70vh]">
    <div className="container mx-auto px-6">
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Get In <span className="gradient-text">Touch</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          I'm always interested in collaborating on innovative projects and discussing tech! <br />
          Let's build something amazing together.
        </p>
      </div>

      {/* Contact Info */}
      <div className="flex justify-center items-center w-full">
        <div className="bg-card/70 rounded-xl shadow-lg p-10 border border-border w-full max-w-2xl mx-auto mt-10">
          <h3 className="text-2xl font-semibold mb-6 text-center">Let’s Connect</h3>
          <p className="text-muted-foreground mb-8 leading-relaxed text-center">
            Whether you have a project in mind, want to collaborate, or just want to say hello,<br />
            I'd love to hear from you. Drop me a message and let's start a conversation!
          </p>

          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <div key={index} className="flex items-center gap-4 bg-background/60 rounded-lg p-4">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center shadow">
                  <info.icon className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground font-semibold">{info.label}</div>
                  {info.href !== "#" ? (
                    <a href={info.href} className="font-bold text-base hover:text-primary transition-colors">
                      {info.value}
                    </a>
                  ) : (
                    <div className="font-bold text-base">{info.value}</div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Social Links */}
          <div className="pt-8">
            <h4 className="text-lg font-semibold mb-4 text-center">Follow Me</h4>
            <div className="flex justify-center space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 bg-card/80 border border-border rounded-lg flex items-center justify-center hover:bg-primary hover:border-primary hover:scale-110 transition-all duration-300 shadow-lg"
                  aria-label={social.label}
                >
                  <social.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="mt-20 text-center">
        <div className="max-w-2xl mx-auto">
          <h3 className="text-2xl font-semibold mb-4">Ready to Work Together?</h3>
          <p className="text-muted-foreground mb-8">
            I'm currently available for freelance projects and full-time opportunities. 
            Let's discuss how we can bring your ideas to life!
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" asChild>
              <a href="https://portfolio-viraj-gavades-projects.vercel.app/" target="_blank" rel="noopener noreferrer">
                View Portfolio
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="mailto:vrajgavade17@gmail.com">
                <Mail className="w-5 h-5 mr-2" />
                Email Me
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-20 pt-8 border-t border-border text-center">
        <p className="text-muted-foreground">
          © 2025–Present Viraj Gavade. All rights reserved.
        </p>
        <p className="text-sm text-muted-foreground mt-2">
          <i>Happy Coding! 👨‍💻</i>
        </p>
      </div>
    </div>
  </section>
</div>

  );
};