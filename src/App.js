import React from 'react';
import Header from "./components/Header";
import About from "./components/About";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Projects from "./components/Projects";

function App() {
    return (
        <div className= 'App'>
            <Header/>
            <main>
                <About/>
                <Projects/>
                <Contact/>
            </main>
            <Footer/>
        </div>
    )
}

export default App;