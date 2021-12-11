import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './pages/Home.js';
import Resume from './pages/Resume';
import NavBar from './components/NavBar';
import Projects from './pages/Projects';
import reportWebVitals from './reportWebVitals';
import { pagestyle } from "./styles/styles";

const tableStyle = {
  "height": "100%",
}

ReactDOM.render(
  // <table style={tableStyle}>
  //   <tbody>
  //     <td>
  //       <NavBar />
  //     </td>
  //     <td>
  //       <Resume style={pagestyle}/>
  //     </td>
  //   </tbody>
  // </table>,

  <div class="wrapper">
    <div class="sidebar">
      <NavBar />
    </div>
    <div class="main_content">
      <Projects />
    </div>
  </div>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
