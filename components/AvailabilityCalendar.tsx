'use client';

import { useState, useEffect } from 'react';
import { Calendar as CalendarIcon, ChevronLeft, ChevronRight, Check, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface AvailabilityCalendarProps {
  selectedDate: string;
  onDateSelect: (date: string) => void;
  packageId?: string;
}

interface DayAvailability {
  date: Date;
  available: boolean;
  price?: number;
  seats?: number;
}

export default function AvailabilityCalendar({ 
  selectedDate, 
  onDateSelect, 
  packageId = 'default' 
}: AvailabilityCalendarProps) {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [availability, setAvailability] = useState<DayAvailability[]>([]);
  const [loading, setLoading] = useState(false);

  // Generate mock availability data
  const generateAvailability = (month: Date): DayAvailability[] => {
    const year = month.getFullYear();
    const monthIndex = month.getMonth();
    const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();
    
    const availabilityData: DayAvailability[] = [];
    
    for (let day = 1; day <= daysInMonth; day++) {
      const date = new Date(year, monthIndex, day);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      
      // Don't allow past dates
      if (date < today) {
        availabilityData.push({
          date,
          available: false,
        });
        continue;
      }
      
      // Mock availability logic
      const dayOfWeek = date.getDay();
      const isWeekend = dayOfWeek === 5 || dayOfWeek === 6; // Friday, Saturday
      const isPeakSeason = monthIndex >= 10 || monthIndex <= 2; // Nov - Feb
      
      let available = true;
      let seats = 20;
      let price = 150;
      
      // Reduce availability on weekends
      if (isWeekend) {
        seats = Math.floor(Math.random() * 8) + 5; // 5-12 seats
        price = Math.floor(price * 1.3); // 30% higher on weekends
      }
      
      // Higher prices in peak season
      if (isPeakSeason) {
        price = Math.floor(price * 1.2);
      }
      
      // Randomly make some days unavailable
      if (Math.random() < 0.1) { // 10% chance of being unavailable
        available = false;
        seats = 0;
      }
      
      availabilityData.push({
        date,
        available,
        price,
        seats,
      });
    }
    
    return availabilityData;
  };

  useEffect(() => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setAvailability(generateAvailability(currentMonth));
      setLoading(false);
    }, 300);
  }, [currentMonth]);

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const navigateMonth = (direction: 'prev' | 'next') => {
    setCurrentMonth(prev => {
      const newMonth = new Date(prev);
      if (direction === 'prev') {
        newMonth.setMonth(newMonth.getMonth() - 1);
      } else {
        newMonth.setMonth(newMonth.getMonth() + 1);
      }
      return newMonth;
    });
  };

  const handleDateClick = (day: DayAvailability) => {
    if (day.available && day.seats && day.seats > 0) {
      const dateStr = day.date.toISOString().split('T')[0];
      onDateSelect(dateStr);
    }
  };

  const getDayStatus = (day: DayAvailability) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    if (day.date < today) return 'past';
    if (!day.available) return 'unavailable';
    if ((day.seats || 0) === 0) return 'full';
    if ((day.seats || 0) <= 5) return 'limited';
    return 'available';
  };

  const firstDayOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1).getDay();
  const daysInMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0).getDate();

  return (
    <Card className="border-[#d4af37]/20 bg-gradient-to-br from-[#1a1a2e] to-[#16213e]">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl text-[#d4af37] flex items-center gap-2">
            <CalendarIcon className="w-6 h-6" />
            Select Date
          </CardTitle>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => navigateMonth('prev')}
              className="border-[#d4af37]/30 text-[#d4af37] hover:bg-[#d4af37] hover:text-[#1a1a2e]"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <span className="text-white font-semibold min-w-[150px] text-center">
              {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
            </span>
            <Button
              variant="outline"
              size="sm"
              onClick={() => navigateMonth('next')}
              className="border-[#d4af37]/30 text-[#d4af37] hover:bg-[#d4af37] hover:text-[#1a1a2e]"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {loading ? (
          <div className="flex items-center justify-center h-64">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#d4af37]"></div>
          </div>
        ) : (
          <div className="space-y-4">
            {/* Legend */}
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-gray-300">Available</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <span className="text-gray-300">Limited Seats</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <span className="text-gray-300">Fully Booked</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
                <span className="text-gray-300">Unavailable</span>
              </div>
            </div>

            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-1">
              {/* Week day headers */}
              {weekDays.map(day => (
                <div key={day} className="text-center text-sm font-semibold text-gray-400 py-2">
                  {day}
                </div>
              ))}
              
              {/* Empty cells for days before month starts */}
              {Array.from({ length: firstDayOfMonth }).map((_, index) => (
                <div key={`empty-${index}`} className="aspect-square"></div>
              ))}
              
              {/* Calendar days */}
              {availability.map((day, index) => {
                const status = getDayStatus(day);
                const isSelected = selectedDate === day.date.toISOString().split('T')[0];
                
                return (
                  <button
                    key={index}
                    onClick={() => handleDateClick(day)}
                    disabled={status === 'past' || status === 'unavailable' || status === 'full'}
                    className={cn(
                      'aspect-square rounded-lg border flex flex-col items-center justify-center text-xs font-medium transition-all relative',
                      {
                        'border-green-500 bg-green-500/20 text-green-400 hover:bg-green-500/30 cursor-pointer': 
                          status === 'available',
                        'border-yellow-500 bg-yellow-500/20 text-yellow-400 hover:bg-yellow-500/30 cursor-pointer': 
                          status === 'limited',
                        'border-red-500 bg-red-500/20 text-red-400 cursor-not-allowed': 
                          status === 'full',
                        'border-gray-600 bg-gray-600/20 text-gray-500 cursor-not-allowed': 
                          status === 'unavailable' || status === 'past',
                        'ring-2 ring-[#d4af37] bg-[#d4af37]/30 text-white': isSelected,
                      }
                    )}
                  >
                    <span>{day.date.getDate()}</span>
                    {status === 'available' && (
                      <Check className="w-3 h-3" />
                    )}
                    {status === 'limited' && (
                      <span className="text-xs">{day.seats || 0} left</span>
                    )}
                    {status === 'full' && (
                      <X className="w-3 h-3" />
                    )}
                    {day.price && (status === 'available' || status === 'limited') && (
                      <span className="text-xs opacity-75">${day.price}</span>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Selected Date Info */}
            {selectedDate && (
              <div className="mt-4 p-3 bg-[#d4af37]/10 rounded-lg border border-[#d4af37]/30">
                <p className="text-sm text-[#d4af37]">
                  Selected: {new Date(selectedDate).toLocaleDateString('en-US', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </p>
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
