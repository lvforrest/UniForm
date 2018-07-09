import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import './landing.css';
import landingimage1 from "../../assets/images/landingimage1.png";
import SimpleCard from "./components/EmployeeCard";
import EmployerCard from "./components/EmployerCard";

class Landing extends Component {

    render() {
        return(

            <div>

                <div className="firstSection">
                    <div className="container">
                        <div className="row">
                            <div className="col-6" id="body1">
                                <h1 id="mainText">Let UniForm build any form you need and store all of your information in one place.</h1>
                                <h3 id="secondaryText">UniForm allows users to build any kind of form from their tablet or desktop in minutes and send it out to users with the click of a button.</h3>
                                <div className="row">
                                    <div className="col-6" id="loginButton">
                                        <button type="button" class="btn">Log In</button>
                                        <button type="button" class="btn">Sign Up</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-6">
                            <img className="image1" src={landingimage1} alt="logo"/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="secondSection">
                    <div className="container">
                        <div className="row">
                            <div className="col-6" >
                                <EmployerCard />
                            </div>
                            <div className="col-6">
                                <SimpleCard />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="thirdSection">
                    <div className="container">
                        <div className="row">
                            <div className="col-6" id="body1">
                                <h1 id="mainText">This is some information about our product</h1>
                                <h3 id="secondaryText">Here is some more information in a smaller font that you can read below the title</h3>
                            </div>
                            <div className="col-6">
                                <h1 id="mainText">This is some information about our product</h1>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        )}
}

export default Landing;


