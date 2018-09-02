module.exports = {
  siteMetadata: {
    title: 'Ayush Bahuguna | Fullstack Developer',
    author: 'Ayush Bahuguna',
    description:
      'I am Ayush Bahuguna, a full stack developer working out of Mumbai, India. This is my personal blog where I write about programming, music, books.',
  },
  plugins: [
    'gatsby-plugin-catch-links',
    'gatsby-plugin-postcss-sass',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src`,
        name: 'src',
      },
    },
    {
      resolve: `gatsby-plugin-react-css-modules`,
      options: {
        filetypes: {
          ".sass": { syntax: `postcss-sass` },
        },
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [], // just in case those previously mentioned remark plugins sound cool :)
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        include: /assets/,
      },
    },
  ],
}
