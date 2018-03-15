import { NavItem } from './nav-item';

export const NAVITEMS: NavItem[] = [
  {
    name: 'Dashboard',
    adminOnly: false,
    href: '/dash'
  },
  {
    name: 'Create Request',
    adminOnly: false,
    href: '/provision/create'
  },
  {
    name: 'View All Requests',
    adminOnly: false,
    href: '/provisions'
  },
  {
    name: 'View Customers',
    adminOnly: true,
    href: '/customers'
  },
  {
    name: 'Register User',
    adminOnly: true,
    href: '/user/create'
  },
];
