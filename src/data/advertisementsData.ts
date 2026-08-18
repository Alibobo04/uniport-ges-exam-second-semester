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
  },
  {
    id: 'ambs-closet',
    businessName: "AMB'S CLOSET",
    title: "AMB'S CLOSET — Quality Men's & Unisex Clothing, Shoes & Sneakers",
    tagline: "Upgrade your wardrobe with AMB’S CLOSET 👕👟",
    badge: "Men's & Unisex Wears",
    shortDescription: "Quality men's and unisex clothing, sneakers, vintage shirts, corporate shoes, watches, and jerseys at affordable prices with nationwide delivery.",
    fullDescription: `Upgrade your wardrobe with AMB’S CLOSET.

We offer quality men’s and unisex clothing and sneakers at affordable prices, with delivery available nationwide.

📩 Contact us today to place your order.`,
    whatsappNumber: '2348148173528',
    whatsappLink: 'https://chat.whatsapp.com/I9a4qQJsH94IiDgQt1gadm?s=cl&p=a&ilr=1',
    phoneDisplay: '+234 814 817 3528',
    instagram: '@ambs_closet19',
    email: 'ambscloset19@gmail.com',
    collections: [
      'Sneakers',
      'Corporate Shoes & Loafers',
      'Vintage Shirts',
      'Watches',
      'Shorts',
      'Corporate Shirts & Plain Pants',
      'Jordan & Bulls Jersey Sets',
      'Unisex Wears & Lots more....'
    ],
    features: [
      'We Sell Quality Clothing & Footwear',
      'Affordable & Student-Friendly Pricing',
      'Nationwide Delivery Service Available',
      'Direct WhatsApp Orders & Customer Support'
    ],
    bannerGradient: 'from-teal-950 via-slate-900 to-emerald-950',
    accentColor: '#0d9488',
    image: '/assets/ambs_closet_showcase.png'
  }
];

export function getAdvertisementById(id: string): Advertisement | undefined {
  return ADVERTISEMENTS.find((ad) => ad.id === id) || ADVERTISEMENTS[0];
}
