import { site, footerNav, socialIcons, partnerBadges } from '../data/site.js';

function linkList(items) {
  return items
    .map((l) => `<a href="${l.href}" class="text-muted text-[13px] hover:text-ink transition-colors">${l.label}</a>`)
    .join('\n          ');
}

export function renderFooter() {
  const social = socialIcons
    .map(
      (s) => `
          <a href="${s.href}" aria-label="${s.label}" class="w-8 h-8 bg-primary rotate-45 rounded-[6px] flex items-center justify-center hover:bg-primary-light transition-colors">
            <i class="${s.icon} -rotate-45 text-[13px] text-white"></i>
          </a>`
    )
    .join('\n');

  const partners = partnerBadges
    .map(
      (p) => `<div class="bg-surface border border-line rounded-[6px] h-10 flex items-center justify-center text-primary font-bold text-xs">${p}</div>`
    )
    .join('\n            ');

  return `
  <footer id="footer" class="px-5 md:px-12 pt-12 pb-6 border-t border-line">
    <div class="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-10">
      <div class="flex flex-col gap-2.5">
        <span class="font-display font-bold text-base uppercase">Games</span>
        ${linkList(footerNav.games)}
      </div>
      <div class="flex flex-col gap-2.5">
        <span class="font-display font-bold text-base uppercase">Company</span>
        ${linkList(footerNav.company)}
      </div>
      <div class="flex flex-col gap-2.5">
        <span class="font-display font-bold text-base uppercase">Support</span>
        ${linkList(footerNav.support)}
      </div>
      <div class="flex flex-col gap-2.5">
        <span class="font-display font-bold text-base uppercase">Partners</span>
        <div class="grid grid-cols-3 gap-2">
            ${partners}
        </div>
      </div>
    </div>
    <div class="max-w-7xl mx-auto mt-8 pt-5 border-t border-line flex flex-col sm:flex-row items-center justify-between gap-4">
      <a href="mailto:${site.email}" class="text-muted text-xs">${site.email}</a>
      <div class="flex gap-3">
        ${social}
      </div>
      <span class="text-muted text-xs">© 2026 ${site.name}. All rights reserved</span>
    </div>
  </footer>`;
}
