import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer1 from "./components/Footer/Footer1";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";

const App = ()=>{
    return<>
    <NavBar></NavBar>
    <Home></Home>
    <About></About>
    <Skills></Skills>
    <Projects></Projects>
    <Contact></Contact>
    <Footer1></Footer1>
    </>
}
export default App;