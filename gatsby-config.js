require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
    pathPrefix: "/openousd-site",
    siteMetadata: {
        title: `OpenOUSD`,
        description: `OpenOUSD aims to bring greater transparency to the Oakland Unified School District's central office.`,
        author: `@OpenOUSD`,
        latestSchoolYear: `2018-19`
    },
    plugins: [
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: "UA-69150718-3",
                // Defines where to place the tracking script - `true` in the head and `false` in the body
                head: false,
            },
        },
        {
          resolve: 'gatsby-plugin-sass',
          options: {
            data: `@import "./src/styles/_variables.scss";`,
          }
        },
        {
          resolve: 'gatsby-source-prismic-graphql',
          options: {
            repositoryName: 'openousd', // required
            // defaultLang: 'en-us', // optional, but recommended
            accessToken: `${process.env.PRISMIC_API_KEY}`,
            // prismicRef: '...', // optional, default: master; useful for A/B experiments
            // path: '/preview', // optional, default: /preview
            // previews: true, // optional, default: false
            // pages: [{ // optional
            //   type: 'Article', // TypeName from prismic
            //   match: '/article/:uid', // pages will be generated under this pattern
            //   previewPath: '/article', // optional path for unpublished documents
            //   component: require.resolve('./src/templates/article.js'),
            //   sortBy: 'date_ASC', // optional, default: meta_lastPublicationDate_ASC; useful for pagination
            // }],
            // extraPageFields: 'article_type', // optional, extends pages query to pass extra fields
            // sharpKeys: [
            //   /image|photo|picture/, // (default)
            //   'profilepic',
            // ],
          }
        },
        `gatsby-plugin-react-helmet`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images`,
            },
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                path: `${__dirname}/data/`,
            },
        },
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-plugin-intl`,
            options: {
                path: `${__dirname}/src/translations`,
                languages: [`en`, `es`],
                defaultLanguage: `en`,
                redirect: true,
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `OpenOUSD`,
                short_name: `OpenOUSD`,
                start_url: `/`,
                background_color: `#0042E6`,
                theme_color: `#0042E6`,
                display: `browser`,
                icon: `src/images/favicon.png`, // This path is relative to the root of the site.
            }
        },
        {
            resolve: `gatsby-plugin-google-fonts`,
            options: {
                fonts: [
                    `Nunito Sans\:400,400i,800,900`,
                    `Roboto Mono\:400,700`
                ],
                display: 'swap'
            }
        },
        "gatsby-transformer-json",
    ],
}
