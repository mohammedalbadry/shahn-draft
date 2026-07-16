import { articles } from '../data/articles.js';

export function renderArticles() {
  const cards = articles
    .map(
      (post) => `
        <a href="${post.href}" class="relative rounded-card overflow-hidden h-[220px] block group">
          <img src="${post.img}" alt="${post.title}" class="absolute inset-0 w-full h-full object-cover">
          <div class="absolute inset-0" style="background:linear-gradient(180deg,transparent 40%,rgba(10,12,18,.95))"></div>
          <div class="absolute bottom-0 left-0 right-0 p-4">
            <div class="text-white font-bold text-[13px] leading-snug">${post.title}</div>
            <div class="text-muted text-[10px] mt-1.5">${post.date}</div>
          </div>
        </a>`
    )
    .join('\n');

  return `
  <section class="px-5 md:px-12 py-10 md:py-14" aria-labelledby="articles-heading">
    <div class="max-w-7xl mx-auto">
      <h2 id="articles-heading" class="font-display font-bold text-2xl md:text-3xl uppercase mb-7">Guides &amp; Articles</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        ${cards}
      </div>
    </div>
  </section>`;
}
