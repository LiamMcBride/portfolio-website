import React from 'react';
import { colorGreen, colorWhite } from '../styles/styles';

const navSelectedTabStyle = {
    "box-shadow": "3px 0 0 #60C689, 0 1px 0 #222222",
    "padding": "5px 60px 5px 40px",
    "display": "block",
    "color": colorGreen,
}
//fontawesome
const navTabStyle = {
    "box-shadow": "0 1px 0 #222222",
    "padding": "5px 60px 5px 40px",
    "display": "block",
    "color": colorWhite,
}

const noPoitnerEvents = {
    "pointer-events": "none",
}

const NavTab = (props) => {
    return(
        <div style={props.selected ? navSelectedTabStyle : navTabStyle} onClick={props.handleClick} value={props.text}>
            <b style={noPoitnerEvents}>{props.text}</b>
        </div>
    );
    
}

class NavBar extends React.Component{

    constructor(props){
        super(props);
        this.handleTabChange = this.handleTabChange.bind(this);
        this.state = {currentTab: "Home"}
    }

    

    handleTabChange = (event) => {
        this.setState({currentTab: event.target.getAttribute("value")}, this.props.onTabChange(event.target.getAttribute("value")));
    }

    render(){
        return(
            <table>
                <tbody>
                    <tr>
                        <NavTab value="hi" text="Home" selected={this.state.currentTab === "Home"} handleClick={this.handleTabChange}/>
                    </tr>
                    <tr>
                        <NavTab text="Resume" selected={this.state.currentTab === "Resume"} handleClick={this.handleTabChange}/>
                    </tr>
                    <tr>
                        <NavTab text="Projects" selected={this.state.currentTab === "Projects"} handleClick={this.handleTabChange}/>
                    </tr>
                    <tr>
                        <NavTab text="Skills" selected={this.state.currentTab === "Skills"} handleClick={this.handleTabChange}/>
                    </tr>
                    <tr>
                        <NavTab text="Contact" selected={this.state.currentTab === "Contact"} handleClick={this.handleTabChange}/>
                    </tr>
                </tbody>
            </table>
        );
    }
}

export default NavBar;
