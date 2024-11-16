import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Education from './components/Education';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';


function App() {
  return (
    <div className="App">
      <Header />
      <Education />
      <Skills />
      <Experience />
      <Projects />
    </div>
  );
}

export default App;
