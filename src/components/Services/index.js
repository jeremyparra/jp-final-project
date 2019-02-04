import React from "react";
import "./style.css";

function Services() {
    return (
        <div id="serviceBox">
            <h2 id="serviceTitle">Services</h2>
            <div className="row">
                <div class="col-md-4">
                    <div id="myCard">
                        <h5 id="cardTitle">Metro Denver's Premier Residential Window Cleaning Service</h5>
                        <div className="card-body">
                            <img src="https://dummyimage.com/485x330/13294b/4B9CD3.png&text=Service+Item" className="card-img-top" alt="..." />
                            <p id="cardText">
                                Specializing in residential window cleaning,
                                The Denver Window Cleaning Company LLC can provide
                                a list of services for your home. Click to learn more.
                            </p>
                            <a href="residential" className="btn btn-primary" id="serviceBtn">Residential Window Cleaning</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div id="myCard">
                        <h5 id="cardTitle">Window Cleaning<br />Solutions for Commercial Properties</h5>
                        <div className="card-body">
                            <img src="https://dummyimage.com/485x330/13294b/4B9CD3.png&text=Service+Item" className="card-img-top" alt="..." />
                            <p id="cardText">
                                We offer window cleaning services to a variety of businesses
                                and commercial storefronts. Click to learn more.
                            </p>
                            <a href="commercial" className="btn btn-primary lowBtn1" id="serviceBtn">Commercial Window Cleaning</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div id="myCard">
                        <h5 id="cardTitle">We Do <br />More Than Clean <br />Windows</h5>
                        <div className="card-body">
                            <img src="https://dummyimage.com/485x330/13294b/4B9CD3.png&text=Service+Item" className="card-img-top" alt="..." />
                            <p id="cardText">
                                Click here to see about screen repair,
                                solar panel cleaning, pressure washing,
                                and rain gutter cleaning.
                            </p>
                            <a href="other" className="btn btn-primary lowBtn2" id="serviceBtn">Other Services</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Services;