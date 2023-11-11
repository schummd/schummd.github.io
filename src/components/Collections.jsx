import * as React from 'react';
// import Box from '@mui/material/Box';
// import Container from '@mui/material/Container';

import SubHeader from './SubHeader';
import Gallery from './Gallery';

function Collections () {
	const [click, setClick] = React.useState('');

	return (
		<>
			<SubHeader click={click} setClick={setClick}/>
			{/* import collection component here */}
			<Gallery name={click}/>
		</>
	)
}

export default Collections;