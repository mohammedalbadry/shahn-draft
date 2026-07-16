import { testimonials } from '../data/testimonials.js';

export function renderTestimonials() {
  const cards = testimonials
    .map(
      (t) => `
        <div class="bg-surface border border-line rounded-card p-6 flex flex-col gap-4">
          <p class="text-[#c4cad4] text-[15px] leading-relaxed">&ldquo;${t.quote}&rdquo;</p>
          <div class="flex items-center gap-2.5 mt-auto">
            <img src="${t.avatar}" alt="${t.name}" class="w-[34px] h-[34px] rounded-full object-cover flex-shrink-0">
            <span class="font-bold text-sm">${t.name}</span>
            <span class="text-gold text-[13px] ms-auto">★ ${t.rating}</span>
          </div>
        </div>`
    )
    .join('\n');

  return `
  <section class="px-5 md:px-12 py-10 md:py-14" aria-labelledby="testimonials-heading">
    <div class="max-w-7xl mx-auto">
      <h2 id="testimonials-heading" class="font-display font-bold text-2xl md:text-3xl uppercase mb-7">What Players Say</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        ${cards}
      </div>
    </div>
  </section>`;
}
