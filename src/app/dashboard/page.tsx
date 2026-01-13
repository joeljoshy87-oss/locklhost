import { AppShell } from "@/components/AppShell";
import { PageHeader } from "@/components/PageHeader";
import { EntryList } from "@/components/journal/EntryList";
import { getEntries } from "@/lib/data";

export default function DashboardPage() {
  const entries = getEntries();
  return (
    <AppShell>
      <PageHeader title="Dashboard" />
      <main className="flex-1 space-y-4 p-4 md:p-6">
        <EntryList entries={entries} />
      </main>
    </AppShell>
  );
}
