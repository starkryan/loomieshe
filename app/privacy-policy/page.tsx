import React from 'react';

export const metadata = {
  title: 'Privacy Policy - NextZenLoom',
  description: 'Privacy Policy for NextZenLoom apps and services',
};

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-8 text-3xl font-bold tracking-tight sm:text-4xl">Privacy Policy</h1>
        <p className="mb-4 text-muted-foreground">Last updated: June 1, 2024</p>
        
        <div className="prose prose-slate dark:prose-invert max-w-none">
          <p>
            At NextZenLoom, we respect your privacy and are committed to protecting your personal data. 
            This Privacy Policy explains how we collect, use, and safeguard your information when you use our
            applications and services.
          </p>
          
          <h2 className="mt-8 mb-4 text-2xl font-semibold">Information We Collect</h2>
          <p>
            We may collect several types of information from and about users of our applications, including:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Personal identifiers such as name, email address, and phone number</li>
            <li>Usage data including how you interact with our applications</li>
            <li>Device information such as IP address, device type, and operating system</li>
            <li>Location data when you grant permission for location-based features</li>
          </ul>
          
          <h2 className="mt-8 mb-4 text-2xl font-semibold">How We Use Your Information</h2>
          <p>
            We use the information we collect for various purposes, including:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>Providing, maintaining, and improving our applications</li>
            <li>Personalizing your experience and delivering relevant content</li>
            <li>Analyzing usage patterns to enhance user experience</li>
            <li>Communicating with you about updates and new features</li>
            <li>Ensuring the security and integrity of our applications</li>
          </ul>
          
          <h2 className="mt-8 mb-4 text-2xl font-semibold">Data Storage and Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your personal data from
            unauthorized access, disclosure, alteration, or destruction. However, no method of transmission or
            storage is completely secure, and we cannot guarantee absolute security.
          </p>
          
          <h2 className="mt-8 mb-4 text-2xl font-semibold">Third-Party Services</h2>
          <p>
            Our applications may integrate with third-party services. These third parties may collect information
            about you when you interact with their services. We encourage you to review the privacy policies of
            these third parties.
          </p>
          
          <h2 className="mt-8 mb-4 text-2xl font-semibold">Data Retention</h2>
          <p>
            We retain your personal data only for as long as necessary to fulfill the purposes for which we
            collected it, including for the purposes of satisfying any legal, accounting, or reporting requirements.
          </p>
          
          <h2 className="mt-8 mb-4 text-2xl font-semibold">Your Rights</h2>
          <p>
            Depending on your location, you may have certain rights regarding your personal data, including:
          </p>
          <ul className="list-disc pl-6 mb-4">
            <li>The right to access your personal data</li>
            <li>The right to correct inaccurate or incomplete data</li>
            <li>The right to delete your personal data</li>
            <li>The right to restrict or object to processing</li>
            <li>The right to data portability</li>
          </ul>
          
          <h2 className="mt-8 mb-4 text-2xl font-semibold">Children's Privacy</h2>
          <p>
            Our applications are not intended for children under 13 years of age. We do not knowingly collect
            personal information from children under 13. If you are a parent or guardian and believe that your
            child has provided us with personal information, please contact us.
          </p>
          
          <h2 className="mt-8 mb-4 text-2xl font-semibold">Changes to This Privacy Policy</h2>
          <p>
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting
            the new Privacy Policy on this page and updating the "Last updated" date.
          </p>
          
          <h2 className="mt-8 mb-4 text-2xl font-semibold">Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at:
          </p>
          <p className="mb-8">
            <strong>Email:</strong> contact@nextzenloom.com<br />
            <strong>Address:</strong> Gaya- 804428, Bihar, India
          </p>
        </div>
      </div>
    </div>
  );
} 