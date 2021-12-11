import React from 'react';
import { pagestyle } from '../styles/styles';
import { resumePersonalProfile } from '../styles/styles';
import './resume.css';

const style = {
    "color": "#60C689",
}

const style2 = {
    "color": "white",
}

class Resume extends React.Component{
    render(){
        return(
            <div style={pagestyle}>
                <h1 style={style}>Resume</h1>
                <h2>Personal Profile</h2>
                <p>{resumePersonalProfile}</p>
                <h2>Experience</h2>
                <p>
                    <b>Paid Internship at Ubisoft (05/2019 - 08/2019)</b><br></br>
                    Customer support agent dealing with fraud detection, account verification, and other customer issues.
                    <br></br>
                    <b>Black Falcons (Ubuntu and Cisco Packet Tracer Specialist, 05/2018 - 05/2020)</b><br></br>
                    Cyber Patriots highschool club hosted by the Airforce. Deals with cybersecurity and advanced IT work. 
                    Was a team lead. Team’s Ubuntu and Networking expert. Placed 2nd at state level.
                    <br></br>
                    <b>Pizza Hut Driver (05/2020 - 07/2020)</b><br></br>
                    Delivery driver along with janitorial and food prep work.
                    <br></br>
                    <b>Exelaration Software Engineer Intern (09/2021 - Current)</b><br></br>
                    Delivery driver along with janitorial and food prep work.
                    <br></br>
                </p>
                <h2>Skills</h2>
                <p>
                    <b>Languages</b><br></br>
                    C#, Python, Java, and JavaScript
                    <br></br>
                    <b>Tools and Frameworks</b><br></br>
                    Unity, Blender, Git, Django, React, and Docker
                    <br></br>
                </p>
                <h2>Activities</h2>
                <p>
                    <b>Cross Country and Track(2014 - 2020)</b><br></br>
                    4 Year varsity runner as well as team captain
                    <br></br>
                </p>
            </div>
        );
    }
}

export default Resume;
