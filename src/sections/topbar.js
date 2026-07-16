import { site } from '../data/site.js';

export function renderTopbar() {
  return `
  <div class="hidden sm:flex items-center justify-between px-5 md:px-12 py-2.5 bg-nav">
    <span class="flex items-center gap-2 text-dim text-[13px] font-semibold">
      <i class="icon-life-buoy text-[14px]"></i>${site.supportLine}
    </span>
    <a href="#games" class="bg-primary text-white font-bold text-xs px-[18px] py-2 rounded-btn hover:bg-primary-light transition-colors">
      Order Now
    </a>
  </div>`;
}
