import { offers } from '../data/offers.js';

export function renderOffers() {
  const cards = offers
    .map(
      (o) => `
        <div class="bg-surface border border-line rounded-card p-5 md:p-6 flex flex-col gap-3.5">
          <div class="flex items-center gap-3.5">
            <img src="${o.img}" alt="${o.name} icon" class="w-10 h-10 rounded-btn object-cover flex-shrink-0">
            <div>
              <div class="font-bold text-base">${o.name}</div>
              <div class="text-muted text-xs">${o.pack}</div>
            </div>
          </div>
          <div class="flex items-center justify-between">
            <div>
              <span class="text-dim text-[13px] line-through me-2">${o.oldPrice}</span>
              <span class="text-gold font-bold text-[17px]">${o.price}</span>
            </div>
            <span class="text-muted text-[11px]">Ends in ${o.mins} min</span>
          </div>
          <a href="#" class="text-center bg-primary text-white font-bold text-sm py-3 rounded-btn hover:bg-primary-light transition-colors">Order Now</a>
        </div>`
    )
    .join('\n');

  return `
  <section id="offers" class="px-5 md:px-12 py-10 md:py-14 bg-canvas-alt" aria-labelledby="offers-heading">
    <div class="max-w-7xl mx-auto">
      <div class="flex items-center gap-5 mb-7">
        <h2 id="offers-heading" class="font-display font-bold text-2xl md:text-3xl uppercase">Today's Offers</h2>
        <span class="bg-gold/15 text-gold text-xs font-bold px-3.5 py-1.5 rounded-btn">Limited Time</span>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        ${cards}
      </div>
    </div>
  </section>`;
}
