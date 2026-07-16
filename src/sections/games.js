import { mobileGames, consoleGames } from '../data/games.js';

function gameCard(g) {
  return `
        <div class="bg-surface border border-line rounded-card overflow-hidden flex flex-col">
          <img src="${g.img}" alt="${g.name} cover art" class="w-full h-32 md:h-36 object-cover" loading="lazy">
          <div class="p-4 flex flex-col flex-1">
            <div class="font-bold text-sm md:text-[15px]">${g.name}</div>
            <div class="text-muted text-xs mt-1 mb-2">${g.pack}</div>
            <div class="mt-auto">
              <div class="font-display font-bold text-base text-gold">${g.price}</div>
              <div class="text-dim text-[11px] mb-3">${g.priceEgp}</div>
              <a href="#" class="block text-center bg-primary text-white font-bold text-sm py-2.5 rounded-btn hover:bg-primary-light transition-colors">Order Now</a>
            </div>
          </div>
        </div>`;
}

export function renderGames() {
  const mobileCards = mobileGames.map(gameCard).join('\n');
  const consoleCards = consoleGames.map(gameCard).join('\n');

  return `
  <section id="games" class="px-5 md:px-12 py-10 md:py-14 bg-base-alt" aria-labelledby="games-heading">
    <div class="max-w-7xl mx-auto">
      <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <h2 id="games-heading" class="font-display font-bold text-2xl md:text-3xl uppercase">Choose Your Game</h2>
        <div class="flex gap-1 bg-surface border border-line rounded-btn p-1 self-start" role="tablist" aria-label="Game platform">
          <button type="button" role="tab" aria-selected="true" aria-controls="games-panel-mobile" id="games-tab-mobile" data-games-tab="mobile" class="games-tab cursor-pointer px-5 py-2 rounded-[6px] font-semibold text-[13px] bg-primary text-white transition-colors">Mobile</button>
          <button type="button" role="tab" aria-selected="false" aria-controls="games-panel-console" id="games-tab-console" data-games-tab="console" class="games-tab cursor-pointer px-5 py-2 rounded-[6px] font-semibold text-[13px] text-muted transition-colors">Console &amp; PC</button>
        </div>
      </div>

      <div id="games-panel-mobile" role="tabpanel" aria-labelledby="games-tab-mobile" class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-[18px]">
        ${mobileCards}
      </div>
      <div id="games-panel-console" role="tabpanel" aria-labelledby="games-tab-console" class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-[18px]" style="display:none">
        ${consoleCards}
      </div>

      <div class="flex justify-center mt-7">
        <a href="#" class="bg-surface border border-line-strong text-ink font-bold text-sm px-7 py-3 rounded-btn hover:border-primary transition-colors">View More Games</a>
      </div>
    </div>
  </section>`;
}
