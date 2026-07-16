import { trustBar } from '../data/trust-badges.js';

export function renderTrustBar() {
  const items = trustBar
    .map(
      (item) => `
        <div class="flex-1 min-w-[220px] bg-surface border border-line rounded-card px-5 py-4 flex items-center gap-2.5">
          <span class="w-2 h-2 rounded-full bg-primary flex-shrink-0"></span>
          <span class="font-semibold text-sm">${item}</span>
        </div>`
    )
    .join('\n');

  return `
  <section class="px-5 md:px-12 py-8 md:py-10 max-w-7xl mx-auto flex flex-wrap gap-4" aria-label="Trust indicators">
    ${items}
  </section>`;
}
