'use client';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui/dialog';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

interface BookletDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const bookletPages = [
    {
        title: "Welcome to Castleton",
        content: "This booklet is your essential guide to the PKKMB orientation. It contains schedules, rules, and important information to help you start your university journey smoothly. Make sure to read it carefully!",
        image: { src: "https://placehold.co/400x300.png", hint: "university welcome" },
    },
    {
        title: "Rules & Regulations",
        content: "1. All students must wear the official orientation attire. \n2. Punctuality is mandatory for all sessions. \n3. Respect your peers, seniors, and university staff. \n4. Keep the campus clean and tidy. \n5. Active participation is highly encouraged.",
        image: { src: "https://placehold.co/400x300.png", hint: "rules guidelines" },
    },
    {
        title: "Campus Map",
        content: "Find your way around the campus with ease. Key locations like the Grand Hall, Auditorium, and Cafeteria are marked. You can find a high-resolution map on the university website.",
        image: { src: "https://placehold.co/400x500.png", hint: "campus map" },
    },
    {
        title: "Emergency Contacts",
        content: "In case of an emergency, please contact: \n- Campus Security: (123) 456-7890 \n- Medical Center: (123) 456-7891 \n- Head of Committee: (123) 456-7892. Stay safe!",
        image: { src: "https://placehold.co/400x300.png", hint: "emergency phone" },
    },
]

export function BookletDialog({ open, onOpenChange }: BookletDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-3xl p-0">
        <Carousel className="w-full">
          <CarouselContent>
            {bookletPages.map((page, index) => (
              <CarouselItem key={index}>
                <div className="grid md:grid-cols-2 gap-6 items-center">
                    <div className="p-8 space-y-4">
                        <DialogHeader>
                          <DialogTitle className="text-3xl font-headline">{page.title}</DialogTitle>
                        </DialogHeader>
                        <p className="whitespace-pre-line text-muted-foreground">{page.content}</p>
                        <DialogFooter className="sm:justify-start">
                            <span className="text-sm text-muted-foreground">Page {index + 1} of {bookletPages.length}</span>
                        </DialogFooter>
                    </div>
                    <div className="h-full w-full">
                        <Image
                            src={page.image.src}
                            data-ai-hint={page.image.hint}
                            alt={page.title}
                            width={400}
                            height={500}
                            className="object-cover h-[550px] w-full"
                        />
                    </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-4" />
          <CarouselNext className="absolute right-4" />
        </Carousel>
      </DialogContent>
    </Dialog>
  );
}
