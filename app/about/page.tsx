import React from 'react';

export const metadata = {
  title: 'About - NextZenLoom',
  description: 'About NextZenLoom - Innovating with AI technology',
};

export default function About() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-8 text-3xl font-bold tracking-tight sm:text-4xl">About NextZenLoom</h1>
        
        <div className="prose prose-slate dark:prose-invert max-w-none">
          <p className="text-lg text-muted-foreground">
            Founded with a vision to make AI technology accessible and impactful, NextZenLoom is at the forefront of developing innovative AI solutions for businesses and individuals.
          </p>
          
          <h2 className="mt-8 mb-4 text-2xl font-semibold">Our Mission</h2>
          <p className="text-muted-foreground">
            At NextZenLoom, our mission is to harness the power of artificial intelligence to create intuitive, efficient, and transformative applications that solve real-world problems and enhance human capabilities.
          </p>
          
          <h2 className="mt-8 mb-4 text-2xl font-semibold">Our Vision</h2>
          <p className="text-muted-foreground">
            We envision a world where AI is a helpful companion in everyday life, making tasks easier, decisions smarter, and experiences richer. We're building a future where technology works seamlessly with human intuition.
          </p>
          
          <h2 className="mt-8 mb-4 text-2xl font-semibold">Our Approach</h2>
          <p className="text-muted-foreground">
            We believe in developing AI that is:
          </p>
          <ul className="list-disc pl-6 mb-4 text-muted-foreground">
            <li><strong>Human-centered</strong> - designed with real people and real needs in mind</li>
            <li><strong>Ethical</strong> - respecting privacy, ensuring transparency, and promoting fairness</li>
            <li><strong>Innovative</strong> - pushing boundaries and exploring new possibilities</li>
            <li><strong>Accessible</strong> - making advanced technology available to everyone</li>
          </ul>
          
          <h2 className="mt-8 mb-4 text-2xl font-semibold">Our Team</h2>
          <p className="text-muted-foreground">
            NextZenLoom brings together a diverse team of AI researchers, software engineers, designers, and industry experts who share a passion for creating technology that makes a difference.
          </p>
          
          <h2 className="mt-8 mb-4 text-2xl font-semibold">Contact Us</h2>
          <p className="text-muted-foreground">
            We'd love to hear from you! Whether you have questions about our upcoming applications, partnership opportunities, or just want to say hello, please don't hesitate to reach out.
          </p>
          <p className="mb-8 text-muted-foreground">
            <strong>Email:</strong> contact@nextzenloom.com<br />
            <strong>Address:</strong> Gaya- 804428, Bihar, India
          </p>
        </div>
      </div>
    </div>
  );
} 