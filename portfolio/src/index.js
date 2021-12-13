import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home.js';
import Resume from './pages/Resume';
import NavBar from './components/NavBar';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import reportWebVitals from './reportWebVitals';
import { pagestyle } from "./styles/styles";

const tableStyle = {
  "height": "100%",
}

class MainComponent extends React.Component {

  constructor(props){
    super(props);
    this.state = {currentTab: "Home"};
    this.tabObject = this.tabObject.bind(this);
  }

  changeTab = (tab) => {
    this.setState({currentTab: tab});
  }

  tabObject = () => {
    if(this.state.currentTab === "Home"){
      console.log("Hi");
      return (<Home />);
    }
    if(this.state.currentTab === "Resume"){
      return <Resume />;
    }
    if(this.state.currentTab === "Projects"){
      return <Projects />;
    }
    if(this.state.currentTab === "Skills"){
      return <Skills />;
    }
    if(this.state.currentTab === "Contact"){
      return <Contact />;
    }
  }





  render(){
    return(
        <div class="wrapper">
            <div class="sidebar">
              <NavBar onTabChange={this.changeTab}/>
            </div>
            <div class="main_content">
              {this.tabObject()}
            </div>
        </div>
    );
  }
}

ReactDOM.render(
  <MainComponent />,
  document.getElementById('root')
  
);
