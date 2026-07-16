import { renderLayout } from '../layout.js';
import { renderTopbar } from '../sections/topbar.js';
import { renderNavbar } from '../sections/navbar.js';
import { renderHero } from '../sections/hero.js';
import { renderTrustBar } from '../sections/trust-bar.js';
import { renderWhyUs } from '../sections/why-us.js';
import { renderHowItWorks } from '../sections/how-it-works.js';
import { renderGames } from '../sections/games.js';
import { renderOffers } from '../sections/offers.js';
import { renderStats } from '../sections/stats.js';
import { renderTestimonials } from '../sections/testimonials.js';
import { renderArticles } from '../sections/articles.js';
import { renderCtaBanner } from '../sections/cta-banner.js';
import { renderFooter } from '../sections/footer.js';

export function renderHomePage() {
  const bodyContent = `
${renderTopbar()}
${renderNavbar()}
<main>
${renderHero()}
${renderTrustBar()}
${renderWhyUs()}
${renderHowItWorks()}
${renderGames()}
${renderOffers()}
${renderStats()}
${renderTestimonials()}
${renderArticles()}
${renderCtaBanner()}
</main>
${renderFooter()}
`;

  return renderLayout({
    title: 'Shahn Masr — Instant Game Top-Ups for Egypt (Vodafone Cash & PayPal)',
    description:
      'Top up PUBG Mobile, Free Fire, GTA Online, EA FC, Fortnite and more. Pay with Vodafone Cash or PayPal, no international Visa needed, delivered within the hour.',
    bodyContent,
    activePath: '/',
  });
}
