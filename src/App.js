import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import AboutMe from "./Components/AboutMe";
import Projects from "./Components/Projects";
import Resume from "./Components/Resume";
import ContactMe from "./Components/ContactMe";

function App() {
  return (
    <div className="personal-website">
      <Header></Header>
      <AboutMe></AboutMe>
      <Projects></Projects>
      <Resume></Resume>
      <ContactMe></ContactMe>
      
    </div>
  );
}

export default App;
