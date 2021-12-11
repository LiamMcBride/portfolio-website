import React from 'react';
import { pagestyle } from '../styles/styles';
import { ProjectCard } from '../components/ProjectCard';

const style = {
    "color": "#60C689",
}

const style2 = {
    "color": "#b2b2b2",
}

class Home extends React.Component{
    render(){
        return(
            <div style={pagestyle}>
                <h1 style={style}>Projects</h1>
                <h2 style={style2}>I've been up to a lot lately, please check it out!</h2>
                <table>
                    <tr>
                        <ProjectCard title="Personal Website"/>
                    </tr>
                    <tr>
                        <ProjectCard title="Personal Website"/>
                    </tr>
                </table>
            </div>
        );
    }
}

export default Home;
