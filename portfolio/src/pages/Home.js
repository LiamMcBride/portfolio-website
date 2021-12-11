import React from 'react';
import { pagestyle } from '../styles/styles';

const style = {
    "color": "#60C689",
}

const style2 = {
    "color": "white",
}

class Home extends React.Component{
    render(){
        return(
            <div style={pagestyle}>
                <h1 style={style}>Hello, my name is Liam McBride...</h1>
                <h2 style={style2}>I'm a software developer and fullstack engineer in training.</h2>
            </div>
        );
    }
}

export default Home;
