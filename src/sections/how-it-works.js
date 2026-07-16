import { howItWorks } from '../data/how-it-works.js';

export function renderHowItWorks() {
  const cards = howItWorks
    .map(
      (step) => `
        <div class="bg-surface border border-line rounded-card p-6 md:p-7">
          <div class="font-display font-bold text-3xl md:text-4xl text-primary mb-3.5">${step.n}</div>
          <div class="font-bold text-base md:text-[17px] mb-2">${step.title}</div>
          <div class="text-muted text-sm leading-relaxed">${step.desc}</div>
        </div>`
    )
    .join('\n');

  return `
  <section id="how-it-works" class="px-5 md:px-12 py-10 md:py-14" aria-labelledby="how-heading">
    <div class="max-w-7xl mx-auto">
      <h2 id="how-heading" class="font-display font-bold text-2xl md:text-3xl uppercase mb-7">How It Works</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-5">
        ${cards}
      </div>
    </div>
  </section>`;
}
