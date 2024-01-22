import React, {useEffect, useState, useRef} from "react";
import { motion } from "framer-motion";
import './style.css';
import './mobile-css.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faEnvelope, faMailForward, faMinus, faPhone, faPlus } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faLinkedin, faTiktok, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';


const Main = () => {

    const [contact1Expanded, setContact1Expanded] = useState(false)
    const [contact2Expanded, setContact2Expanded] = useState(false)
    const [phoneRevealed1, setPhoneRevealed1] = useState(false)
    const [phoneRevealed2, setPhoneRevealed2] = useState(false)
    const [titleText, setTitleText] = useState('Shipment By Colorado');
    const [animationclassName, setAnimationclassName] = useState('fadeOut');
    const contactRef = useRef(null);

    const scrollToContact = () => {
        contactRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setTitleText('SBC');
            setAnimationclassName('fadeIn');
        }, 2000); 

        return () => clearTimeout(timer);
    }, []);

    return (
    <div className="container">
        <div className="header-banner">
            <img src='/logo192.png' id="main-logo-img"/>
            <div className='separator'></div>
            <h1 className={`dynamic-title ${animationclassName}`}>{titleText}</h1>
        </div>
        <div className="main-slogan-catch-container">
            <h1>Beyond Service, Beyond Satisfaction - Experience Business Excellence!</h1>
            <button className='functional-header-btn' onClick={scrollToContact}><h2>Contact Us</h2></button>
        </div>
        <div className="about-sect">
            <p id="paragraph-top">
                Beyond buying and selling properties, we're committed to providing helpful services that go the extra mile. Whether it's expert advice on the market trends, personalized consultations, or resources to make informed decisions, we're here to empower you on whatever endeavors you might have. Join us in turning dreams into addresses and discover a world where motivation meets exceptional service.
            </p>
            <img id='about-photo-main' src='./about-photo-main.png'/>

            <p id="paragraph-bottom">
            </p>
            <div className="personal-contact-sect">
                <h1>Personal Contact</h1>
                <div className="contact-cards">
                    <div className={contact1Expanded ? 'contact-card-expanded':'contact-card'} onClick={() => setContact1Expanded(!contact1Expanded)}>
                        <div className="title-bar">
                            <img className={contact1Expanded ? 'headshot-expanded':"headshot"} src="/headshot-van.png"/>
                            <FontAwesomeIcon className={contact1Expanded ?  'plus-minus-expanded' : 'plus-minus'} icon={contact1Expanded ?  faMinus : faPlus} />
                            <h2 className="name">Van Cessford</h2>
                        </div>
                        {contact1Expanded &&
                            <div className="card-content"> 
                                <h3 className="contact-card-about">Hi! My name is Van I am based out of Denver Colorado. I am a young entrepreneur who is driven and passionate about making a positive impact through my services. I have 4 years of sales experience, and I’m always looking to contribute meaningful insight to anyone who may need it! </h3>
                                <div className="personal-links">   
                                    <div className="contact-card-link">
                                            <FontAwesomeIcon className="link-icon-cc" icon={faPhone} />
                                            <h3>Phone: 303-859-3038</h3>
                                    </div> 
                                    <a href="https://www.linkedin.com/in/van-cessford-54a034263/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
                                        <div className="contact-card-link">
                                            <FontAwesomeIcon className="link-icon-cc" icon={faLinkedin} />
                                            <h3>LinkedIn</h3>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        }
                    </div>
                    <div className={contact2Expanded ? 'contact-card-expanded':'contact-card'} onClick={() => setContact2Expanded(!contact2Expanded)}>
                        <div className="title-bar">
                            <img className={contact2Expanded ? 'headshot-expanded':"headshot"} src="/headshot-don.png"/>
                            <FontAwesomeIcon className={contact2Expanded ?  'plus-minus-expanded' : 'plus-minus'} icon={contact2Expanded ?  faMinus : faPlus} />
                            <h2 className="name">Donaven Tate</h2>
                        </div>
                        {contact2Expanded &&
                            <div className="card-content"> 
                                <h3 className="contact-card-about">Hi, My Name is Don. I am based out of Colorado Springs, Colorado. A very motivated entrepreneur with 7+ years in sales experience. Graduate of Metropolitan State University with a Degree in Communications. Always looking for the next opportunity to change not only mine but others lives! </h3>
                                <div className="personal-links">   
                                    <div className="contact-card-link" onClick={() => setPhoneRevealed2(true)}>
                                            <FontAwesomeIcon className="link-icon-cc" icon={faPhone} />
                                            <h3>Phone: 719-960-8728</h3>
                                    </div> 
                                    <a href="https://www.linkedin.com/in/donaven-tate-80a247237/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
                                        <div className="contact-card-link">
                                            <FontAwesomeIcon className="link-icon-cc" icon={faLinkedin} />
                                            <h3>LinkedIn</h3>
                                        </div>
                                    </a>
                                </div>
                           </div>
                        }
                    </div>
                </div>
            </div>
        </div>
        <div ref={contactRef} className="contact-sect">
            <h1>Contact Us</h1>
                <div className="links">
                    <div className="ind-link-container">
                        <a href='https://www.homedepot.com'>
                            <div className="link-box">
                                <FontAwesomeIcon className="link-icon" icon={faEnvelope} />
                                <h2>Email</h2>
                            </div>
                        </a>
                    </div>
                    <div className="ind-link-container">
                        <a href='https://www.homedepot.com'>
                            <div className="link-box">
                                <FontAwesomeIcon className="link-icon" icon={faPhone} />
                                <h2>Phone</h2>
                            </div>
                        </a>
                    </div>
                    <div className="ind-link-container">
                        <a href='https://www.facebook.com/profile.php?id=61550938487372&mibextid=hu50Ix'>
                            <div className="link-box">
                                <FontAwesomeIcon className="link-icon" icon={faFacebook} />
                                <h2>Facebook</h2>
                            </div>
                        </a>
                    </div>
                    <div className="ind-link-container">
                        <a href='https://www.instagram.com/shipmentbycolorado'>
                            <div className="link-box">
                                <FontAwesomeIcon className="link-icon" icon={faInstagram} />
                                <h2>Instagram</h2>
                            </div>
                        </a>
                    </div>
                    <div className="ind-link-container">
                        <a href='https://www.homedepot.com'>
                            <div className="link-box">
                                <FontAwesomeIcon className="link-icon" icon={faLinkedin} />
                                <h2>LinkedIn</h2>
                            </div>
                        </a>
                    </div>
                </div>
        </div>
    </div>
    );
}

export default Main;