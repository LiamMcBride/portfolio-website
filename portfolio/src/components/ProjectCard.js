import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faGitlab } from '@fortawesome/free-brands-svg-icons';
import { faItchIo } from '@fortawesome/free-brands-svg-icons';
import { colorGreen } from '../styles/styles';
import { isMobile } from './Tools';

export const ProjectCard = (props) => {
    console.log(window.innerWidth);
    if(window.innerWidth > 800){
        return(
            <>
                <tr>
                    <h2>{props.title}</h2>
                </tr>
                <tr>
                    <td style={tdPhotoStyle}>
                        <img style={imgStyle} src={"images/" + props.photo}></img>
                    </td>
                    <td style={tdPhotoStyle}>
                        <tr>
                            <p>{props.desc}</p>
                        </tr>
                        
                        
                    </td>
                    <td>
                            <a href={props.link} target="_blank">
                                <FontAwesomeIcon icon={icon(props.link)} color={colorGreen} size={"2x"}/>
                            </a>
                    </td>
                </tr>
            </>
        );
    }
    else{
        return(
            <tr>
                <tr>
                    <h2>{props.title + " "} <a href={props.link} target="_blank">
                                <FontAwesomeIcon icon={icon(props.link)} color={colorGreen} size={"1x"}/>
                            </a></h2>                    
                    
                </tr>
                <tr>
                    <td style={tdPhotoStyle}>
                        <img style={imgStyle} src={"images/" + props.photo}></img>
                    </td>
                </tr>
                <tr>
                    <td>
                        <tr>
                            <p>{props.desc}</p>
                        </tr>
                        
                        
                    </td>
                    <td>
                            
                    </td>
                </tr>
            </tr>
        );
    }
}



const imgStyle = {
    // "height": "400px",
    "max-width": "600px",
    // "min-width": "50%"
    // "width": "100%"
    "width": "100%"
}

const tdPhotoStyle = {
    // "min-wdith": !isMobile ? "600px" : "50%",
    "max-width": "600px",
    "padding-right": "30px"
}

const icon = (link) => {

    if(link.includes("github")){
        return faGithubSquare;
    }
    if(link.includes("gitlab")){
        return faGitlab;
    }
    if(link.includes("itch")){
        return faItchIo;
    }
}
