import { Routes, Route, HashRouter } from "react-router-dom";
import "./index.css"
import Header from './components/Header';
import Home from "./pages/Home";
import Works from "./pages/Works";
import Publications from "./pages/Publications";
import Experience from "./pages/Experience";
import About from "./pages/About";

export default function App() {
  return (
    <HashRouter>
      <div class="flex flex-col w-full min-h-screen bg-gradient-to-t from-purple-200 to-neutral-50">
        <Header />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='works' element={<Works />}/>
          <Route path='/publications' element={<Publications />}/>
          <Route path='/experience' element={<Experience />}/>
          <Route path='/about' element={<About />}/>
        </Routes>
      </div>
    </HashRouter>
  )
}

