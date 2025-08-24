import { Facebook, Instagram, Phone, Twitter } from 'lucide-react';
import { Logo } from '@/components/logo';
import { Button } from '@/components/ui/button';

export function Footer() {
  return (
    <footer id="contact" className="bg-secondary py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        <div>
          <Logo />
          <p className="mt-2 text-muted-foreground text-sm max-w-xs mx-auto md:mx-0">
            Universitas Trilogi Orientation Program. Preparing future leaders since 1887.
          </p>
        </div>
        <div>
          <h3 className="font-headline text-lg font-semibold">Contact Information</h3>
          <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
            <li>Email: pkkmb@trilogi.ac.id</li>
            <li>
                <div className="flex items-center justify-center md:justify-start gap-2">
                    <Phone className="h-4 w-4" />
                    <span>(123) 456-7890</span>
                </div>
            </li>
            <li>Universitas Trilogi, 123 Scholar Ave, Wisdom, EduState</li>
          </ul>
        </div>
        <div>
          <h3 className="font-headline text-lg font-semibold">Follow Us</h3>
          <div id="social-media" className="flex justify-center md:justify-start space-x-2 mt-2">
            <Button variant="ghost" size="icon" asChild>
                <a href="#"><Twitter className="h-5 w-5" /></a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
                 <a href="#"><Instagram className="h-5 w-5" /></a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
                 <a href="#"><Facebook className="h-5 w-5" /></a>
            </Button>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-8 border-t pt-6 text-center text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} GDGoC Trilogi. All rights reserved.</p>
      </div>
    </footer>
  );
}
