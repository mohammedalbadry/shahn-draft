export const site = {
  name: 'Shahn Masr',
  tagline: 'Game top-ups for Egypt — instant, local, no international Visa needed.',
  supportLine: '24/7 Support',
  email: 'support@shahnmasr.com',
  whatsapp: '+20 100 123 4567',
  logoIcon: 'icon-zap',
};

export const mainNavLinks = [
  { label: 'Home', href: '/', active: true },
  { label: 'Games', href: '/#games' },
  { label: 'Offers', href: '/#offers' },
  { label: 'About', href: '/#why-us' },
  { label: 'Contact', href: '/#footer' },
];

export const footerNav = {
  games: [
    { label: 'PUBG Mobile', href: '/#games' },
    { label: 'Free Fire', href: '/#games' },
    { label: 'GTA Online', href: '/#games' },
    { label: 'EA FC 25', href: '/#games' },
  ],
  company: [
    { label: 'About Us', href: '/#why-us' },
    { label: 'Contact Us', href: '/#footer' },
    { label: 'FAQ', href: '/faq.html' },
  ],
  support: [
    { label: 'WhatsApp', href: 'https://wa.me/201001234567' },
    { label: 'Facebook', href: 'https://facebook.com/shahnmasr' },
  ],
};

/* lucide-static ships generic (non-brand) glyphs only — no literal Facebook/Instagram
   marks — so social links reuse the same generic icon set as the approved reference file. */
export const socialIcons = [
  { icon: 'icon-message-circle', label: 'WhatsApp', href: 'https://wa.me/201001234567' },
  { icon: 'icon-share-2', label: 'Facebook', href: 'https://facebook.com/shahnmasr' },
  { icon: 'icon-mail', label: 'Email', href: 'mailto:support@shahnmasr.com' },
  { icon: 'icon-send', label: 'Telegram', href: 'https://t.me/shahnmasr' },
];

export const partnerBadges = ['VF', 'PP', 'FB'];
