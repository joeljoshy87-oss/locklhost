import type { JournalEntry } from "@/lib/types";
import { EntryListItem } from "@/components/journal/EntryListItem";

export function EntryList({ entries }: { entries: JournalEntry[] }) {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {entries.map((entry) => (
        <EntryListItem key={entry.id} entry={entry} />
      ))}
    </div>
  );
}
