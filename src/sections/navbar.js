import { site, mainNavLinks } from '../data/site.js';

export function renderNavbar() {
  const links = mainNavLinks
    .map(
      (l) => `<a href="${l.href}" class="text-white font-bold text-sm ${l.active ? '' : 'opacity-85 hover:opacity-100'} transition-opacity">${l.label}</a>`
    )
    .join('\n          ');

  const mobileLinks = mainNavLinks
    .map((l) => `<a href="${l.href}" class="block py-3 text-white font-semibold text-base border-b border-white/10">${l.label}</a>`)
    .join('\n        ');

  return `
  <header class="bg-primary relative z-30">
    <div class="flex items-center justify-between px-5 md:px-12 py-4">
      <a href="/" class="flex items-center gap-3">
        <span class="w-9 h-9 rounded-[9px] bg-base flex items-center justify-center flex-shrink-0">
          <i class="${site.logoIcon} text-primary text-[17px]"></i>
        </span>
        <span class="font-display font-bold text-lg text-white tracking-wide uppercase">${site.name}</span>
      </a>

      <nav class="hidden md:flex items-center gap-7" aria-label="Main">
          ${links}
      </nav>

      <div class="flex items-center gap-4 md:gap-[18px] text-white">
        <a href="#" class="hidden md:inline font-semibold text-sm cursor-pointer hover:opacity-80">Login</a>
        <button type="button" aria-label="Search" class="hidden md:inline-flex">
          <i class="icon-search text-base"></i>
        </button>
        <button type="button" id="mobile-menu-toggle" aria-label="Toggle menu" aria-expanded="false" aria-controls="mobile-menu" class="md:hidden">
          <i class="icon-menu text-lg" id="mobile-menu-icon"></i>
        </button>
      </div>
    </div>

    <div id="mobile-menu" class="md:hidden hidden px-5 pb-4 bg-primary border-t border-white/10">
        ${mobileLinks}
      <a href="#" class="block py-3 text-white font-semibold text-base">Login</a>
    </div>
  </header>`;
}
