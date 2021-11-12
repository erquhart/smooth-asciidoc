const path = require('path')

module.exports = {
  plugins: [
    {
      resolve: 'smooth-asciidoc',
      options: {
        name: 'Smooth DOC',
        siteUrl: 'https://smooth-asciidoc.com',
        description: 'Ready to use documentation theme for Gatsby.',
        baseDirectory: path.resolve(__dirname, '../'),
        author: 'Greg Bergé',
        sections: ['Asciidoc', 'About', 'Guides', 'Components', 'Reference'],
        navItems: [{ title: 'Docs', url: '/docs/' }],
        twitterAccount: 'neoziro',
        githubRepositoryURL: 'https://github.com/gregberge/smooth-asciidoc/',
        carbonAdsURL:
          '//cdn.carbonads.com/carbon.js?serve=CE7IL2JN&placement=xstyleddev',
        docSearch: {
          apiKey: 'a0c23a738fe1cfffa923daba2eb185be',
          indexName: 'smooth-asciidoc',
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: 'UA-154496255-5',
      },
    },
  ],
}
