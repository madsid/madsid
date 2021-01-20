/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Flex, Image, Divider } from '@theme-ui/components';
import { Link } from 'gatsby';
import Layout from '@lekoarts/gatsby-theme-minimal-blog/src/components/layout';
import Listing from '@lekoarts/gatsby-theme-minimal-blog/src/components/listing';
import useMinimalBlogConfig from '@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-minimal-blog-config';
import useSiteMetadata from '@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-site-metadata';
import replaceSlashes from '@lekoarts/gatsby-theme-minimal-blog/src/utils/replaceSlashes';
import { visuallyHidden } from '@lekoarts/gatsby-theme-minimal-blog/src/styles/utils';

type PostsProps = {
	posts: {
		slug: string;
		title: string;
		date: string;
		excerpt: string;
		description: string;
		timeToRead?: number;
		tags?: {
			name: string;
			slug: string;
		}[];
	}[];
	[key: string]: any;
};

const Homepage = ({ posts }: PostsProps) => {
	const { basePath, blogPath } = useMinimalBlogConfig();
	const { siteTitle } = useSiteMetadata();

	return (
		<Layout>
			<h1 sx={visuallyHidden}>{siteTitle}</h1>
			<Flex
				sx={{
					display: 'flex',
					justifyContent: 'center',
					alignItems: 'center',
					flexDirection: 'column',
					variant: `dividers.bottom`,
					mb: 4,
				}}
			>
				<Image
					sx={{
						mt: 3,
						mb: 3,
					}}
					src={'/madsid.png'}
					alt='sidhartha madipalli photo'
				/>
				<h1 sx={{ margin: 0 }}>Sidhartha Madipalli</h1>
				<h3 sx={{ mt: -2 }}> Front End Engineer at AWS </h3>
			</Flex>
			<Flex
				sx={{
					mb: [2],
					alignItems: `center`,
					justifyContent: `flex-end`,
					flexFlow: `wrap`,
					color: `secondary`,
					a: {
						variant: `links.secondary`,
					},
				}}
			>
				<Link to={replaceSlashes(`/${basePath}/${blogPath}`)}>
					Read all posts
				</Link>
			</Flex>
			<Listing posts={posts} showTags={true} />
		</Layout>
	);
};

export default Homepage;
