import { AppShell } from "@/components/AppShell";
import { PageHeader } from "@/components/PageHeader";
import { getEntries } from "@/lib/data";
import { EntryList } from "@/components/journal/EntryList";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function DashboardPage() {
  const entries = getEntries();

  return (
    <AppShell>
      <PageHeader title="Dashboard" />
      <main className="flex-1 space-y-4 p-4 md:p-6">
        <Card>
          <CardHeader>
            <CardTitle className="font-headline">Welcome to your Journal</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              This is your space to reflect, record, and remember. Create a new entry to get started.
            </p>
          </CardContent>
        </Card>
        <EntryList entries={entries} />
      </main>
    </AppShell>
  );
}
