import React from 'react';
import { pagestyle, colorWhite } from '../styles/styles';
import "./home.css";

const style = {
    "color": "#60C689",
}

const style2 = {
    "color": colorWhite,
}

const imgStyle = {
    "width": "440px",
    "height": "440px",
    "border-radius": "50%"
}

class Home extends React.Component{
    render(){
        return(
            <div style={pagestyle}>
                <h1 style={style}>Hello, my name is Liam McBride...</h1>
                <h2 style={style2}>I'm a software developer and fullstack engineer in training.</h2>
                <div class="crop">
                    <img src="images/headShot.jpg" alt="Donald Duck" />
                </div>
            </div>
        );
    }
}

export default Home;
