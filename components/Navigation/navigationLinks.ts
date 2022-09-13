/**
 * Link model type.
 */
type LinkModel = {
    title: string;
    path: string;
}

/**
 * Navigation links.
 */
const navigationLinks: LinkModel[] = [
    {
        title: 'Ecosystem',
        path: '/ecosystem'
    },
    {
        title: 'Dev',
        path: '/dev'
    },
    {
        title: 'Research',
        path: '/research'
    },
    {
        title: 'Blog',
        path: '/blog'
    }
];

export default navigationLinks;
