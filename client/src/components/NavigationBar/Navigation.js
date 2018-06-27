import React from 'react';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
import { Link } from "react-router-dom";
import "./Navigation.css";


function ButtonAppBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light" id="theNav">
        <a className="navbar-brand" href="#">UniForm</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div id="floatNav">
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item" color="inherit" classNameName={
                    window.location.pathname === "/"
                    ? "nav-item active"
                    : "nav-item"}>
                    <Link to="/" classNameName="nav-link">
                        Home
                    </Link>
                
            </li>
            <li className="nav-item" color="inherit" classNameName={
                window.location.pathname === "/questionaire"
                ? "nav-item active"
                : "nav-item"}>
                <Link to="/questionaire" classNameName="nav-link">
                    Questionnaire
                </Link>
            
            </li>
            <li className="nav-item" color="inherit" classNameName={
                window.location.pathname === "/build"
                ? "nav-item active"
                : "nav-item"}>
                <Link to="/build" classNameName="nav-link">
                    Build
                </Link>
            
            </li>
            <li className="nav-item" color="inherit" classNameName={
                window.location.pathname === "/"
                ? "nav-item active"
                : "nav-item"}>
                <Link to="/" classNameName="nav-link">
                    Sign Out
                </Link>
            
            </li>
          </ul>
        </div>
        </div>
      </nav>
    
    );
  }

export default ButtonAppBar;


// const styles = {
//   root: {
//     flexGrow: 1,
//   },
//   flex: {
//     flex: 1,
//   },
//   menuButton: {
//     marginLeft: -12,
//     marginRight: 20,
//   },
// };

// function ButtonAppBar(props) {
//   const { classNamees } = props;
//   return (
//     <div classNameName={classNamees.root} id="nav">
//       <AppBar position="static">
//         <Toolbar>

//         <IconButton classNameName={classNamees.menuButton} color="inherit" aria-label="Menu">
//             <MenuIcon />
//         </IconButton>

//         <Typography variant="title" color="inherit" classNameName={classNamees.flex}>
//             UniForm
//         </Typography>
          
//           <Button color="inherit" classNameName={
//                 window.location.pathname === "/"
//                 ? "nav-item active"
//                 : "nav-item"}>
//                 <Link to="/" classNameName="nav-link">
//                     Home
//                 </Link>
//             </Button>

//             <Button color="inherit" classNameName={
//                 window.location.pathname === "/questionaire"
//                 ? "nav-item active"
//                 : "nav-item"}>
//                 <Link to="/questionaire" classNameName="nav-link">
//                     Questionnaire
//                 </Link>
//             </Button>

//             <Button color="inherit" classNameName={
//                 window.location.pathname === "/build"
//                 ? "nav-item active"
//                 : "nav-item"}>
//                 <Link to="/build" classNameName="nav-link">
//                     Build
//                 </Link>
//             </Button>

//             <Button color="inherit" classNameName={
//                 window.location.pathname === "/"
//                 ? "nav-item active"
//                 : "nav-item"}>
//                 <Link to="/" classNameName="nav-link">
//                     Sign Out
//                 </Link>
//             </Button>

//         </Toolbar>
//       </AppBar>
//     </div>
//   );
// }

// ButtonAppBar.propTypes = {
//   classNamees: PropTypes.object.isRequired,
// };

// export default withStyles(styles)(ButtonAppBar);
