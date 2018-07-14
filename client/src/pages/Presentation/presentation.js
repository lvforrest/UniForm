import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import './presentation.css';
import landingimage1 from "../../assets/images/landingimage1.png";
import part3 from "../../assets/images/part3.png";
import Team from "./components/team";
import futureDev from "../../assets/images/futureDev.png";

class Presentation extends Component {

    render() {
        return (

            <div>

                <div className="firstSection">
                    <div className="container">
                        <div className="row">
                            <div className="col-6" id="bodyLeft">
                                <h1 id="projectText">Project 3: UniForm</h1>
                                <h3 id="secondaryText">UniForm is a React Native application for desktop or tablet use. Uniform is used to communicate data between parties through bespoke form creation and manipulation.</h3>
                            </div>
                            <div className="col-6">
                                <img className="image1" src={landingimage1} alt="logo" />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="checklist">
                    <div className="container">
                        <div className="row">
                            <div className="col-12" id="bodyCenter">
                                <h1 id="mainText">Technologies Used:</h1>
                                <h3 id="secondaryText">✔ React Native</h3>
                                <h3 id="secondaryText">✔ Node and Express Web Server</h3>
                                <h3 id="secondaryText">✔ MongoDB with Mongoose ORM</h3>
                                <h3 id="secondaryText">✔ Used multiple GET and POST routes</h3>
                                <h3 id="secondaryText">✔ New tech: Material-UI, React Select, React Autosize Text Area, Passport </h3>
                                <h3 id="secondaryText">✔ Inutitive, polished front-end design</h3>
                                <h3 id="secondaryText">✔ Authentication with Passport</h3>
                                <h3 id="secondaryText">✔ MVC folder structure</h3>
                                <h3 id="secondaryText">✔ .gitignore and README</h3>
                                <div className="row" >
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="secondSection">
                    <div className="container">
                        <div className="row">
                            <div className="col-12" >
                                <Team />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="thirdSection">
                    <div className="container">
                        <div className="row">
                            <div className="col-6" id="body1">
                                <img className="part3" src={futureDev} alt="logo" />
                            </div>
                            <div className="col-6" id="body1">
                                <h1 id="mainText">Future Development Possibilities for UniForm</h1>
                                <br />

                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">Integrate Node Emailer features such as email notifications when a form is sent or received and emailing full forms between parties.</li>
                                    <li className="list-group-item">Better optimize the way that data is managed, i.e. integrate more mathematic functionality and computation.</li>
                                    <li className="list-group-item">Optimize the UI/UX of the form builder pages, selectors, date managers, etc.</li>
                                    <li className="list-group-item">Strengthen security measures to protect user data.</li>
                                </ul>
                                <div className="row">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        )
    }
}

export default Presentation;