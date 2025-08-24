'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  BookOpen,
  CalendarDays,
  Cog,
  Download,
  Flag,
  HelpCircle,
  Menu,
  Palette,
  Phone,
  Users,
  Twitter,
  Instagram,
  Facebook,
  Gem,
  Building,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { Countdown } from '@/components/countdown';
import { Logo } from '@/components/logo';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '#pkkmb-vision-mission', label: 'Visi & Misi PKKMB', icon: Flag },
  { href: '#university-vision-mission', label: 'Visi, Misi & Motto Univ', icon: Building },
  { href: '#activities', label: 'Activities', icon: CalendarDays },
  { href: '#logo-meaning', label: 'Logo Meaning', icon: Palette },
  { href: '#committee', label: 'Committee', icon: Users },
  { href: '#faq', label: 'FAQ', icon: Cog },
  { href: '#contact', label: 'Contact', icon: Phone },
];


export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={cn("sticky top-0 z-40 w-full transition-all duration-300", isScrolled ? 'bg-background/80 backdrop-blur-lg border-b' : 'bg-transparent')}>
        <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-6">
              <Logo />
              <nav className="hidden lg:flex items-center gap-6 text-sm font-medium">
                  {navLinks.map((link) => (
                      <Link key={link.href} href={link.href} className="text-foreground/80 hover:text-foreground transition-colors">
                          {link.label}
                      </Link>
                  ))}
              </nav>
          </div>
          
          <div className="hidden lg:flex items-center gap-4">
              <Countdown />
          </div>

          <div className="lg:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] flex flex-col">
                <SheetHeader className="p-6 pb-0">
                  <SheetTitle>
                    <Logo />
                  </SheetTitle>
                </SheetHeader>
                <div className="flex flex-col h-full overflow-y-auto">
                  <nav className="flex flex-col gap-4 p-6 text-lg font-medium">
                      {navLinks.map((link) => (
                          <SheetClose key={link.href} asChild>
                              <Link href={link.href} className="flex items-center gap-3 rounded-md p-2 hover:bg-secondary">
                                  <link.icon className="h-5 w-5" />
                                  {link.label}
                              </Link>
                          </SheetClose>
                      ))}
                  </nav>
                  <div className="mt-auto p-6 space-y-4 border-t">
                      <div className="p-4 rounded-lg bg-secondary">
                          <Countdown />
                      </div>
                      <Button asChild className="w-full">
                        <a href="https://drive.google.com/uc?export=download&id=YOUR_FILE_ID" target="_blank" className="flex items-center">
                            <Download className="mr-2 h-4 w-4" />
                            Download Booklet
                        </a>
                      </Button>
                      <div className="flex justify-center space-x-2 mt-4">
                         <Button variant="ghost" size="icon" asChild><a href="#"><Twitter className="h-5 w-5" /></a></Button>
                         <Button variant="ghost" size="icon" asChild><a href="#"><Instagram className="h-5 w-5" /></a></Button>
                         <Button variant="ghost" size="icon" asChild><a href="#"><Facebook className="h-5 w-5" /></a></Button>
                      </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  );
}
