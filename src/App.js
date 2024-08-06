import React from 'react';
import NavBar from './components/NavBar';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Experience from "./components/Experience";
function App() {
    return (
        <div className="App">
            <NavBar />
            <main>
                <About />
                <Experience />
                <Projects />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}

export default App;
