
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
    image: 'https://picsum.photos/id/101/800/600',
  },
  {
    id: 'logistics',
    title: 'Logistics & Haulage',
    description: 'Efficient transportation of materials, equipment, and goods across Nigeria and West Africa.',
    icon: 'Truck',
    image: 'https://picsum.photos/id/102/800/600',
  },
  {
    id: 'equipment-rental',
    title: 'Equipment Rental',
    description: 'Modern fleet of trucks, excavators, generators, and specialized construction machinery.',
    icon: 'Wrench',
    image: 'https://picsum.photos/id/103/800/600',
  },
  {
    id: 'vessel-scrapping',
    title: 'Vessel Scrapping',
    description: 'Environmentally-friendly dismantling and recycling of decommissioned vessels with industry-leading safety protocols.',
    icon: 'Anchor',
    image: 'https://picsum.photos/id/104/800/600',
  },
];

export const TEAM: TeamMember[] = [
  {
    name: 'Akinbohun Olatunde',
    role: 'Managing Director',
    description: 'With over 25 years of experience in the construction and marine industry, Akinbohun leads Plurimmo\'s management team with vision and expertise.',
    image: 'https://picsum.photos/id/64/400/400',
  },
  {
    name: 'Okeahialam Bruno',
    role: 'Director',
    description: 'Brings over 30 years of experience in architectural design and logistics/haulage, driving growth and success.',
    image: 'https://picsum.photos/id/65/400/400',
  },
  {
    name: 'Olanrewaju Abimbola',
    role: 'Director',
    description: 'Expertise in civil engineering and project management ensures Plurimmo delivers exceptional results.',
    image: 'https://picsum.photos/id/66/400/400',
  },
  {
    name: 'Chuckwuocha Chucks',
    role: 'Business Development / Operation Director',
    description: 'Extensive experience in business development enables Plurimmo to expand its services and reach new markets.',
    image: 'https://picsum.photos/id/67/400/400',
  },
  {
    name: 'Dr. Olanrewaju Lola',
    role: 'Executive Director',
    description: 'Expertise in engineering and technology drives Plurimmo\'s innovation and growth strategies.',
    image: 'https://picsum.photos/id/68/400/400',
  },
  {
    name: 'Olagunju Tunde',
    role: 'Chief Financial Officer',
    description: 'Ensures the financial stability and profitability of Plurimmo through meticulous strategic planning.',
    image: 'https://picsum.photos/id/69/400/400',
  },
];

export const PROJECTS: Project[] = [
  {
    title: 'Lagos-Calabar Coastal Road',
    category: 'Haulage & Logistics (N46b)',
    image: '/assets/LagosCalabarCoastalRoad.jpeg',
  },
  {
    title: 'Joint Venture Expansion',
    category: 'Infrastructure ($90m with 2iUK)',
    image: '/assets/Joint Venture Expansion.jpeg',
  },
  {
    title: 'Marine Scrapping Project',
    category: 'Environmental Services',
    image: '/assets/LagosCalabarCoastalRoad.jpeg',
  },
];
