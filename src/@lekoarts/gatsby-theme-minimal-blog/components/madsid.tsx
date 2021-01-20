/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Flex, Image } from '@theme-ui/components';

const Madsid = () => {
	return (
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
	);
};

export default Madsid;
