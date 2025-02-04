import Bigfront from './Components/Bigfront/Bigfront';
import Nav from './Components/Nav/Nav';
import './App.css'
import MyExperties from './Components/Experties/MyExperties';
import AboutMe from './Components/AboutMe/AboutMe';
import MyCertificates from './Components/Certificates/MyCertificates';
import MyProjects from './Components/Projects/MyProjects';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import MyParticles from './Components/MyParticles/MyParticles';



function App() {
  return (
    <div className="App">
      <Nav/>
     <MyParticles id="myparticles"/>
      <Bigfront/>
      <MyExperties/>
      <hr/>
      <AboutMe/>
      <MyCertificates/>
      <hr/>
      <MyProjects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
