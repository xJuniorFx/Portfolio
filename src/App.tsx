import NavBar from './components/NavBar';
import './App.module.scss';
import Banner from './components/Banner';
import About from 'components/About';
import Works from 'components/Works';
import Contact from 'components/Contact';



function App() {
  return (
    <div>
      <NavBar />
      <Banner />
      <About />
      <Works />
      <Contact />
    </div>  
  );
}

export default App;
