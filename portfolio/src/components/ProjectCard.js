import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { faGitlab } from '@fortawesome/free-brands-svg-icons';
import { faItchIo } from '@fortawesome/free-brands-svg-icons';
import { colorGreen } from '../styles/styles';

export const ProjectCard = (props) => {

    return(
    <table>
        <tbody>
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
        </tbody>
    </table>
    );
}

const imgStyle = {
    "height": "400px",
    "max-width": "600px"
}

const tdPhotoStyle = {
    "min-width": "600px",
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
