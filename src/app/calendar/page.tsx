import { AppShell } from "@/components/AppShell";
import { PageHeader } from "@/components/PageHeader";
import { CalendarView } from "@/components/journal/CalendarView";
import { getEntries } from "@/lib/data";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function CalendarPage() {
    const entries = getEntries();
  return (
    <AppShell>
      <PageHeader title="Calendar" />
      <main className="flex-1 space-y-4 p-4 md:p-6 flex justify-center">
        <Card>
            <CardHeader>
                <CardTitle className="font-headline">Your Entry Calendar</CardTitle>
                <CardDescription>Dates with an underline have a journal entry.</CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center">
                <CalendarView entries={entries} />
            </CardContent>
        </Card>
      </main>
    </AppShell>
  );
}
