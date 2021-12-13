import React from 'react';
import { colorGreen, pagestyle, colorWhite } from '../styles/styles';
import { faPython, faUnity, faJava, faJsSquare, faReact, faDocker, faHtml5, faCss3Alt } from '@fortawesome/free-brands-svg-icons';
import { faTerminal, faCodeBranch, faCubes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./skills.css";

const style = {
    "color": colorGreen,
}

const skillDict = {
    "python": [
        "3 years of experience",
        "10+ personal projects",
        "Used professionally"
    ],
    "c-sharp": [
        "4 years of experience",
        "5+ personal projects",
        "Multiple video games",
        "Used closely with Unity"
    ],
    "java": [
        "3 years of experience",
        "Data structure and algorithm course",
    ],
    "js": [
        "1 year of experience",
        "Used professionally",
        "Used closely with React and HTML"
    ],
    "unity": [
        "4 years of experience",
        "Multiple video games made",
        "2d design",
        "3d design",
        "VR design"
    ],
    "blender": [
        "Simple modeling",
        "Simple rigging and animating"
    ],
    "git": [
        "GitHub",
        "GitLab"
    ],
    "django": [
        "Multiple personal projects",
        "Used professionally",
        "Rest API"
    ],
    "react": [
        "Multiple personal projects",
        "Used professionaly",
    ],
    "docker": [
        "Used professionally",
    ],
    "html": [
        "Multiple personal projects",
        "Used professionally",
    ],
    "css": [
        "Multiple personal projects",
        "Used professionally",
    ],
}

const Skill = (props) => {
    return(
        <div class="skill-div">
            <h2>{props.name}</h2>
            <table class="skill-table">
                <tbody>
                    <tr>
                        <td class="font-cell">
                            <FontAwesomeIcon icon={props.icon} color={colorGreen} size="4x"/>
                        </td>
                        <td class="list-cell">
                            <ul>
                                {props.bullets.map(element => <li key={element}>{element}</li>)}
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}

const skillBlocks = [
    [
    <Skill icon={faPython} name="Python" bullets={skillDict.python}/>,
    <Skill icon={faTerminal} name="C#" bullets={skillDict['c-sharp']}/>,                   
    <Skill icon={faJava} name="Java" bullets={skillDict.java}/>,                    
    <Skill icon={faJsSquare} name="Java Script" bullets={skillDict.js}/>
    ],                      
    [
    <Skill icon={faUnity} name="Unity" bullets={skillDict.unity}/>,                       
    <Skill icon={faCubes} name="Blender" bullets={skillDict.blender}/>,                      
    <Skill icon={faCodeBranch} name="Git" bullets={skillDict.git}/>,                       
    <Skill icon={faPython} name="Django" bullets={skillDict.django}/>
    ],                     
    [
    <Skill icon={faReact} name="React" bullets={skillDict.react}/>,
    <Skill icon={faDocker} name="Docker" bullets={skillDict.docker}/>,
    <Skill icon={faHtml5} name="HTML" bullets={skillDict.html}/>,
    <Skill icon={faCss3Alt} name="CSS" bullets={skillDict.css}/>
    ]
];

class Skills extends React.Component{
    render(){
        return(
            <div style={pagestyle}>
                <h1 style={style}>Skills</h1>
                <table>
                    <tbody>
                        <tr>{skillBlocks[0].map(element => <td>{element}</td>)}</tr>
                        <tr>{skillBlocks[1].map(element => <td>{element}</td>)}</tr>
                        <tr>{skillBlocks[2].map(element => <td>{element}</td>)}</tr>
                        
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Skills;
