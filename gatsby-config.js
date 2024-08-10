/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
    title: `Second Hand Clothes`,
  },
  plugins: [
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `products`,
        path: `${__dirname}/products`,
      },
    },
    {
      resolve: "gatsby-source-prismic",
      options: {
        repositoryName: "demo-gatsby-trieu",
        customTypesApiToken:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0eXBlIjoibWFjaGluZTJtYWNoaW5lIiwiZGJpZCI6ImRlbW8tZ2F0c2J5LXRyaWV1LTc4NmY3Yjg1LWUyZWEtNGNkMS04ZWI0LTQwZGVkY2JlZWZhOV81IiwiZGF0ZSI6MTcyMzI1MzU0NCwiZG9tYWluIjoiZGVtby1nYXRzYnktdHJpZXUiLCJhcHBOYW1lIjoiZGVtby1nYXRzYnkiLCJpYXQiOjE3MjMyNTM1NDR9.loo0co55zfJMai2foawGezNFZ_GbYXKH9wU_Eo9CY4o",
      },
    },
  ],
};
