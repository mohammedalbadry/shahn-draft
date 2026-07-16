const img = (id, w = 100) => `https://images.unsplash.com/photo-${id}?w=${w}&q=80&auto=format&fit=crop`;

export const offers = [
  {
    name: 'PUBG Mobile',
    pack: '660 UC',
    oldPrice: '$12.99',
    price: '$10.49',
    mins: 24,
    img: img('1616763355548-1b606f439f86'),
  },
  {
    name: 'Mobile Legends',
    pack: '706 Diamonds',
    oldPrice: '$9.99',
    price: '$8.29',
    mins: 45,
    img: img('1542751371-adc38448a05e'),
  },
  {
    name: 'GTA Online',
    pack: 'Great White Shark Cash',
    oldPrice: '$17.99',
    price: '$15.49',
    mins: 12,
    img: img('1511512578047-dfb367046420'),
  },
];
