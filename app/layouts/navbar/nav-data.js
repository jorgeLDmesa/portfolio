import config from '~/config.json';

export const navLinks = [
  {
    label: 'Projects',
    pathname: '/#project-1',
  },
  {
    label: 'Details',
    pathname: '/#details',
  },
  {
    label: 'Contact',
    pathname: 'mailto:george66david@gmail.com?subject=Contact from Portfolio Website',
  },
];


export const socialLinks = [
  {
    label: 'Github',
    url: `https://github.com/${config.github}`,
    icon: 'github',
  },
];
