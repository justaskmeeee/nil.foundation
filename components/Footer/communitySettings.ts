import FooterLink from './FooterLink';
import socialMediaSettings from './socialMediaSettings';

/**
 * Social icons.
 */
const communitySettings: FooterLink[] = [
    {
        title: 'Twitter',
        path: socialMediaSettings.twitter.url,
    },
    {
        title: 'Telegram',
        path: socialMediaSettings.telegram.url,
    },
    {
        title: 'Discord',
        path: socialMediaSettings.discord.url,
    },
    {
        title: 'Blog',
        path: '/blog',
    },
];

export default communitySettings;
