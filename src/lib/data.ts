import type { JournalEntry } from '@/lib/types';

const today = new Date();
const yesterday = new Date(today);
yesterday.setDate(yesterday.getDate() - 1);
const twoDaysAgo = new Date(today);
twoDaysAgo.setDate(twoDaysAgo.getDate() - 2);

const entries: JournalEntry[] = [
  {
    id: '1',
    date: today.toISOString(),
    title: 'A Beautiful Morning',
    content: 'Woke up early and watched the sunrise. The sky was a mix of pink and orange. It was a peaceful start to the day. I feel a sense of calm and optimism. Planning to go for a long walk later and maybe read a book in the park. It\'s important to cherish these quiet moments.',
    tags: ['gratitude', 'nature', 'personal'],
  },
  {
    id: '2',
    date: yesterday.toISOString(),
    title: 'Coding Challenges',
    content: 'Spent most of the day working on a new feature for my project. Ran into a few tricky bugs, but managed to solve them after a bit of perseverance. The feeling of finally figuring out a problem is incredibly satisfying. I learned a lot about state management in React.',
    tags: ['work', 'coding', 'learning'],
  },
  {
    id: '3',
    date: twoDaysAgo.toISOString(),
    title: 'Thoughts on a Book',
    content: 'Finished reading "The Midnight Library" by Matt Haig. A fascinating concept about choices and regrets. It made me reflect on my own life path and the small decisions that shape our future. A highly recommended read for anyone feeling a bit lost.',
    tags: ['reading', 'reflection', 'personal'],
  },
  {
    id: '4',
    date: new Date(today.setDate(today.getDate() - 5)).toISOString(),
    title: 'A Walk in the Park',
    content: 'The weather was perfect for a walk. The park was full of life, with families playing and dogs chasing balls. I sat on a bench and just observed, feeling connected to the world around me. Sometimes, the simplest things bring the most joy.',
    tags: ['nature', 'personal', 'joy'],
  },
];

export function getEntries() {
  return entries.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getEntry(id: string) {
  return entries.find((entry) => entry.id === id);
}

export function getTags() {
  const allTags = entries.flatMap((entry) => entry.tags);
  return [...new Set(allTags)].sort();
}
