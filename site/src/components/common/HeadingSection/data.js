import { socialLinks } from 'constants/socials';

export const headingIcons = {
  community: [
    { icon: 'discord', link: socialLinks.discord },
    { icon: 'github', link: socialLinks.github },
    { icon: 'telegram', link: socialLinks.telegram },
    // TODO: add link for dev-portal
    // { icon: 'dev-portal', link: '/' },
  ],
  corporate: [
    {
      icon: 'linkedin',
      link: socialLinks.linkedin,
    },
    { icon: 'twitter', link: socialLinks.twitter },
  ],
};
