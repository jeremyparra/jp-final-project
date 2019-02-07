import React from "react";
import "./style.css";
import { Link } from "react-router-dom";


function Services() {
    return (
        <div id="serviceBox">
            <h2 id="serviceTitle">Services</h2>
            <div className="row">
                <div className="col-md-4">
                    <div id="myCard">
                        <h5 id="cardTitle">Metro Denver's Premier Residential Window Cleaning Service</h5>
                        <div className="card-body">
                            <img alt="Residential Services" src="https://dummyimage.com/485x330/13294b/4B9CD3.png&text=Service+Item" className="card-img-top" />
                            <p id="cardText">
                                Specializing in residential window cleaning,
                                The Denver Window Cleaning Company LLC can provide
                                a list of services for your home. Click to learn more.
                            </p>
                            <Link to="/residential"><button className="btn btn-primary" id="serviceBtn1">Residential Window Cleaning</button></Link>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div id="myCard">
                        <h5 id="cardTitle">Window Cleaning<br />Solutions for Commercial Properties</h5>
                        <div className="card-body">
                            <img alt="Commercial Services" src="https://dummyimage.com/485x330/13294b/4B9CD3.png&text=Service+Item" className="card-img-top" />
                            <p id="cardText">
                                We offer window cleaning services to a variety of businesses
                                and commercial storefronts. Click to learn more.
                            </p>
                            <Link to="/commercial"><button className="btn btn-primary" id="serviceBtn2">Commercial Window Cleaning</button></Link> 
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div id="myCard">
                        <h5 id="cardTitle">We Do <br />More Than Clean <br />Windows</h5>
                        <div className="card-body">
                            <img alt="Other Services" src="https://dummyimage.com/485x330/13294b/4B9CD3.png&text=Service+Item" className="card-img-top" id="otherImage" />
                            <p id="cardText">
                                Click here to see about screen repair,
                                solar panel cleaning, pressure washing,
                                and rain gutter cleaning.
                            </p>
                            <Link to="/other"><button className="btn btn-primary" id="serviceBtn3">Other Services</button></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;