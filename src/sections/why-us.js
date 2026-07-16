import { whyUs } from '../data/why-us.js';
import { site } from '../data/site.js';

export function renderWhyUs() {
  const cards = whyUs
    .map(
      (p) => `
        <div class="bg-surface border border-line rounded-card p-5 md:p-[22px]">
          <i class="${p.icon} text-primary text-[22px]"></i>
          <div class="font-bold text-sm mt-3.5 mb-1.5">${p.title}</div>
          <div class="text-muted text-xs leading-relaxed">${p.desc}</div>
        </div>`
    )
    .join('\n');

  return `
  <section id="why-us" class="px-5 md:px-12 py-10 md:py-14" aria-labelledby="why-us-heading">
    <div class="max-w-7xl mx-auto">
      <h2 id="why-us-heading" class="font-display font-bold text-2xl md:text-3xl uppercase mb-7">Why ${site.name}?</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        ${cards}
      </div>
    </div>
  </section>`;
}
