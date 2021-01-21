import React from "react";
import Link from "react-router-dom";
import axios from 'axios';

// Study the Star Wars Api example it'll help greatly with this!!

const NASA_URL = 'https://api.nasa.gov/planetary/apod?api_key=InOwLJHZ1riMFGzBLfrgJux7ysVsaRuNTFX4vjCf'

class Nasa extends React.Component {
   constructor(props){
       super(props);

       this.state = { data: [] }
   }
   
    async getPhoto() {
        try{
            const res = await axios.get(NASA_URL);
            this.setState( {data: res.data } ) //the data in the curly braces is what i need to call on
            console.log(res.data);
        } catch(e) {
            console.error(e);
        }
    }   

    componentDidMount() {
        this.getPhoto();
    }

    render() {
        return(
            <div>
                <h1>{this.state.data.title}</h1> {/* dont forget 'data' is coming from the this.setState */}
                <img 
                src={this.state.data.url}
                alt={this.state.data.title}
                />
                <p>{this.state.data.explanation}</p>
            </div>
        )
    }


}



export default Nasa;