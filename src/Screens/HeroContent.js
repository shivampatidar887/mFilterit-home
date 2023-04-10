import React from 'react'
import "./Content.css"
import { useNavigate } from 'react-router-dom';
const HeroContent = () => {
    const navigate =useNavigate();
    const handlebackpage = () => {
        navigate("/");
      };
    return (
        <div className='top'>
            <div className="hero-content">
                <img src={require("../Images/hero-2.png")} alt="loading" />
                <div id="top-content">
                    <h1>We are the <br />Superhero of the Digital Ad World</h1>
                    <p>We create innovative marketing solutions for cost conscious marketers who does not compromise on the results!</p>
                    <button id="btn" onClick={handlebackpage}>Go Back</button>
                </div>
            </div>
            <div className="hero-content">
                <img src={require("../Images/hero-3.png")} alt="loading" />
                <div id="top-content">
                    <h1>Boost Digital Ad <br />Performance</h1>
                    <p>We create innovative marketing solutions for cost conscious marketers who does not compromise on the results!</p>
                    
                </div>
            </div>
            <div className="hero-content">
                <img src={require("../Images/hero-4.png")} alt="loading" />
                <div id="top-content">
                    <h1>Be a Smart Digital <br />Marketer.</h1>
                    <p>We create innovative marketing solutions for cost conscious marketers who does not compromise on the results!</p>
                   
                </div>
            </div>
            <div className="hero-content">
                <img src={require("../Images/hero-5.png")} alt="loading" />
                <div id="top-content">
                    <h1>We are the Superhero of the <br />Digital Ad World</h1>
                    <p>We create innovative marketing solutions for cost conscious marketers who does not compromise on the results!</p>
                    
                </div>
            </div>
        </div>
    )
}

export default HeroContent
