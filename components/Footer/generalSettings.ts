/**
 * Footer link model.
 */
type FooterLink = {
    title: string;
    path: string;
};

/**
 * General section settings.
 */
const generalSettings: FooterLink[] = [
    {
        title: 'Home',
        path: '/',
    },
    {
        title: 'About',
        path: '/#about',
    },
    {
        title: 'Contact',
        path: '/contact',
    },
    {
        title: 'Careers',
        path: 'https://nil.freshteam.com/jobs',
    },
];

export default generalSettings;
