/** @jsx jsx */
import { jsx } from 'theme-ui';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import SEO from '@lekoarts/gatsby-theme-minimal-blog/src/components/seo';
import Layout from '@lekoarts/gatsby-theme-minimal-blog/src/components/layout';
import Madsid from './madsid';

type PageProps = {
	data: {
		page: {
			title: string;
			slug: string;
			excerpt: string;
			body: string;
		};
	};
	[key: string]: any;
};

export default ({ data: { page } }: PageProps) => (
	<Layout>
		<SEO title={page.title} description={page.excerpt} />
		<Madsid />
		<section
			sx={{
				my: 5,
				variant: `layout.content`,
				mt: 5,
			}}
		>
			<MDXRenderer>{page.body}</MDXRenderer>
		</section>
	</Layout>
);
