// import logo from './logo.svg';
import * as React from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Collections from './components/Collections';
import PostsList from './components/PostsList';

// import Daylight from './components/collections/Daylight';
// import Dust from './components/collections/Dust';
// import Escape from './components/collections/Escape';
// import Illusion from './components/collections/Illusion';
// import Mountains from './components/collections/Mountains';
// import NiceDream from './components/collections/NiceDream';
// import RoseGold from './components/collections/RoseGold';
// import Stay from './components/collections/Stay';
// import Times from './components/collections/Times';
// import Voyages from './components/collections/Voyages';

import Rent from './components/posts/Rent';
import Malta from './components/posts/Malta';

const theme = createTheme();

function App() {
  const [ activeLink, setActiveLink ] = React.useState('');

  return (
    <BrowserRouter>
      <Header activeLink={activeLink} setActiveLink={setActiveLink}/>
      <ThemeProvider theme={theme}>
        <Container
          component="main"
          sx={{
            padding: '0px!important',
            maxWidth: '100%!important'
          }}
        >
          <Box>
            <Routes>
              <Route path='/' element={<Hero setActiveLink={setActiveLink}/>} />
              <Route path='/blog' element={<PostsList setActiveLink={setActiveLink}/>} />
              <Route path='/about' element={<About setActiveLink={setActiveLink}/>} />
              <Route path='/contact' element={<Contact setActiveLink={setActiveLink}/>} />
              <Route path='/collections' element={<Collections />} />
              <Route path='/blog/rent' element={<Rent />}/>
              <Route path='/blog/malta' element={<Malta />}/>
              {/* <Route path='/collections/daylight' element={<Daylight />} />
              <Route path='/collections/dust' element={<Dust />} />
              <Route path='/collections/escape' element={<Escape />} />
              <Route path='/collections/illusion' element={<Illusion />} />
              <Route path='/collections/mountains' element={<Mountains />} />
              <Route path='/collections/nicedream' element={<NiceDream />} />
              <Route path='/collections/rosegold' element={<RoseGold />} />
              <Route path='/collections/stay' element={<Stay />} />
              <Route path='/collections/times' element={<Times />} />
              <Route path='/collections/voyages' element={<Voyages />} /> */}
            </Routes>
          </Box>
        </Container>
      </ThemeProvider>
      {/* { pathname !== '/' ? <Footer /> : null } */}
      <Footer />
    </BrowserRouter>
  );
}

export default App;
