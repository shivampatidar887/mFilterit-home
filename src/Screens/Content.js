import React, { Fragment, useRef, useEffect } from 'react'
import "./Content.css"
import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";
import { useNavigate } from 'react-router-dom';
const Content = () => {
    const navigate=useNavigate();
    const partnersRef = useRef(null);
    const handleScrollLeft = () => {
        partnersRef.current.scrollBy({
            left: -190,
            behavior: 'smooth'
        });
    };
    const handleScrollRight = () => {
        partnersRef.current.scrollBy({
            left: 190,
            behavior: 'smooth'
        });
    };
    const handlepage = () => {
        navigate("/hero-content");
      };
    return (
        <Fragment>
            <div className="top">
                <div className="hero-content">
                    <img src={require("../Images/hero-1.png")} alt="loading" />
                    <div id="top-content">
                        <h1>Marketing. <br />It won’t cost you an arm and a leg!</h1>
                        <p>We create innovative marketing solutions for cost conscious marketers who does not compromise on the results!</p>
                        <p style={{color:"#F48850"}}>Click On this Button for hero Contant</p>
                        <button id="btn" onClick={handlepage}>Try now</button>
                    </div>
                </div>
            </div>

            <div className="services" id='Services'>
                <h1>Our Services</h1>
                <div id="services-content">

                    <div id="services-box">
                        <img src={require("../Images/services-1.png")} alt="loading" />
                        <div id="text-services">
                            <h1>eCommerce Competitive Analtics</h1>
                            <p>Map your brand to the eCommerce landscape to enhance market share with real-time market intelligence.</p>
                            <h2>Read More...</h2>
                        </div>
                    </div>
                    <div id="services-box">
                        <img src={require("../Images/services-2.png")} alt="loading" />
                        <div id="text-services">
                            <h1>Brand Hygiene Protection</h1>
                            <p>Get the full visibility and control of your marketing campaigns with advanced algorithms that safeguard brands from safety and infringement issues.</p>
                            <h2>Read More...</h2>
                        </div>
                    </div>
                    <div id="services-box">
                        <img src={require("../Images/services-3.png")} alt="loading" />
                        <div id="text-services">
                            <h1>Mobile Identity Solution</h1>
                            <p>Seamless identity verification to eliminate risk and fraud at a single go with minimal user inpuat and reducing friction in identity validation</p>
                            <h2>Read More...</h2>
                        </div>
                    </div>
                    <div id="services-box">
                        <img src={require("../Images/services-4.png")} alt="loading" />
                        <div id="text-services">
                            <h1>Ad Traffic Validation</h1>
                            <p>mFilterIt’s ad fraud detection solution provides deterministic ad-fraud detection & prevention for both App & Web campaigns and help advertisers save money with better ROI.</p>
                            <h2>Read More...</h2>
                        </div>
                    </div>
                </div>
            </div>

            <div className="data">
                <h1>Numbers speak about us!</h1>
                <div className="data-container">
                    <div id="data-num">
                        <div id="data-box">
                            <h1>1500+</h1>
                            <p>eCommerce Websites Tracked</p>
                        </div>
                        <div id="data-box">
                            <h1>100K+</h1>
                            <p>Infringement Instances Identified</p>
                        </div>
                        <div id="data-box">
                            <h1>100K+</h1>
                            <p>Brands<br></br> Analyzed</p>
                        </div>
                        <div id="data-box">
                            <h1>1B+</h1>
                            <p>Video Frames Analyzed</p>
                        </div>
                        <div id="data-box">
                            <h1>3.5B+</h1>
                            <p>Unique Device Coverage</p>
                        </div>
                        <div id="data-box">
                            <h1>$400M+</h1>
                            <p>Saved for <br></br>clients</p>
                        </div>
                    </div>
                    <img src={require("../Images/data.png")} alt="loading" />
                </div>
            </div>


            <div className="partners">
                <h1>Trusted by</h1>
                <button id='pre-btn' onClick={handleScrollLeft} ><HiOutlineArrowLeft /></button>
                <button id='nxt-btn' onClick={handleScrollRight}><HiOutlineArrowRight /></button>
                <div className="partners-logo" ref={partnersRef}>
                    <div className="partners-image">
                        <img src={require("../Images/pt-1.png")} alt="loading" />
                    </div>
                    <div className="partners-image">
                        <img src={require("../Images/pt-2.png")} alt="loading" />
                    </div>
                    <div className="partners-image">
                        <img src={require("../Images/pt-3.png")} alt="loading" />
                    </div>
                    <div className="partners-image">
                        <img src={require("../Images/pt-4.png")} alt="loading" />
                    </div>
                    <div className="partners-image">
                        <img src={require("../Images/pt-5.png")} alt="loading" />
                    </div>
                    <div className="partners-image">
                        <img src={require("../Images/pt-6.png")} alt="loading" />
                    </div>
                    <div className="partners-image">
                        <img src={require("../Images/pt-1.png")} alt="loading" />
                    </div>
                    <div className="partners-image">
                        <img src={require("../Images/pt-2.png")} alt="loading" />
                    </div>
                    <div className="partners-image">
                        <img src={require("../Images/pt-3.png")} alt="loading" />
                    </div>
                    <div className="partners-image">
                        <img src={require("../Images/pt-4.png")} alt="loading" />
                    </div>
                    <div className="partners-image">
                        <img src={require("../Images/pt-5.png")} alt="loading" />
                    </div>
                    <div className="partners-image">
                        <img src={require("../Images/pt-6.png")} alt="loading" />
                    </div>
                </div>
            </div>

            <div className="testimonials">
                <div className="testimonials-head">
                    <h1>Testimonials</h1>
                    <p>What recruiters have to say about <span style={{ color: '#E46D2F' }}> mFilterIt</span></p>
                </div>
                <div className="testimonials-box-main">
                    <div className="testimonials-box">
                        <div id="testimonials-box-head">
                            <img src={require("../Images/logo-1.png")} alt="loading" />
                            <div id="testimonials-box-head-text">
                                <h2>Hamad Malik</h2>
                                <h1>CMO</h1>
                            </div>
                        </div>
                        <p>We started working with mFilterlt and almost instantly saw value is subscribing to the service as it helped us challenge and optimize traffic sources, weed out under performing partners and scale with confidence leading to marketing budget optimization.</p>
                    </div>
                    <div className="testimonials-box">
                        <div id="testimonials-box-head">
                            <img src={require("../Images/logo-2.png")} alt="loading" />
                            <div id="testimonials-box-head-text">
                                <h2>Haris Khan</h2>
                                <h1>Head Acquisition</h1>
                            </div>
                        </div>
                        <p>Ad-fraud is a challenge with every ad network - Careem works closely with partners to control the fraud and improve the traffic quality using mFilterIt fraud detection tool. The tool categorically identifies the type of fraud and helps understand real value additional by ad-network.</p>
                    </div>
                    <div className="testimonials-box">
                        <div id="testimonials-box-head">
                            <img src={require("../Images/logo-3.png")} alt="loading" />
                            <div id="testimonials-box-head-text">
                                <h2>Ganesh Sonawane</h2>
                                <h1>Sr. Digital Manager</h1>
                            </div>
                        </div>
                        <p>mFilterit have been a fantastic partner in not only helping us identify fraud sources but also optimize and identify where we can scale our investments. The team at mFilterlt have consistently delivered performance and have extended the support with respect to managing our partners.</p>
                    </div>
                    <div className="testimonials-box">
                        <div id="testimonials-box-head">
                            <img src={require("../Images/logo-4.png")} alt="loading" />
                            <div id="testimonials-box-head-text">
                                <h2>Parth Desai </h2>
                                <h1>Sr. Manager</h1>
                            </div>
                        </div>
                        <p>With the support of mFilterlt, we were able to improve the efficiency of our performance marketing spends and optimize our call centre bandwidth basis the quality of the lead. The detailed transactional reporting provided by mFilterlt helped us deliver outstanding business results.</p>
                    </div>
                </div>

            </div>


            <div className="about">
                <h1>Who we are</h1>
                <div className="about-content">
                    <div className="about-1">
                        <p>We are the essential tool in a digital marketer’s handbag. We are on a mission to create trust, uphold integrity, drive growth & value across the digital ecosystem. We empower our customers with a holistic view of their respective journeys’ in the digital ecosystem by providing them with accurate real-time data that helps them understand their returns on their digital investments.</p>
                        <button id='btn-about'>About Us</button>
                    </div>
                    <div className="about-2">
                        <div className="about-2-box">
                            <img src={require("../Images/about-1.png")} alt="loading" />
                            <p>Power of AI/ML</p>
                        </div>
                        <div className="about-2-box">
                            <img src={require("../Images/about-2.png")} alt="loading" />
                            <p>Future Ready Tech</p>
                        </div>
                        <div className="about-2-box">
                            <img src={require("../Images/about-3.png")} alt="loading" />
                            <p>Real-Time Tracking</p>
                        </div>
                        <div className="about-2-box">
                            <img src={require("../Images/about-4.png")} alt="loading" />
                            <p>Seamless Integration</p>
                        </div>

                    </div>
                </div>
            </div>

            <div className="reads">

                <h1>Insightful Reads - <span style={{ color: '#E46D2F' }}> mFilterIt</span></h1>
                <div className="reads-content">
                    <button id='btn-read' onClick={handleScrollLeft} ><HiOutlineArrowLeft /></button>
                    <div id="one">
                        <h2>Know The Unknown Cause Behind Your Abnormally High Installs</h2>
                    </div>
                    <div id="two">
                        <h2>Reseller Fraud Is Costing You More Than Just Your Ad Budget - Know Why?</h2>
                    </div>
                    <div id="three">
                        <h2>Why Creative Compliance Must Be a Necessity Not A Choice For Your Brand?</h2>
                    </div>
                    <div id="four">
                        <h2>Know How Your Brand is Under Threat Due to Incent Campaigns</h2>
                    </div>
                    <button id='btn-read-2' onClick={handleScrollRight}><HiOutlineArrowRight /></button>
                </div>
            </div>
        </Fragment>
    )
}

export default Content
