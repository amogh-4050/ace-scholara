import { getPermalink, getBlogPermalink } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'How It Works',
      href: getPermalink('/#how-it-works'),
    },
    {
      text: 'For Institutions',
      href: getPermalink('/for-institutions'),
    },
    {
      text: 'For Parents',
      href: getPermalink('/for-parents'),
    },
    {
      text: 'About',
      href: getPermalink('/about'),
    },
    {
      text: 'Blog',
      href: getBlogPermalink(),
    },
  ],
  actions: [
    { 
      text: 'Partner With Us', 
      href: getPermalink('/contact'),
    }
  ],
};

export const footerData = {
  links: [
    {
      title: 'For Institutions',
      links: [
        { text: 'How It Works', href: getPermalink('/for-institutions#how-it-works') },
        { text: 'Partner Benefits', href: getPermalink('/for-institutions#benefits') },
        { text: 'Success Stories', href: getPermalink('/for-institutions#stories') },
        { text: 'Become a Partner', href: getPermalink('/contact') },
      ],
    },
    {
      title: 'For Parents',
      links: [
        { text: 'Why Ace-Scholara', href: getPermalink('/for-parents#why-us') },
        { text: 'Our Process', href: getPermalink('/for-parents#process') },
        { text: 'Parent Stories', href: getPermalink('/for-parents#stories') },
        { text: 'Get Started', href: getPermalink('/contact') },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About Us', href: getPermalink('/about') },
        { text: 'Our Ethics', href: getPermalink('/about#ethics') },
        { text: 'Blog', href: getBlogPermalink() },
        { text: 'Contact', href: getPermalink('/contact') },
      ],
    },
    {
      title: 'Legal',
      links: [
        { text: 'Privacy Policy', href: getPermalink('/privacy') },
        { text: 'Terms of Service', href: getPermalink('/terms') },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: '#' },
    { ariaLabel: 'Twitter', icon: 'tabler:brand-x', href: '#' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
  ],
  footNote: `
    © 2025 <a class="text-blue-600 hover:underline dark:text-blue-400" href="/">Ace-Scholara</a>. All rights reserved. | Outcome-backed admissions for premium education.
  `,
};