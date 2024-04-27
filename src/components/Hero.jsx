
import '../index.css';
import * as React from 'react';
import Box from '@mui/material/Box';
// import Container from '@mui/material/Container';
import { Typography } from '@mui/material';
// import { makeStyles } from '@mui/styles';
// import Button from '@mui/material/Button';
// import { useNavigate } from 'react-router-dom';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import image from "../assets/hero.jpg";

// import { styled } from '@mui/material/styles';

import NavButton from './design/Button';

// import CssBaseline from '@mui/material/CssBaseline';

// const BoxImage = makeStyles(Box)({
// 	alignItems: 'center',
// 	backgroundColor: 'grey',
// 	backgroundImage: `linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)), url(${image})`,
// 	backgroundSize: 'cover',
// 	backgroundRepeat: 'no-repeat',
// 	backgroundPosition: 'center',
// });

// const Title = makeStyles(Typography)({
// 	textAlign: 'center',
// 	fontSize: 50,
// 	fontWeight: 50,
// });

// const Subtitle = makeStyles(Typography)({
// 	textAlign: 'center',
// 	fontSize: 25,
// 	fontWeight: 20,
// });

// const Icon = styled(ArrowForwardIcon)(() => ({
//   // backgroundColor: 'grey',
//   position: 'relative',
//   top: '7px',
//   backgroundSize: '10px',
// }))

// const NavButton = styled(Button)(() => ({
// 	minWidth: '0px',
// 	padding: '0px',
//   margin: '0px 0px',
//   border: 'none',
//   background: 'none',
//   position: 'relative',
//   display: 'flex',
//   fontWeight: 400,
//   fontSize: '14px',
//   gap: '0.5rem',
//   alignItems: 'center',

// 	'p': {
// 		margin: 0,
// 		position: 'relative',
// 		color: '#fff',
// 	},

// 	'&::after': {
// 		position: 'absolute',
// 		content: '""',
// 		width: 0,
// 		left: 0,
// 		bottom: '-7px',
// 		background: '#fff',
// 		height: '2px',
// 		transition: '0.3s ease-out',
// 	},

// 	'&:hover': {
// 		background: 'none',
// 	},

// 	'&:hover p': {
// 		color: '#fff',
// 		transition: '0.5s ease-in-out',
// 	},

// 	'&:hover::after': {
// 		width: '100%',
// 	},
// }))

function Hero ({ setActiveLink }) {
	// const navigate = useNavigate();

	// const handleClick = () => {
	// 	setActiveLink('collections');
	// 	navigate('/collections');
	// }

	return (
		<>
			<Box
				display='flex'
				flexDirection='column'
				justifyContent='center'
				height={'100vh'}
				width={'100wh'}
				sx={{
					alignItems: 'center',
					backgroundColor: 'grey',
					backgroundImage: `linear-gradient(0deg, rgba(50,41,47,0.8) 0%, rgba(110,125,171,0.8) 100%), url(${image})`,
					backgroundSize: 'cover',
					backgroundRepeat: 'no-repeat',
					backgroundPosition: 'relative',
				}}
			>
				<Box width={'50vh'} sx={{ marginLeft: 5, marginRight: 5, marginTop: 3 }}>
					<Typography variant='h1' sx={{ textAlign: 'center', fontSize: 50, fontWeight: 40, textTransform: 'lowercase', color: '#fff' }}>
						Locations Unknown
					</Typography>
					<Typography variant='h2' sx={{ textAlign: 'center', fontSize: 25, fontWeight: 10, textTransform: 'lowercase', color: '#fff' }}>
						We've gone way too far
					</Typography>
				</Box>
				<Box display={'flex'} justifyContent={'center'} width={'50vh'} sx={{ marginTop: 2 }}>
					{/* <NavButton onClick={() => handleClick()} disableRipple={true}>
						<p>Discover <Icon viewBox='0 0 18 24'/></p>
					</NavButton> */}
					<NavButton link={'collections'} text={'Discover'} setActiveLink={setActiveLink} arrow={true} colour={'white'}/>
				</Box>
			</Box>
		</>
	)
}

export default Hero;