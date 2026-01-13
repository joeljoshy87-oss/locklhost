"use client";

import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import type { JournalEntry } from "@/lib/types";
import { parseISO } from "date-fns";

export function CalendarView({ entries }: { entries: JournalEntry[] }) {
  const [date, setDate] = useState<Date | undefined>(new Date());

  const entryDates = entries.map(entry => parseISO(entry.date));

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border"
      modifiers={{
        hasEntry: entryDates,
      }}
      modifiersStyles={{
        hasEntry: {
            textDecoration: 'underline',
            textDecorationColor: 'hsl(var(--accent))',
            textUnderlineOffset: '0.2em',
        }
      }}
    />
  );
}
