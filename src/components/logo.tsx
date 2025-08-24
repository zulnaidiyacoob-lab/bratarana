import { Castle } from 'lucide-react';
import Link from 'next/link';

export function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2" aria-label="Bratarana Home">
      <Castle className="h-8 w-8 text-primary" />
      <span className="font-headline text-2xl font-bold text-primary">Bratarana</span>
    </Link>
  );
}
