import Link from 'next/link';
import { BarChart2 } from 'lucide-react';
import { socialLinks, navLinks } from '@/lib/data';
import { cn } from '@/lib/utils';

const Footer = () => {
  return (
    <footer className={cn("glassmorphic-card", "bg-transparent mt-auto")}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 text-lg font-bold text-primary">
            <BarChart2 className="h-5 w-5" />
            <span>Hebee E</span>
          </div>
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-muted-foreground hover:text-primary transition-colors">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center space-x-4">
             {socialLinks.map((social) => (
                <Link key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.name}>
                <social.icon className="h-5 w-5 text-muted-foreground transition-colors hover:text-primary" />
                </Link>
            ))}
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-muted-foreground border-t pt-6">
          <p>&copy; {new Date().getFullYear()} Hebee E. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
