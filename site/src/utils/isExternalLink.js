const isExternalLink = link =>
  /^https?:\/\//.test(link) || link.startsWith('mailto:');

export default isExternalLink;
