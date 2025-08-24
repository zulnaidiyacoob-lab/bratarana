'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  BookOpen,
  CalendarDays,
  Cog,
  Download,
  Flag,
  HelpCircle,
  Palette,
  Phone,
  Users,
  Twitter,
  Instagram,
  Facebook,
} from 'lucide-react';

import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { ScrollReveal } from '@/components/scroll-reveal';
import { Badge } from '@/components/ui/badge';

const faqItems = [
  {
    question: 'What is PKKMB?',
    answer:
      'PKKMB (Pengenalan Kehidupan Kampus bagi Mahasiswa Baru) is an orientation event designed to introduce new students to the campus life, academic systems, and university culture at Universitas Trilogi.',
  },
  {
    question: 'When and where will PKKMB take place?',
    answer:
      'PKKMB is scheduled to start on September 9th, 2024. All activities will be held on the main Universitas Trilogi campus. Please refer to the detailed schedule for specific locations and times.',
  },
  {
    question: 'What should I bring?',
    answer:
      'You should bring your student ID, a notebook and pen, a water bottle, and any required documents mentioned in your admission package. Check the digital booklet for a detailed list.',
  },
  {
    question: 'Is attendance mandatory?',
    answer:
      'Yes, attendance at all PKKMB sessions is mandatory for all new students as it provides essential information for your university journey.',
  },
];

const committeeMembers = [
  { name: 'Dr. Eleanor Vance', role: 'Rector' },
  { name: 'Prof. Alistair Finch', role: 'Vice Rector' },
  { name: 'Johnathan Doe', role: 'Head of Committee' },
  { name: 'Jane Smith', role: 'Secretary' },
  { name: 'Michael Brown', role: 'Treasurer' },
  { name: 'Emily White', role: 'Event Coordinator' },
  { name: 'David Green', role: 'Logistics Head' },
  { name: 'Sarah Wilson', role: 'Security Coordinator' },
  { name: 'Chris Taylor', role: 'Creative Director' },
  { name: 'Olivia Martinez', role: 'Public Relations' },
  { name: 'James Johnson', role: 'Documentation' },
  { name: 'Sophia Lee', role: 'Medical Team Lead' },
  { name: 'Daniel Clark', role: 'Student Mentor Coordinator' },
  { name: 'Isabella Rodriguez', role: 'Workshop Facilitator' },
  { name: 'William Lewis', role: 'Sponsorship' },
];

const schedule = {
  day1: [
    { time: "08:00 - 09:00", title: "Opening Ceremony", description: "Official start of PKKMB 2024 with the Rector's speech.", location: "Grand Hall" },
    { time: "09:00 - 11:00", title: "University Vision & Mission", description: "Introduction to the core values and goals of Universitas Trilogi.", location: "Grand Hall" },
    { time: "11:00 - 12:00", title: "Campus Tour Part 1", description: "Guided tour of the main academic buildings and library.", location: "Campus Grounds" },
    { time: "12:00 - 13:00", title: "Lunch Break", description: "Enjoy lunch with your new peers.", location: "University Cafeteria" },
    { time: "13:00 - 15:00", title: "Introduction to Academic System", description: "Learn about credits, grading, and academic regulations.", location: "Auditorium" },
  ],
  day2: [
    { time: "08:30 - 10:00", title: "Faculty Introductions", description: "Meet the deans and key faculty members of your department.", location: "Faculty Halls" },
    { time: "10:00 - 12:00", title: "Student Organizations Fair", description: "Explore various clubs and organizations you can join.", location: "Student Center" },
    { time: "12:00 - 13:00", title: "Lunch Break", description: "Network and socialize.", location: "University Cafeteria" },
    { time: "13:00 - 15:00", title: "Workshop: Success Strategies", description: "Tips and tricks for a successful university life.", location: "Workshop Rooms" },
    { time: "15:00 - 16:00", title: "Closing Remarks Day 2", description: "Recap of the day's events.", location: "Auditorium" },
  ],
  day3: [
    { time: "09:00 - 11:00", title: "Library & Digital Resources", description: "A session on how to use the university's library and online databases.", location: "Library" },
    { time: "11:00 - 12:00", title: "Safety and Security Briefing", description: "Important information about campus safety protocols.", location: "Auditorium" },
    { time: "12:00 - 13:00", title: "Lunch Break", description: "Enjoy lunch with your group.", location: "University Cafeteria" },
    { time: "13:00 - 15:00", title: "Team Building Activities", description: "Fun games and activities to build camaraderie.", location: "Sports Field" },
    { time: "15:00 - 16:00", title: "Cultural Performances", description: "Showcase of student talents.", location: "Student Center" },
  ],
  day4: [
    { time: "09:00 - 10:30", title: "Alumni Sharing Session", description: "Get inspired by the stories of successful Bratarana alumni.", location: "Grand Hall" },
    { time: "10:30 - 11:30", title: "Final Q&A with Committee", description: "Your last chance to ask any remaining questions.", location: "Grand Hall" },
    { time: "11:30 - 12:00", title: "PKKMB Pledge", description: "Official pledge taking ceremony for new students.", location: "Grand Hall" },
    { time: "12:00 - 13:00", title: "Lunch & Networking", description: "Final lunch together.", location: "University Cafeteria" },
    { time: "13:00 - 14:00", title: "Closing Ceremony & Awards", description: "Official closing of PKKMB 2024.", location: "Grand Hall" },
  ]
};

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section
          id="hero"
          className="w-full pt-24 md:pt-32 lg:pt-40 bg-gradient-to-b from-background to-secondary/30"
        >
          <div className="container px-4 md:px-6 text-center">
            <ScrollReveal>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                Welcome to Bratarana Orientation
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl mt-4">
                Your journey begins here. Discover everything you need to know about starting your adventure at Universitas Trilogi.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={400}>
              <div className="mt-6 flex justify-center">
                <Button size="lg" asChild>
                  <a href="https://drive.google.com/uc?export=download&id=YOUR_FILE_ID" target="_blank">
                    <Download className="mr-2 h-5 w-5" />
                    Download Digital Booklet
                  </a>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <section id="vision-mission" className="bg-background">
          <div className="container px-4 md:px-6">
            <ScrollReveal className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm">Our Principles</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Vision & Mission</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Guiding our journey towards excellence and innovation in education.
                </p>
              </div>
            </ScrollReveal>
            <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-1 md:grid-cols-2 lg:gap-12 mt-12">
              <ScrollReveal delay={200}>
                <Card className="h-full shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="bg-primary text-primary-foreground p-3 rounded-md"><Flag className="h-6 w-6" /></div>
                      <CardTitle className="text-2xl">Our Vision</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">To be a leading institution that cultivates knowledge, character, and leadership, creating graduates who are ready to make a positive impact on the world.</p>
                  </CardContent>
                </Card>
              </ScrollReveal>
              <ScrollReveal delay={400}>
                <Card className="h-full shadow-lg hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="bg-primary text-primary-foreground p-3 rounded-md"><Flag className="h-6 w-6" /></div>
                      <CardTitle className="text-2xl">Our Mission</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc list-inside text-muted-foreground space-y-2">
                      <li>Provide world-class education and research facilities.</li>
                      <li>Foster a culture of critical thinking and creativity.</li>
                      <li>Promote community engagement and social responsibility.</li>
                      <li>Uphold values of integrity, diversity, and excellence.</li>
                    </ul>
                  </CardContent>
                </Card>
              </ScrollReveal>
            </div>
          </div>
        </section>
        
        <section id="activities" className="bg-secondary/50">
          <div className="container px-4 md:px-6">
            <ScrollReveal className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm">What's Happening</div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Activity Schedule</h2>
                  <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    A detailed breakdown of all events and sessions during the orientation.
                  </p>
                </div>
            </ScrollReveal>
            <div className="mx-auto max-w-5xl mt-12">
              <Accordion type="single" collapsible defaultValue="day1" className="w-full">
                <AccordionItem value="day1">
                  <AccordionTrigger className="text-2xl font-headline">Day 1: Welcome & Introduction</AccordionTrigger>
                  <AccordionContent>
                    <div className="grid gap-4 mt-4">
                      {schedule.day1.map((item, index) => (
                        <ScrollReveal key={index} delay={index * 100}>
                           <Card>
                              <CardContent className="p-4 flex justify-between items-center">
                                <div className="flex items-center gap-4">
                                  <div className="font-bold font-mono text-primary bg-primary/10 px-3 py-2 rounded-md">{item.time}</div>
                                  <div>
                                    <h3 className="font-bold text-lg">{item.title}</h3>
                                    <p className="text-sm text-muted-foreground">{item.description}</p>
                                  </div>
                                </div>
                                <Badge variant="secondary">{item.location}</Badge>
                              </CardContent>
                            </Card>
                        </ScrollReveal>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="day2">
                  <AccordionTrigger className="text-2xl font-headline">Day 2: Deep Dive & Connections</AccordionTrigger>
                  <AccordionContent>
                     <div className="grid gap-4 mt-4">
                      {schedule.day2.map((item, index) => (
                        <ScrollReveal key={index} delay={index * 100}>
                           <Card>
                              <CardContent className="p-4 flex justify-between items-center">
                                <div className="flex items-center gap-4">
                                  <div className="font-bold font-mono text-primary bg-primary/10 px-3 py-2 rounded-md">{item.time}</div>
                                  <div>
                                    <h3 className="font-bold text-lg">{item.title}</h3>
                                    <p className="text-sm text-muted-foreground">{item.description}</p>
                                  </div>
                                </div>
                                <Badge variant="secondary">{item.location}</Badge>
                              </CardContent>
                            </Card>
                        </ScrollReveal>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="day3">
                  <AccordionTrigger className="text-2xl font-headline">Day 3: Workshops & Activities</AccordionTrigger>
                  <AccordionContent>
                     <div className="grid gap-4 mt-4">
                      {schedule.day3.map((item, index) => (
                        <ScrollReveal key={index} delay={index * 100}>
                           <Card>
                              <CardContent className="p-4 flex justify-between items-center">
                                <div className="flex items-center gap-4">
                                  <div className="font-bold font-mono text-primary bg-primary/10 px-3 py-2 rounded-md">{item.time}</div>
                                  <div>
                                    <h3 className="font-bold text-lg">{item.title}</h3>
                                    <p className="text-sm text-muted-foreground">{item.description}</p>
                                  </div>
                                </div>
                                <Badge variant="secondary">{item.location}</Badge>
                              </CardContent>
                            </Card>
                        </ScrollReveal>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="day4">
                  <AccordionTrigger className="text-2xl font-headline">Day 4: Alumni & Closing</AccordionTrigger>
                  <AccordionContent>
                     <div className="grid gap-4 mt-4">
                      {schedule.day4.map((item, index) => (
                        <ScrollReveal key={index} delay={index * 100}>
                           <Card>
                              <CardContent className="p-4 flex justify-between items-center">
                                <div className="flex items-center gap-4">
                                  <div className="font-bold font-mono text-primary bg-primary/10 px-3 py-2 rounded-md">{item.time}</div>
                                  <div>
                                    <h3 className="font-bold text-lg">{item.title}</h3>
                                    <p className="text-sm text-muted-foreground">{item.description}</p>
                                  </div>
                                </div>
                                <Badge variant="secondary">{item.location}</Badge>
                              </CardContent>
                            </Card>
                        </ScrollReveal>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        <section id="logo-meaning" className="bg-background">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
              <ScrollReveal>
                <Image
                  alt="Logo"
                  className="mx-auto aspect-square overflow-hidden rounded-xl object-contain"
                  height="550"
                  src="https://placehold.co/550x550.png"
                  data-ai-hint="castle logo"
                  width="550"
                />
              </ScrollReveal>
              <ScrollReveal delay={200} className="space-y-4">
                <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm">Symbolism</div>
                <h2 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  The Meaning of Our Logo
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed">
                  Our castle-themed logo represents strength, heritage, and the journey of growth that each student undertakes.
                </p>
                <ul className="grid gap-2 py-4">
                  <li className="flex items-start gap-3">
                    <Palette className="mt-1 h-5 w-5 text-primary" />
                    <span>
                      <strong>The Towers:</strong> Symbolize our core pillars of Knowledge, Integrity, and Community.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Palette className="mt-1 h-5 w-5 text-primary" />
                    <span>
                      <strong>The Gate:</strong> Represents the welcoming and inclusive entrance to a world of opportunities.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Palette className="mt-1 h-5 w-5 text-primary" />
                    <span>
                      <strong>The Shield:</strong> Signifies the protection and support the university provides to its students.
                    </span>
                  </li>
                </ul>
              </ScrollReveal>
            </div>
          </div>
        </section>

        <section id="committee" className="bg-secondary/50">
          <div className="container px-4 md:px-6">
            <ScrollReveal className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm">The Team</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Organizing Committee</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Meet the dedicated individuals making this year's orientation a memorable experience.
                </p>
              </div>
            </ScrollReveal>
            <div className="mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 mt-12">
              {committeeMembers.map((member, index) => (
                <ScrollReveal key={member.name} delay={index * 50} className="text-center">
                  <Image
                    src={`https://placehold.co/200x200.png`}
                    data-ai-hint="portrait person"
                    alt={member.name}
                    width={200}
                    height={200}
                    className="rounded-full mx-auto mb-4 border-4 border-primary/20 shadow-lg"
                  />
                  <h3 className="text-lg font-bold">{member.name}</h3>
                  <p className="text-sm text-muted-foreground">{member.role}</p>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
        
        <section id="faq" className="bg-background">
          <div className="container px-4 md:px-6">
            <ScrollReveal className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-secondary px-3 py-1 text-sm">
                  <Cog className="inline-block h-4 w-4 mr-1" />
                  FAQ
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Frequently Asked Questions</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Have questions? We have answers. If you don't find what you're looking for, try our AI chatbot!
                </p>
              </div>
            </ScrollReveal>
            <div className="mx-auto max-w-3xl mt-12">
              <ScrollReveal delay={200}>
                <Accordion type="single" collapsible className="w-full">
                  {faqItems.map((item, index) => (
                    <AccordionItem key={index} value={`item-${index + 1}`}>
                      <AccordionTrigger className="text-lg font-bold text-left">{item.question}</AccordionTrigger>
                      <AccordionContent className="text-base text-muted-foreground">{item.answer}</AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
