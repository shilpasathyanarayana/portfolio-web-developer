import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Main from './Component/Main/Main';
import About from './Component/About/About';
import Projects from './Component/Projects/Projects';
import ContactNav from './Component/ContactNav/ContactNav';

// import Experience from './Component/Experience/Experience';

// for animation install -- npm add framer-motion

function App() {
  return (
    <>
      <div className='App'>
        <Router>
          <Routes>
            <Route path='/' element={<Main />} />
            <Route path='/About' element={<About />} />
            <Route path='/Projects' element={<Projects />} />
            <Route path='/ContactNav' element={<ContactNav />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
