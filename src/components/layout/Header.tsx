'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, BarChart2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { navLinks } from '@/lib/data';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('#home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      const sections = navLinks.map(link => document.querySelector(link.href));
      let current = '#home';
      for (const section of sections) {
        if (section && window.scrollY >= (section as HTMLElement).offsetTop - 100) {
          current = `#${section.id}`;
        }
      }
      setActiveLink(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const renderNavLinks = (isMobile = false) =>
    navLinks.map((link) => (
      <li key={link.href}>
        <Link
          href={link.href}
          className={cn(
            'px-3 py-2 rounded-md text-sm font-medium transition-colors',
            activeLink === link.href
              ? 'text-primary'
              : 'text-foreground/80 hover:text-primary',
            isMobile && 'block w-full text-left'
          )}
        >
          {isMobile ? (
            <SheetClose asChild>
                <span>{link.label}</span>
            </SheetClose>
          ) : link.label}
        </Link>
      </li>
    ));

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled ? 'bg-card/95 shadow-md backdrop-blur-sm' : 'bg-transparent'
      )}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="#home" className="flex items-center gap-2 text-xl font-bold text-primary">
              <BarChart2 className="h-6 w-6" />
              <span>Alex Doe</span>
            </Link>
          </div>
          <div className="hidden md:block">
            <ul className="ml-10 flex items-baseline space-x-4">
              {renderNavLinks()}
            </ul>
          </div>
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" aria-label="Open menu">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <div className="flex justify-between items-center p-4 border-b">
                   <Link href="#home" className="flex items-center gap-2 text-lg font-bold text-primary">
                      <BarChart2 className="h-5 w-5" />
                       <SheetClose asChild><span>Alex Doe</span></SheetClose>
                    </Link>
                  <SheetClose asChild>
                    <Button variant="ghost" size="icon" aria-label="Close menu">
                      <X className="h-6 w-6" />
                    </Button>
                  </SheetClose>
                </div>
                <ul className="mt-6 space-y-2 px-2">
                  {renderNavLinks(true)}
                </ul>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
