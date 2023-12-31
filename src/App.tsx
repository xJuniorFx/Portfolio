import NavBar from './components/NavBar';
import './App.module.scss';
import Banner from './components/Banner';
import About from 'components/About';
import Projects from 'components/Projects';
import Contact from 'components/Contact';



function App() {
  return (
    <div>
      <NavBar />
      <Banner />
      <About />
      <Projects />
      <Contact />
    </div>  
  );
}

export default App;
