import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useLocation } from 'react-router-dom';


const FooterDesign = ({ position }) => {
  return (
    <AppBar position={position} color='inherit' sx={{ boxShadow: '0px 0px 0px #e3e3e3', top: 'auto', bottom: 0, alignItems: 'center' }}>
      <Toolbar sx={{ minHeight: '56px!important' }}>
        <Typography component="p" sx={{ fontSize: '11px', fontWeight: '300', color: '#32292F' }}>
          2024 (c) Daria Schumm
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

function Footer () {
  const { pathname } = useLocation();
  return (
    pathname !== '/' && pathname !== '/collections' && pathname !== '/blog' ?
    <FooterDesign position='fixed'/> :
    pathname === '/collections' ? <FooterDesign position=''/> :
    null
  )
}

export default Footer;
