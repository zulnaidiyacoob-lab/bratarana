'use client';
import { useState, useEffect } from 'react';

// Set the event date to a future date for demonstration
const EVENT_DATE = new Date("2024-09-09T09:00:00");

export function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // This effect runs only on the client
    setIsClient(true);
    
    const calculateTimeLeft = () => {
        const now = new Date();
        const difference = EVENT_DATE.getTime() - now.getTime();

        if (difference > 0) {
            return {
              days: Math.floor(difference / (1000 * 60 * 60 * 24)),
              hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
              minutes: Math.floor((difference / 1000 / 60) % 60),
              seconds: Math.floor((difference / 1000) % 60),
            };
        }
        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
    
    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!isClient) {
    return <div className="flex items-center justify-center gap-2 md:gap-3 text-sm font-medium w-48 h-10 bg-gray-200 animate-pulse rounded-md" />;
  }
  
  const { days, hours, minutes, seconds } = timeLeft;
  
  if (EVENT_DATE.getTime() - new Date().getTime() < 0) {
    return <span className="text-sm font-medium text-accent">PKKMB telah dimulai</span>
  }

  return (
    <div className="flex items-center justify-center gap-2 md:gap-3 text-sm font-medium">
      <div className="flex flex-col items-center">
        <span className="font-bold text-lg leading-none">{days}</span>
        <span className="text-xs text-muted-foreground">days</span>
      </div>
      <span className="font-bold text-lg">:</span>
      <div className="flex flex-col items-center">
        <span className="font-bold text-lg leading-none">{hours.toString().padStart(2, '0')}</span>
        <span className="text-xs text-muted-foreground">hours</span>
      </div>
      <span className="font-bold text-lg hidden md:inline-block">:</span>
      <div className="flex-col items-center hidden md:flex">
        <span className="font-bold text-lg leading-none">{minutes.toString().padStart(2, '0')}</span>
        <span className="text-xs text-muted-foreground">mins</span>
      </div>
      <span className="font-bold text-lg hidden md:inline-block">:</span>
      <div className="flex-col items-center hidden md:flex">
        <span className="font-bold text-lg leading-none">{seconds.toString().padStart(2, '0')}</span>
        <span className="text-xs text-muted-foreground">secs</span>
      </div>
    </div>
  );
}
