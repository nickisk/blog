require('dotenv').config({
	path: `.env.${process.env.NODE_ENV}`
})

const contentfulConfig = {
	spaceId: process.env.CONTENTFUL_SPACE_ID,
	accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
	host: process.env.CONTENTFUL_HOST,
	// spaceId: '8l7xnhjvogrp',
	// accessToken: 'y4qqVzdKtb7Z_Wv_JeVBW_jWToHRvfhc3LtKZ5LnJPs',
}

const { spaceId, accessToken } = contentfulConfig

if (!spaceId || !accessToken) {
	throw new Error(
		'Contentful spaceId and the access token need to be provided.'
	)
}

module.exports = {
	siteMetadata: {
		title: 'Gatsby Contentful starter',
	},
	pathPrefix: '/gatsby-contentful-starter',
	plugins: [
		`gatsby-plugin-sass`,
		'gatsby-transformer-remark',
		'gatsby-transformer-sharp',
		'gatsby-plugin-react-helmet',
		'gatsby-plugin-sharp',
		{
			resolve: 'gatsby-source-contentful',
			options: contentfulConfig,
		},
		{
			resolve: `gatsby-plugin-nprogress`,
			options: {
				// Setting a color is optional.
				color: `tomato`,
				// Disable the loading spinner.
				showSpinner: false,
			},
		}
	],
}
