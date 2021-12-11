import React from 'react';

const navSelectedTabStyle = {
    "box-shadow": "3px 0 0 #60C689, 0 1px 0 #222222",
    "padding": "5px 60px 5px 40px",
    "display": "block",
}
//fontawesome
const navTabStyle = {
    "box-shadow": "0 1px 0 #222222",
    "padding": "5px 60px 5px 40px",
    "display": "block",
}

const NavTab = (props) => {
    
    return(
        <div style={props.selected ? navSelectedTabStyle : navTabStyle}>
            <b>{props.text}</b>
        </div>
    );
    
}

class NavBar extends React.Component{
    render(){
        return(
            <table>
                <tbody>
                    <tr>
                        <NavTab text="Home" selected={false}/>
                    </tr>
                    <tr>
                        <NavTab text="Resume" selected={true}/>
                    </tr>
                    <tr>
                        <NavTab text="Projects" selected={false}/>
                    </tr>
                    <tr>
                        <NavTab text="Skills" selected={false}/>
                    </tr>
                    <tr>
                        <NavTab text="Contact" selected={false}/>
                    </tr>
                </tbody>
            </table>
        );
    }
}

export default NavBar;
