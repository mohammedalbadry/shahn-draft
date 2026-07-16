export function renderCtaBanner() {
  return `
  <section class="relative bg-primary px-6 py-14 md:py-16 text-center overflow-hidden" aria-label="Call to action">
    <div class="relative flex flex-col items-center gap-4">
      <div class="relative flex items-center justify-center px-4 py-2">
        <span class="absolute inset-0 flex items-center justify-center pointer-events-none select-none text-white/[0.08] font-display font-bold text-[56px] md:text-[96px] uppercase whitespace-nowrap">CHARGE NOW</span>
        <h2 class="relative text-white font-display font-bold text-2xl md:text-4xl uppercase max-w-2xl">
          Made it this far? Your credit is one order away.
        </h2>
      </div>
      <p class="text-white/80 text-sm md:text-base max-w-lg">
        Pick your game, pay with Vodafone Cash or PayPal, and get topped up within the hour.
      </p>
      <a href="#games" class="bg-canvas text-white font-bold text-[15px] px-9 py-4 rounded-btn mt-2 hover:bg-nav transition-colors">
        Charge Now
      </a>
    </div>
  </section>`;
}
