// import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Contact from './components/Contact';
import Collections from './components/Collections';

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


const theme = createTheme();

function App() {
  return (
    <BrowserRouter>
      <Header />
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
            <Route path='/' element={<Hero />} />
            <Route path='/about' element={<About />} />
            {/* <Route path='/contact' element={<Contact />} /> */}
            <Route path='/collections' element={<Collections />} />
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
    </BrowserRouter>
  );
}

export default App;
