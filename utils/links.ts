type NavLink = {
  href: string;
  label: string;
};

export const links: NavLink[] = [
  { href: '/', label: 'home' },
  { href: '/add-member', label: 'add member' },
  { href: '/all-members', label: 'all members' },
  { href: '/deceased-members', label: 'deceased members' },
  { href: '/deleted-members', label: 'deleted members' },
  { href: '/contribution', label: 'contribution' },
  { href: '/internal-rules', label: 'internal rules at glance' },
  { href: '/navigation-instructions', label: 'navigation instructions' },
];
