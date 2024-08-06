import React from 'react';
import Home from './components/pages/Home';
import NavBar from './components/NavBar';
import About from './components/pages/About';
import Projects from './components/pages/Projects';
import Contact from './components/pages/Contact';
import Footer from './components/Footer';
import Experience from "./components/pages/Experience";
import './App.css'
function App() {
    return (
        <div>
            <NavBar />
            <Home />
            <About />
            <Projects />
            <Experience />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
