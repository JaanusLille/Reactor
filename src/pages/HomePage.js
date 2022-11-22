import React from 'react'; 
import Home1 from '../components/HomePage/Home1.js'
import Home2 from '../components/HomePage/Home2.js'
import Home3 from '../components/HomePage/Home3.js'
import Home4 from '../components/HomePage/Home4.js'
import '../styles/HomePage.css'; 
import "@fontsource/pirata-one";

const HomePage = () => {
    return (
        <>
        <div>
            <Home1/>
            <Home2/>
            <Home1/>
            <Home2/>
                <Home4/>
            <Home2/>
            <Home1/>
            <Home2/>
            <Home1/>
            <Home2/>
            <Home1/>
            <Home2/>
            <Home3/>
        </div>
        </>
    );
}
export default HomePage;
