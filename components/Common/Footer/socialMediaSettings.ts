/**
 * Social media model.
 */
type SocialMedia = {
    url: string;
    icon: string;
};

/**
 * Social media settings model.
 */
type SocialMediaSettings = Record<string, SocialMedia>;

/**
 * Social media urls.
 */
const socialMediaSettings: SocialMediaSettings = {
    twitter: {
        icon: 'twitter',
        url: 'https://twitter.com/nil_foundation',
    },
    linkedIn: {
        icon: 'linkedin',
        url: 'https://www.linkedin.com/company/nil-foundation',
    },
    github: {
        icon: 'github',
        url: 'http://github.com/nilfoundation',
    },
    telegram: {
        icon: 'telegram',
        url: 'https://t.me/nilfoundation',
    },
    discord: {
        icon: 'discord',
        url: 'https://discord.gg/TUz2GTfg',
    },
};

export default socialMediaSettings;
