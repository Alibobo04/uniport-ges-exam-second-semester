import { Advertisement } from '../types';

export const ADVERTISEMENTS: Advertisement[] = [
  {
    id: 'lisas-beads',
    businessName: 'LisasBeads',
    title: 'LisasBeads — Artisan Beadwork & Custom Luxury Accessories',
    tagline: 'Handmade with love, made just for you! 💕',
    badge: 'Artisan Beadwork',
    shortDescription: 'From statement beaded bags to handcrafted jewelry and custom accessories, find unique and beautiful designs.',
    fullDescription: `💕 Looking for something unique and beautiful?

Welcome to LisasBeads, where passion meets creativity. From statement bags to handcrafted accessories, we've got you. 🥰

📱📩 Send us a message to place your order.

Message LisasBeads on WhatsApp.`,
    whatsappNumber: '2349060198616',
    whatsappLink: 'https://wa.me/2349060198616',
    phoneDisplay: '09060198616',
    instagram: '@lisasbeads_official',
    tiktok: '@lisasbeads_official',
    pinterest: '@lisasbeads_official',
    collections: [
      'Beaded Luxury Bags',
      'Beaded Jewelry & Sets',
      'Handmade Bracelets',
      'Statement Necklaces',
      'Artisan Earrings',
      'Beaded Anklets',
      'Beaded Alphabet Key Holders',
      'Custom Bead Orders & Gifts'
    ],
    features: [
      '100% Handcrafted with High Quality Beads',
      'Custom Bespoke Colors & Letter Initials',
      'Durable Finish & Premium Satin / Pearl Accents',
      'Fast Nationwide Delivery & Custom Orders'
    ],
    bannerGradient: 'from-pink-950 via-slate-900 to-rose-950',
    accentColor: '#f43f5e',
    image: '/assets/lisas_beads_showcase.png'
  }
];

export function getAdvertisementById(id: string): Advertisement | undefined {
  return ADVERTISEMENTS.find((ad) => ad.id === id) || ADVERTISEMENTS[0];
}
