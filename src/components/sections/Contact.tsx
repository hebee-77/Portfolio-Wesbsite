'use client';

import { MapPin, Phone, Mail, Github, Linkedin } from 'lucide-react';
import Link from 'next/link';

const contactDetails = [
    {
        icon: MapPin,
        text: 'Chittoor, Andhra Pradesh',
        href: 'https://www.google.com/maps/place/Chittoor,+Andhra+Pradesh',
        isLink: true,
    },
    {
        icon: Mail,
        text: 'hebeectr2004@gmail.com',
        href: 'mailto:hebeectr2004@gmail.com',
        isLink: true,
    },
    {
        icon: Phone,
        text: '+91 6302514642',
        href: 'tel:+916302514642',
        isLink: true,
    },
    {
        icon: Github,
        text: 'GitHub',
        href: 'https://github.com/hebee-77',
        isLink: true,
    },
    {
        icon: Linkedin,
        text: 'LinkedIn',
        href: 'https://www.linkedin.com/in/hebee/',
        isLink: true,
    },
];

const Contact = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Get In Touch</h2>
      </div>
      <div className="max-w-3xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {contactDetails.map((detail, index) => {
            const content = (
              <div className="flex items-center gap-4">
                <detail.icon className="h-6 w-6 text-primary" />
                <span className="text-foreground">{detail.text}</span>
              </div>
            );

            if (detail.isLink) {
              return (
                <Link key={detail.href} href={detail.href} target="_blank" rel="noopener noreferrer" className="transition-opacity hover:opacity-80">
                  {content}
                </Link>
              );
            }
            return <div key={detail.text}>{content}</div>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Contact;
