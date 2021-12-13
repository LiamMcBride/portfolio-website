import React from 'react';
import { pagestyle } from '../styles/styles';
import { resumePersonalProfile, colorGreen } from '../styles/styles';
import { faFilePdf } from '@fortawesome/free-regular-svg-icons';
import {faCloudDownloadAlt, faEnvelopeOpenText, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './resume.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const style = {
    "color": colorGreen,
}

const pStyle = {
    "padding-top": "10px",
    "color": colorGreen
}

let emailIcon = <FontAwesomeIcon icon={faEnvelopeOpenText} color={colorGreen} size="2x"/>;

class Contact extends React.Component{

    constructor(props){
        super(props);
        this.state = {opened: false}
        this.copyToClipboard = this.copyToClipboard.bind(this);
    }

    copyToClipboard = () => {
        navigator.clipboard.writeText("mailmcbride@vt.edu");
        this.setState({opened: true})
    }

    openedEmailIcon = <FontAwesomeIcon icon={faEnvelopeOpenText} color={colorGreen} size="2x"/>;
    emailIcon = <FontAwesomeIcon icon={faEnvelope} color={colorGreen} size="2x"/>;

    render(){
        return(
            <div style={pagestyle}>
                <h1 style={style}>Contact</h1>
                <h2>Thanks for checking out my page! Feel free to contact me through any of the following means!</h2>
                <h2>Twitter</h2>
                <a href='https://twitter.com/BlueLetter' target="_blank">
                    <FontAwesomeIcon icon={faTwitter} color={colorGreen} size="2x"/>
                </a>
                <h2>Instagram</h2>
                <a href='https://www.instagram.com/mailman2015/' target="_blank">
                    <FontAwesomeIcon icon={faInstagram} color={colorGreen} size="2x"/>
                </a>
                <h2>Email</h2>
                <div onClick={this.copyToClipboard}>
                    {this.state.opened ? this.openedEmailIcon : this.emailIcon}
                    {this.state.opened ? <p style={pStyle}>Copied to clipboard!</p> : <p style={pStyle}>Click to copy</p>}
                </div>
            </div>
        );
    }
}

export default Contact;
