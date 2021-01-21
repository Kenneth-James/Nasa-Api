import React from "react";
import Link from "react-router-dom";
import image from "../bg-image.jpg";
import '../App.css';

class Home extends React.Component {
    render() {
        return(
            <div>
                <img src={image} alt='bg image' className='homeImage' />
                <h1>Did you know?</h1>
                <p>The first astronomers and astrologers were the Ancient Egyptians</p>
                <p>It's time we get back in touch with the stars </p>
                <h2>When you know the stars you know yourself</h2>
            </div>
        )
    }
}

export default Home;