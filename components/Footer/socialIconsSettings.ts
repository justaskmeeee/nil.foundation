/**
 * Social icon model.
 */
type SocialIconModel = {
    title: string;
    icon: string;
    url: string;
}

/**
 * Social icons.
 */
const socialIconsSettings: SocialIconModel[] = [
    {
        title: 'Twitter',
        icon: 'twitter',
        url: 'https://twitter.com/nil_foundation',
    },
    {
        title: 'LinkedIn',
        icon: 'linkedin',
        url: 'https://www.linkedin.com/company/nil-foundation',
    },
    {
        title: 'Telegram',
        icon: 'telegram',
        url: 'https://t.me/nilfoundation',
    },
    {
        title: 'Github',
        icon: 'github',
        url: 'http://github.com/nilfoundation',
    },
    {
        title: 'Discord',
        icon: 'discord',
        url: 'https://discord.gg/TUz2GTfg',
    },
];

export default socialIconsSettings;
