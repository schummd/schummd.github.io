import * as React from 'react';
import Box from '@mui/material/Box';

// import SubHeader from '../SubHeader';

function Gallery ({ name }) {
	const cache = {};

	function importAll(r) {
		r.keys().forEach((key) => (cache[key] = r(key)));
	};

	importAll(require.context('../assets/collections', false, /\.jpg/));
	const images = Object.entries(cache).map(module => module[1]);

	return (
		<>
			<Box
				display='flex'
				flexDirection='column'
				justifyContent='center'
				gap={2}
				sx={{
					margin: {
						// top | left and right | bottom
						// appbar 56px
						xs: '0px 30px 30px',
						sm: '0px 150px 30px',
						md: '0px 150px 30px',
						lg: '0px 400px 30px',
						xl: '0px 450px 30px',
					},
					// backgroundColor: {
					// 	xs: 'red',
					// 	sm: 'yellow',
					// 	md: 'grey',
					// 	lg: 'blue',
					// 	xl: 'green'
					// }
				}}
			>
				{images.map((item) => (
					item.includes(name) ? <Box component={'img'} src={item} flex={1}/> : null
				))}
			</Box>

		</>
	)
}

export default Gallery;