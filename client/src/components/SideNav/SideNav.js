import React from 'react';
import './SideNav.css';

const SideNav = props => (
            <div className="sidenav">
            {props.children}
          </div>
    )

    export default SideNav;