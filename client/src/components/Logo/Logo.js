import React from "react";
import mainLogo from './mainLogo.png';
import './logo.css';

class Logo extends React.Component {
  render() {
    return (
        <div className="container">
          <img src={mainLogo} class='logo' alt="UniForm"/>
        </div>
    );
  }
}

export default Logo;