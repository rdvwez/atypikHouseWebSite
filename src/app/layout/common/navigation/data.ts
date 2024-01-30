import {NavItem} from './nav-item';

const DEFAULT_NAVIGATION = [
  {
    id: 1,
    path: '/',
    title: 'Accueil',
    isButton: false,
    isActive: true,
  },
  {
    id: 2,
    path: '/destinations',
    title: 'Destinations',
    isButton: false,
    isActive: false,
  },
  {
    id: 3,
    path: '/contact',
    title: 'Contact',
    isButton: false,
    isActive: false,
  },
  {
    id: 4,
    path: '/customer/inspirations',
    title: 'Inspirations',
    isButton: false,
    isActive: false,
  },
]
export const NAVIGATION_NOT_CONNECTED_CONST: NavItem[] = [
  ...DEFAULT_NAVIGATION,
  {
    id: 5,
    path: '/auth/signin',
    title: 'Se connecter',
    isButton: true,
    isActive: false,
    customClass: 'btn-outline-primary'
  },
  {
    id: 6,
    path: '/auth/signup',
    title: 'Nous rejoindre',
    isButton: true,
    isActive: false,
    customClass: 'btn-primary'
  }
];

export const NAVIGATION_CONNECTED_CONST: NavItem[] = [
  ...DEFAULT_NAVIGATION,
  {
    id: 6,
    path: '/',
    isButton: true,
    isActive: false,
    customClass: 'btn btn-outline-primary btn-icon btn-sm',
    isAuthenticated: true
  }
];
