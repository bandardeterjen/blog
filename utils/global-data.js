export const getGlobalData = () => {
  const name = process.env.BLOG_NAME
    ? decodeURI(process.env.BLOG_NAME)
    : 'Bandar Deterjen';
  const blogTitle = process.env.BLOG_TITLE
    ? decodeURI(process.env.BLOG_TITLE)
    : 'Sabun & Parfum Laundry';
  const footerText = process.env.BLOG_FOOTER_TEXT
    ? decodeURI(process.env.BLOG_FOOTER_TEXT)
    : 'Jakarta | Bogor | Bekasi | Depok | Tangerang | Purwokerto.';

  return {
    name,
    blogTitle,
    footerText,
  };
};
