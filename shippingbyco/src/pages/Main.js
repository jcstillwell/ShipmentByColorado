import React, {useEffect, useState, useRef} from "react";
import { motion } from "framer-motion";
import './style.css';

const Main = () => {

    const [contact1Expanded, setContact1Expanded] = useState(false)
    const [contact2Expanded, setContact2Expanded] = useState(false)
    const [titleText, setTitleText] = useState('Shipment By Colorado');
    const [animationClass, setAnimationClass] = useState('fadeOut');
    const contactRef = useRef(null);

    const scrollToContact = () => {
        contactRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    useEffect(() => {
        // Change the text after the fade-out animation
        const timer = setTimeout(() => {
            setTitleText('SBC');
            setAnimationClass('fadeIn');
        }, 1500); 

        return () => clearTimeout(timer);
    }, []);

    return (
    <div className="container">
        <div className="header-banner">
            <img src='/logo512.png' className="main-logo-img"/>
            <h1 className={`dynamic-title ${animationClass}`}>{titleText}</h1>
        </div>
        <div className="main-slogan-catch-container">
            <h1>Beyond Service, Beyond Satisfaction - Experience Business Excellence!</h1>
            <button className='functional-header-btn' onClick={scrollToContact}><h2>Contact Us</h2></button>
        </div>
        <div className="about-sect">
        <h1>About Us</h1>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus ultricies tristique nulla aliquet enim. Nam libero justo laoreet sit amet. Felis donec et odio pellentesque diam. Etiam non quam lacus suspendisse faucibus interdum. Quam adipiscing vitae proin sagittis nisl rhoncus mattis. Leo a diam sollicitudin tempor id eu. Diam sit amet nisl suscipit. Feugiat pretium nibh ipsum consequat nisl vel pretium lectus. Integer feugiat scelerisque varius morbi enim nunc faucibus. Risus pretium quam vulputate dignissim. Tellus mauris a diam maecenas sed enim ut sem. Id donec ultrices tincidunt arcu. Velit scelerisque in dictum non.
            Eget nunc scelerisque viverra mauris in aliquam sem. Massa eget egestas purus viverra accumsan in nisl nisi scelerisque. Faucibus interdum posuere lorem ipsum dolor. Tempor orci dapibus ultrices in. Cursus euismod quis viverra nibh cras pulvinar mattis nunc sed. Lectus proin nibh nisl condimentum. Ac turpis egestas maecenas pharetra convallis posuere. Cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo. Proin sed libero enim sed faucibus turpis in eu. Vulputate ut pharetra sit amet aliquam id diam maecenas. Sed viverra ipsum nunc aliquet bibendum enim facilisis. Porta non pulvinar neque laoreet suspendisse interdum consectetur libero id. Quis hendrerit dolor magna eget. Leo a diam sollicitudin tempor id eu nisl nunc mi. Duis at tellus at urna condimentum mattis pellentesque.
            Sit amet luctus venenatis lectus magna fringilla urna porttitor. Amet risus nullam eget felis. Facilisis volutpat est velit egestas dui id ornare arcu odio. Varius duis at consectetur lorem donec massa sapien. Ultricies mi eget mauris pharetra et ultrices neque ornare aenean. Suscipit tellus mauris a diam maecenas sed enim ut. Quam elementum pulvinar etiam non quam lacus suspendisse faucibus interdum. Amet mauris commodo quis imperdiet massa tincidunt nunc. Imperdiet massa tincidunt nunc pulvinar sapien et ligula. Molestie a iaculis at erat pellentesque adipiscing commodo elit at. Tellus integer feugiat scelerisque varius morbi enim. Vel orci porta non pulvinar neque laoreet suspendisse interdum. Augue interdum velit euismod in pellentesque massa placerat duis ultricies. Id semper risus in hendrerit gravida. Id venenatis a condimentum vitae sapien pellentesque habitant morbi.
            Eu scelerisque felis imperdiet proin fermentum. Gravida arcu ac tortor dignissim convallis aenean et tortor at. Nisl rhoncus mattis rhoncus urna neque viverra. Ut aliquam purus sit amet. Est pellentesque elit ullamcorper dignissim cras. Rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Ultrices in iaculis nunc sed augue lacus viverra. Lectus proin nibh nisl condimentum id venenatis a condimentum. Venenatis a condimentum vitae sapien. Ut ornare lectus sit amet est. Volutpat lacus laoreet non curabitur gravida arcu ac tortor dignissim. Et molestie ac feugiat sed lectus vestibulum. Aliquam ut porttitor leo a diam sollicitudin tempor. Augue ut lectus arcu bibendum at varius vel pharetra.
            Volutpat ac tincidunt vitae semper quis lectus. Turpis egestas maecenas pharetra convallis posuere morbi leo urna. Facilisis volutpat est velit egestas dui id ornare. Turpis egestas sed tempus urna et pharetra pharetra. Tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras. Nunc vel risus commodo viverra maecenas accumsan lacus vel facilisis. Fermentum dui faucibus in ornare quam viverra. Massa tempor nec feugiat nisl pretium fusce id velit. Tincidunt augue interdum velit euismod in pellentesque. A arcu cursus vitae congue mauris rhoncus aenean vel. Sit amet nisl suscipit adipiscing bibendum est ultricies. Eu volutpat odio facilisis mauris sit amet massa. Ultrices dui sapien eget mi proin sed libero enim. Lobortis scelerisque fermentum dui faucibus in ornare quam viverra orci. Purus viverra accumsan in nisl nisi scelerisque eu. Sed risus pretium quam vulputate dignissim suspendisse. Et magnis dis parturient montes nascetur. Volutpat diam ut venenatis tellus in metus. Turpis cursus in hac habitasse platea dictumst. Gravida rutrum quisque non tellus orci ac auctor augue mauris.
            </p>

            <div className={contact1Expanded ? 'contact-card-expanded':'contact-card'} onClick={() => setContact1Expanded(!contact1Expanded)}>
                <h2> Van</h2>
            </div>
            <div className={contact2Expanded ? 'contact-card-expanded':'contact-card'} onClick={() => setContact2Expanded(!contact2Expanded)}>
                <h2></h2>
            </div>
        </div>
        <div className="services-sect">
        <h1>Services</h1>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus ultricies tristique nulla aliquet enim. Nam libero justo laoreet sit amet. Felis donec et odio pellentesque diam. Etiam non quam lacus suspendisse faucibus interdum. Quam adipiscing vitae proin sagittis nisl rhoncus mattis. Leo a diam sollicitudin tempor id eu. Diam sit amet nisl suscipit. Feugiat pretium nibh ipsum consequat nisl vel pretium lectus. Integer feugiat scelerisque varius morbi enim nunc faucibus. Risus pretium quam vulputate dignissim. Tellus mauris a diam maecenas sed enim ut sem. Id donec ultrices tincidunt arcu. Velit scelerisque in dictum non.
            Eget nunc scelerisque viverra mauris in aliquam sem. Massa eget egestas purus viverra accumsan in nisl nisi scelerisque. Faucibus interdum posuere lorem ipsum dolor. Tempor orci dapibus ultrices in. Cursus euismod quis viverra nibh cras pulvinar mattis nunc sed. Lectus proin nibh nisl condimentum. Ac turpis egestas maecenas pharetra convallis posuere. Cursus mattis molestie a iaculis at erat pellentesque adipiscing commodo. Proin sed libero enim sed faucibus turpis in eu. Vulputate ut pharetra sit amet aliquam id diam maecenas. Sed viverra ipsum nunc aliquet bibendum enim facilisis. Porta non pulvinar neque laoreet suspendisse interdum consectetur libero id. Quis hendrerit dolor magna eget. Leo a diam sollicitudin tempor id eu nisl nunc mi. Duis at tellus at urna condimentum mattis pellentesque.
            Sit amet luctus venenatis lectus magna fringilla urna porttitor. Amet risus nullam eget felis. Facilisis volutpat est velit egestas dui id ornare arcu odio. Varius duis at consectetur lorem donec massa sapien. Ultricies mi eget mauris pharetra et ultrices neque ornare aenean. Suscipit tellus mauris a diam maecenas sed enim ut. Quam elementum pulvinar etiam non quam lacus suspendisse faucibus interdum. Amet mauris commodo quis imperdiet massa tincidunt nunc. Imperdiet massa tincidunt nunc pulvinar sapien et ligula. Molestie a iaculis at erat pellentesque adipiscing commodo elit at. Tellus integer feugiat scelerisque varius morbi enim. Vel orci porta non pulvinar neque laoreet suspendisse interdum. Augue interdum velit euismod in pellentesque massa placerat duis ultricies. Id semper risus in hendrerit gravida. Id venenatis a condimentum vitae sapien pellentesque habitant morbi.
            Eu scelerisque felis imperdiet proin fermentum. Gravida arcu ac tortor dignissim convallis aenean et tortor at. Nisl rhoncus mattis rhoncus urna neque viverra. Ut aliquam purus sit amet. Est pellentesque elit ullamcorper dignissim cras. Rhoncus est pellentesque elit ullamcorper dignissim cras tincidunt lobortis. Ultrices in iaculis nunc sed augue lacus viverra. Lectus proin nibh nisl condimentum id venenatis a condimentum. Venenatis a condimentum vitae sapien. Ut ornare lectus sit amet est. Volutpat lacus laoreet non curabitur gravida arcu ac tortor dignissim. Et molestie ac feugiat sed lectus vestibulum. Aliquam ut porttitor leo a diam sollicitudin tempor. Augue ut lectus arcu bibendum at varius vel pharetra.
            Volutpat ac tincidunt vitae semper quis lectus. Turpis egestas maecenas pharetra convallis posuere morbi leo urna. Facilisis volutpat est velit egestas dui id ornare. Turpis egestas sed tempus urna et pharetra pharetra. Tellus pellentesque eu tincidunt tortor aliquam nulla facilisi cras. Nunc vel risus commodo viverra maecenas accumsan lacus vel facilisis. Fermentum dui faucibus in ornare quam viverra. Massa tempor nec feugiat nisl pretium fusce id velit. Tincidunt augue interdum velit euismod in pellentesque. A arcu cursus vitae congue mauris rhoncus aenean vel. Sit amet nisl suscipit adipiscing bibendum est ultricies. Eu volutpat odio facilisis mauris sit amet massa. Ultrices dui sapien eget mi proin sed libero enim. Lobortis scelerisque fermentum dui faucibus in ornare quam viverra orci. Purus viverra accumsan in nisl nisi scelerisque eu. Sed risus pretium quam vulputate dignissim suspendisse. Et magnis dis parturient montes nascetur. Volutpat diam ut venenatis tellus in metus. Turpis cursus in hac habitasse platea dictumst. Gravida rutrum quisque non tellus orci ac auctor augue mauris.
            </p>
        </div>
        <div ref={contactRef} className="contact-sect">
            <h1>Contact Us</h1>
            <h2>Email:</h2>
            <h2>Phone Number:</h2>
        </div>
    </div>
    );
}

export default Main;