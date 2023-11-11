// import styles from '../button.module.css';

import * as React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

import { styled } from '@mui/material/styles';

import Logo from '../assets/logo.png';

// const LinkButton = styled(Button)(() => ({
//   borderRadius: '0px',
// 	margin: '5px',
//   "&:hover": {
//     background: '#f5f5f5'
//   },
//   "&:active": {
//     background: '#e3e3e3'
//   },
//   "&:focus": {
//     borderBottom: '0.5px solid #333'
//   },
// }));

const NavButton = styled(Button)(() => ({
	minWidth: '0px',
	padding: '0px',
  margin: '0px 10px',
  border: 'none',
  background: 'none',
  position: 'relative',
  display: 'flex',
  fontWeight: 400,
  fontSize: '14px',
  gap: '0.5rem',
  alignItems: 'center',

	'p': {
		margin: 0,
		position: 'relative',
		color: '#32292F',
	},

	'&::after': {
		position: 'absolute',
		content: '""',
		width: 0,
		left: 0,
		bottom: '-7px',
		background: '#6E7DAB',
		height: '2px',
		transition: '0.3s ease-out',
	},

	'&:hover': {
		background: 'none',
	},

	'&:hover p': {
		color: '#6E7DAB',
		transition: '0.5s ease-in-out',
	},

	'&:hover::after': {
		width: '100%',
	},
}))

const NavButtonActive = styled(Button)(() => ({
	minWidth: '0px',
	padding: '0px',
  margin: '0px 10px',
  border: 'none',
  background: 'none',
  position: 'relative',
  display: 'flex',
  fontWeight: 400,
  fontSize: '14px',
  gap: '0.5rem',
  alignItems: 'center',

	'p': {
		margin: 0,
		position: 'relative',
		color: '#6E7DAB',
	},

	'&::after': {
		position: 'absolute',
		content: '""',
		width: 0,
		left: 0,
		bottom: '-7px',
		background: '#6E7DAB',
		height: '2px',
		transition: '0.3s ease-out',
	},

	'&:hover': {
		background: 'none',
	},

}))

const DrawerNavButton = styled(NavButton)(() => ({
	'&:hover p': {
		color: '#32292F',
		transition: 'none',
	},
	'&:hover::after': {
		width: '0%',
	},
}))

export default function Header (props) {
	const navigate = useNavigate();
	const location = useLocation();
	const { window } = props;
  const [ mobileOpen, setMobileOpen ] = React.useState(false);
	const [ activeLink, setActiveLink ] = React.useState('');

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

	const handleClick = (link) => {
		setActiveLink(link);
		navigate('/' + link);
	};

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <List>
				<ListItem><DrawerNavButton onClick={() => navigate('/collections')} disableRipple='true'><p>Collections</p></DrawerNavButton></ListItem>
				<ListItem><DrawerNavButton onClick={() => navigate('/about')} disableRipple='true'><p>About</p></DrawerNavButton></ListItem>
				<ListItem><DrawerNavButton onClick={() => navigate('/about')} disableRipple='true'><p>Blog</p></DrawerNavButton></ListItem>
				<ListItem><DrawerNavButton onClick={() => navigate('/contact')} disableRipple='true'><p>Contact</p></DrawerNavButton></ListItem>
      </List>

    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

	React.useEffect(() => {
		setActiveLink(location.pathname.substring(1));
	}, []);

	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="fixed" color='inherit' sx={{ boxShadow: '0px 0.3px 15px #e3e3e3' }}>
				<Toolbar sx={{ minHeight: '56px!important' }}>

					{/* logo */}
					<Box sx={{ flexGrow: 1 }}>
						<Box
							component='img'
							src={Logo}
							sx={{ marginTop: '7px', height: '35px' }}
							alt='logo'
							onClick={() => handleClick('')}
						/>
					</Box>

					{/* Toggle menu button on mobile screen */}
 					<IconButton
 						aria-label="open drawer"
 						edge="start"
 						onClick={handleDrawerToggle}
 						sx={{ ml: 'auto', display: { sm: 'none' }, color: '#333' }}
 					>
 						<MenuIcon />
 					</IconButton>

					{/* navigation */}
					<Box sx={{ display: { xs: 'none', sm: 'flex' }}}>
						{/* if active button is collection, then mark that button in a different style that is 'active' */}
						{ console.log('current link:', location.pathname) }
						{
							activeLink === 'collections' ?
							<NavButtonActive onClick={() => handleClick('collections')} disableRipple='true'><p>Collections</p></NavButtonActive> :
							<NavButton onClick={() => handleClick('collections')} disableRipple='true'><p>Collections</p></NavButton>
						}

						{
							activeLink === 'about' ?
							<NavButtonActive onClick={() => handleClick('about')} disableRipple='true'><p>About</p></NavButtonActive> :
							<NavButton onClick={() => handleClick('about')} disableRipple='true'><p>About</p></NavButton>
						}

						{
							activeLink === 'blog' ?
							<NavButtonActive onClick={() => handleClick('blog')} disableRipple='true'><p>Blog</p></NavButtonActive> :
							<NavButton onClick={() => handleClick('blog')} disableRipple='true'><p>Blog</p></NavButton>
						}

						{
							activeLink === 'contact' ?
							<NavButtonActive onClick={() => handleClick('contact')} disableRipple='true'><p>Contact</p></NavButtonActive> :
							<NavButton onClick={() => handleClick('contact')} disableRipple='true'><p>Contact</p></NavButton>
						}
					</Box>

				</Toolbar>
			</AppBar>

			<nav>
				<Drawer
					container={container}
					variant="temporary"
					open={mobileOpen}
					onClose={handleDrawerToggle}
					anchor="right"
					ModalProps={{ keepMounted: true }}
					sx={{
						display: { xs: 'block', sm: 'none' },
						'& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
					}}
				>
					{drawer}
				</Drawer>
			</nav>

		</Box>
	)
}
