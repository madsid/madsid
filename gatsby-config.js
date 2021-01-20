require(`dotenv`).config({
	path: `.env`,
});

const desc =
	'I am a software engineer and creative individual. This is my digital universe containing my thoughts and opinions';
module.exports = {
	siteMetadata: {
		siteTitle: 'MadSid',
		siteTitleAlt: `MadSid - Personal Blog`,
		siteHeadline: `MadSid - Personal Blog`,
		siteUrl: 'https://madsid.com/',
		siteDescription: desc,
		siteLanguage: `en`,
		author: '@mad5id',
		navigation: [
			{
				title: `Blog`,
				slug: `/blog`,
			},
			{
				title: `About`,
				slug: `/about`,
			},
		],
		externalLinks: [
			{
				name: 'twitter',
				url: 'https://twitter.com/mad5id',
			},
			{
				name: 'github',
				url: 'https://github.com/madsid',
			},
		],
	},
	plugins: [
		{
			resolve: `@lekoarts/gatsby-theme-minimal-blog`,
			options: {
				showLineNumbers: false,
				navigation: [
					{
						title: `Blog`,
						slug: `/blog`,
					},
					{
						title: `About`,
						slug: `/about`,
					},
				],
				externalLinks: [
					{
						name: 'twitter',
						url: 'https://twitter.com/mad5id',
					},
					{
						name: 'github',
						url: 'https://github.com/madsid',
					},
				],
				initialColorModeName: `dark`,
			},
		},
		`gatsby-plugin-theme-ui`,
		`gatsby-plugin-sitemap`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `MadSid`,
				short_name: `MadSid`,
				description: desc,
				start_url: `/`,
				background_color: `#fff`,
				theme_color: `#6B46C1`,
				display: `standalone`,
				icons: [
					{
						src: `/android-chrome-192x192.png`,
						sizes: `192x192`,
						type: `image/png`,
					},
					{
						src: `/android-chrome-512x512.png`,
						sizes: `512x512`,
						type: `image/png`,
					},
				],
			},
		},
		`gatsby-plugin-offline`,
		`gatsby-plugin-netlify`,
	],
};
