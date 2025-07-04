import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, MapPin, Phone } from 'lucide-react';

export const metadata = {
  title: 'Contact - NextZenLoom',
  description: 'Contact NextZenLoom for inquiries about our AI solutions',
};

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-8 text-3xl font-bold tracking-tight sm:text-4xl">Contact Us</h1>
        
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <p className="mb-8 text-lg text-muted-foreground">
              We'd love to hear from you. Please fill out the form or reach out using our contact information.
            </p>
            
            <div className="mb-6 flex items-start space-x-4">
              <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
              <div>
                <h3 className="font-medium">Address</h3>
                <address className="not-italic text-muted-foreground">
                JAMUHARI, VILL JAMUHARI POST, KOIL BHUPAT, PS MEHANDIYA, Jamuhari, MEHANDIYA,
Kaler, Gaya- 804428, Bihar, India
                </address>
              </div>
            </div>
            
            <div className="mb-6 flex items-start space-x-4">
              <Mail className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
              <div>
                <h3 className="font-medium">Email</h3>
                <p className="text-muted-foreground">
                  <a href="mailto:contact@nextzenloom.com" className="hover:text-primary">
                    contact@nextzenloom.com
                  </a>
                </p>
              </div>
            </div>
            
            <div className="mb-6 flex items-start space-x-4">
              <Phone className="mt-1 h-5 w-5 flex-shrink-0 text-primary" />
              <div>
                <h3 className="font-medium">Phone</h3>
                <p className="text-muted-foreground">
                  <a href="tel:+917678294864" className="hover:text-primary">
                    +91 7678294864
                  </a>
                </p>
              </div>
            </div>
          </div>
          
          <div className="rounded-lg border bg-card p-6 shadow-sm">
            <h2 className="mb-6 text-xl font-semibold">Send a Message</h2>
            
            <form className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="first-name">First Name</Label>
                  <Input id="first-name" placeholder="John" />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="last-name">Last Name</Label>
                  <Input id="last-name" placeholder="Doe" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="johndoe@example.com" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="How can we help you?" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Your message" className="min-h-32" />
              </div>
              
              <Button type="submit" className="w-full">
                Send Message
              </Button>
              
              <p className="text-center text-sm text-muted-foreground">
                We'll get back to you as soon as possible.
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
