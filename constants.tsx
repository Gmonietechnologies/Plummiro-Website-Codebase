
import React from 'react';
import {
  HardHat,
  Truck,
  Wrench,
  Anchor,
  ShieldCheck,
  Target,
  Lightbulb,
  Users
} from 'lucide-react';
import { NavItem, Service, TeamMember, Project } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Contact', path: '/contact' },
];

export const SERVICES: Service[] = [
  {
    id: 'civil-engineering',
    title: 'Civil Engineering',
    description: 'Specializing in roads, bridges, buildings, and large-scale infrastructure development across Nigeria.',
    icon: 'HardHat',
    image: '/assets/Civil Engineering.png',
  },
  {
    id: 'logistics',
    title: 'Logistics & Haulage',
    description: 'Efficient transportation of materials, equipment, and goods across Nigeria and West Africa.',
    icon: 'Truck',
    image: '/assets/Logistics & Haulage.png',
  },
  {
    id: 'equipment-rental',
    title: 'Equipment Rental',
    description: 'Modern fleet of trucks, excavators, generators, and specialized construction machinery.',
    icon: 'Wrench',
    image: '/assets/Equipment Rental.jpeg',
  },
  {
    id: 'vessel-scrapping',
    title: 'Vessel Scrapping',
    description: 'Environmentally-friendly dismantling and recycling of decommissioned vessels with industry-leading safety protocols.',
    icon: 'Anchor',
    image: '/assets/Vessel Scrapping.jpeg',
  },
];

export const TEAM: TeamMember[] = [
  {
    name: 'Akinbohun Olatunde',
    role: 'Managing Director',
    description: 'With over 25 years of experience in the construction and marine industry, Akinbohun leads Plurimmo\'s management team with vision and expertise.',
    image: '/assets/Akinbohun Olatunde.webp',
  },
  {
    name: 'Okeahialam Bruno',
    role: 'Director',
    description: 'Brings over 30 years of experience in architectural design and logistics/haulage, driving growth and success.',
    image: '/assets/Okeahialam Bruno.jpeg',
  },
  {
    name: 'Olanrewaju Abimbola',
    role: 'Director',
    description: 'Expertise in civil engineering and project management ensures Plurimmo delivers exceptional results.',
    image: '/assets/Abimbola Olanrewaju.png',
  },
  {
    name: 'Chuckwuocha Chucks',
    role: 'Business Development / Operation Director',
    description: 'Extensive experience in business development enables Plurimmo to expand its services and reach new markets.',
    image: '/assets/Mr. Chukwuocha Chucks.png',
  },
  {
    name: 'Dr. Olanrewaju Lola',
    role: 'Executive Director',
    description: 'Expertise in engineering and technology drives Plurimmo\'s innovation and growth strategies.',
    image: '/assets/Dr. Olanrewaju Lola.jpeg',
  },
  {
    name: 'Olagunju Tunde',
    role: 'Chief Financial Officer',
    description: 'Ensures the financial stability and profitability of Plurimmo through meticulous strategic planning.',
    image: '/assets/Olagunju Tunde.jpeg',
  },
];

export const PROJECTS: Project[] = [
  {
    title: 'Lagos-Calabar Coastal Road',
    category: 'Environmental Services',
    image: '/assets/LagosCalabarCoastalRoad.jpeg',
  },
  {
    title: 'Joint Venture Expansion',
    category: 'Environmental Services',
    image: '/assets/Joint Venture Expansion.jpeg',
  },
  {
    title: 'Marine Scrapping Project',
    category: 'Environmental Services',
    image: '/assets/marine scrapping.jpeg',
  },
  {
    title: 'Modern Fleet Operations',
    category: 'Marine Scrapping Project',
    image: '/assets/Carousel1.jpeg',
  },
  {
    title: 'Infrastructure Development',
    category: 'Marine Scrapping Project',
    image: '/assets/Carousel2.jpeg',
  },
  {
    title: 'Heavy Duty Haulage',
    category: 'Marine Scrapping Project',
    image: '/assets/Carousel3.jpeg',
  },
  {
    title: 'Strategic Site Management',
    category: 'Marine Scrapping Project',
    image: '/assets/Carousel4.jpeg',
  },
];
