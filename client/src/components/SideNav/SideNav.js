import React from 'react';
import './SideNav.css';

const SideNav = props => (
            <div className="sidenav">
            <div id="sideNavHeader">
            <h5>Form Elements</h5>
            <hr></hr>
            </div>
            {props.children}
          </div>
    )

    export default SideNav;