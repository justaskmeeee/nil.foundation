/**
 * Navigation link model.
 */
type LinkModel = {
    title: string;
    path: string;
};

/**
 * Navigation links.
 */
const navigationSettings: LinkModel[] = [
    {
        title: 'Ecosystem',
        path: '/ecosystem',
    },
    {
        title: 'Developers',
        path: '/dev',
    },
    {
        title: 'Research',
        path: '/research',
    },
    {
        title: 'Blog',
        path: '/blog',
    },
    {
        title: 'Careers',
        path: 'https://nil.freshteam.com/jobs',
    },
];

export default navigationSettings;
