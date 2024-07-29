import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Experience from "./components/Experience";
function App() {
    return (
        <div className="App">
            <Header />
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
