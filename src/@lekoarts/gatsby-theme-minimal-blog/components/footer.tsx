/** @jsx jsx */
import { jsx } from 'theme-ui';
import useSiteMetadata from '@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-site-metadata';

export default (props) => {
	const { siteTitle } = useSiteMetadata();

	return (
		<div
			{...props}
			sx={{
				boxSizing: `border-box`,
				display: `flex`,
				justifyContent: `space-between`,
				color: `secondary`,
				mt: [6],
				a: {
					variant: `links.secondary`,
				},
				flexDirection: [`column`, `column`, `row`],
				variant: `dividers.top`,
			}}
		>
			<footer>
				<div>
					&copy; {new Date().getFullYear()} by {siteTitle}. All rights reserved.
				</div>
			</footer>
		</div>
	);
};
