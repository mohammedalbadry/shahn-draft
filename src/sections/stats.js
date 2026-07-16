import { stats } from '../data/stats.js';

export function renderStats() {
  const cards = stats
    .map(
      (s) => `
        <div class="flex-1 min-w-[140px] text-center bg-surface border border-line rounded-card p-6 md:p-8">
          <div class="font-display font-bold text-3xl md:text-4xl text-primary">${s.n}</div>
          <div class="text-muted text-sm mt-2">${s.label}</div>
        </div>`
    )
    .join('\n');

  return `
  <section class="px-5 md:px-12 py-10 md:py-14" aria-label="Stats">
    <div class="max-w-7xl mx-auto flex flex-wrap gap-5">
      ${cards}
    </div>
  </section>`;
}
