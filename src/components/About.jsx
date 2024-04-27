import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';
// import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
// import Paper from '@mui/material/Paper';

// import Button from '@mui/material/Button';
// import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

// import { useNavigate } from 'react-router-dom';

import image from "../assets/profile_picture.png";
// import Header from "./Header";
import NavButton from './design/Button';

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

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
// 		color: '#32292F',
// 	},

// 	'&::after': {
// 		position: 'absolute',
// 		content: '""',
// 		width: 0,
// 		left: 0,
// 		bottom: '-7px',
// 		background: '#6E7DAB',
// 		height: '2px',
// 		transition: '0.3s ease-out',
// 	},

// 	'&:hover': {
// 		background: 'none',
// 	},

// 	'&:hover p': {
// 		color: '#6E7DAB',
// 		transition: '0.5s ease-in-out',
// 	},

// 	'&:hover::after': {
// 		width: '100%',
// 	},
// }))

function About ({ setActiveLink }) {
	return (
		<Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
			<Box sx={{ padding: '10px', backgroundColor: '', width: '50%' }}>
				<Grid container rowSpacing={2} gap={0} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

					{/* title of the page */}
					<Grid item xs={12} sm={6} sx={{ display: 'flex', justifyContent: { xs: 'center', sm: 'left' }, alignItems: 'center' }}>
						<Typography component="h1" sx={{ fontSize: '28px', marginBottom: '0px', fontWeight: '300', background: 'white' }}>About Me</Typography>
					</Grid>

					{/* profile image */}
					<Grid item xs={12} sm={6} sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
						<Box component='img' src={image} alt='Daria Schumm' sx={{ width: '200px' }}></Box>
					</Grid>

					{/* paragraph about me */}
					<Grid item xs={12}>
						<Typography component="p" sx={{ fontSize: '16px', marginBottom: '0px', fontWeight: '300', color: '#32292F', background: 'white' }}>
							My name is Daria Schumm.
						</Typography>
						<Typography component="p" sx={{ fontSize: '16px', marginBottom: '0px', fontWeight: '300', background: 'white' }}>
							Since 2023 I been living in Zurch, Switzerland.
						</Typography>
					</Grid>

					{/* link to collections */}
					<Grid item xs={12}>
						<NavButton link={'collections'} text={'Discover'} setActiveLink={setActiveLink} arrow={true} customStyle={{ fontWeight: '300', textTransform: 'capitalize', fontSize: '16px' }}/>
						{/* <NavButton onClick={() => handleClick()} disableRipple='true' sx={{ fontWeight: '300', textTransform: 'capitalize', fontSize: '16px' }}>
							<p>Discover <Icon viewBox='0 0 18 24'/></p>
						</NavButton> */}
					</Grid>

				</Grid>
			</Box>
		</Box>
	)
}

export default About;