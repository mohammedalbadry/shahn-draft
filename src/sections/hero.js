import { site } from '../data/site.js';
import { heroTrustBadges } from '../data/trust-badges.js';

const HERO_IMG = 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1600&q=80&auto=format&fit=crop';

export function renderHero() {
  const badges = heroTrustBadges
    .map(
      (b) => `
        <div class="flex items-center gap-3">
          <div class="w-11 h-11 bg-primary rotate-45 rounded-[10px] flex items-center justify-center flex-shrink-0">
            <i class="${b.icon} -rotate-45 text-[17px] text-white"></i>
          </div>
          <div class="flex flex-col items-start gap-px">
            <span class="text-dim font-bold text-[10px] tracking-wider uppercase">${b.category}</span>
            <span class="text-ink font-bold text-[13px] uppercase">${b.label}</span>
          </div>
        </div>`
    )
    .join('\n');

  return `
  <section class="relative min-h-[560px] md:min-h-[760px] overflow-hidden" aria-label="Hero">
    <img src="${HERO_IMG}" alt="Gamer immersed in a night-time gaming session" class="absolute inset-0 w-full h-full object-cover">
    <div class="absolute inset-0" style="background:linear-gradient(180deg,rgba(10,12,18,.55),rgba(10,12,18,.93) 55%,#0a0c12 100%)"></div>
    <div class="relative flex flex-col items-center text-center px-6 md:px-16 pt-24 md:pt-28 pb-10">
      <span class="text-primary-soft font-bold text-xs md:text-sm tracking-[.14em]">${site.name.toUpperCase()} — GAME TOP-UPS</span>
      <h1 class="font-display font-bold text-4xl md:text-6xl leading-tight uppercase max-w-3xl mt-5">
        Top Up Your Game.<br>Instantly.
      </h1>
      <p class="text-muted text-base md:text-[17px] leading-relaxed max-w-[540px] mt-5">
        Pay with Vodafone Cash or PayPal and get your credit within the hour — safe, fast, no international Visa required.
      </p>
      <a href="#games" class="bg-primary text-white font-bold text-[15px] px-8 py-4 rounded-btn mt-9 shadow-[0_10px_30px_rgba(108,99,255,.35)] hover:bg-primary-light transition-colors">
        Order Your Top-Up
      </a>
      <div class="flex flex-wrap justify-center gap-9 mt-16">
        ${badges}
      </div>
      <div class="flex flex-col items-center gap-1 mt-16 text-dim">
        <span class="text-[11px] font-bold tracking-[.1em]">SCROLL DOWN</span>
        <i class="icon-chevron-down text-base animate-bounce-down"></i>
      </div>
    </div>
  </section>`;
}
