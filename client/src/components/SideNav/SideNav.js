import React from 'react';
import SideNav, { Nav, NavText } from 'react-sidenav';
import './SideNav.css';
 
 
//specify the base color/background of the parent container if needed
const MySideNav = props => (
    <div style={{background: '#2c3e50', color: '#FFF', width: 220}}> 
        <SideNav>
        <h4 id="sidenav-header">{props.title}</h4>
        <hr></hr>
        {props.children.map(child => {
          return (
          <Nav>
          <NavText> {child} </NavText>
          </Nav>
          );      
        })}
        <br></br>
        </SideNav>
    </div>
)

export default MySideNav;