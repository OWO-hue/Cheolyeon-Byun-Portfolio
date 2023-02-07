import Layout from './components/Layout'
import './App.scss';
import { Routes, Route } from 'react-router-dom'
import Home from './components/home'
import About from './components/About';
import Contact from './components/Contact';


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
      </Route>

    </Routes>
    </>
    
  );
}

export default App;
