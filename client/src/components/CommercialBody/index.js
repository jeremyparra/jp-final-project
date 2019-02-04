import React from "react";
import "./style.css";

function CommercialBody() {
    return (
        <div id="comBox">
           <div className="row">
                <div className="col-md-6">
                    <div className="row">
                        <div className="col-md-12">
                            <img alt="" id="serviceImage" src="https://dummyimage.com/350x300/13294B/4B9CD3.png&text=Image+(MUST+BE+350x300)"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div id="smallDisplay">
                            <h5 id="listHead">Examples of our commercial clientele:</h5>
                            <ul className="unorderedList">
                                <li>Small office buildings(up to 3 stories)</li>
                                <li>Restaurants</li>
                                <li>Coffee Shops</li>
                                <li>Dentist Office</li>
                                <li>Gyms</li>
                            </ul>
                            </div>
                        </div>
                    </div> 
                </div>
                <div className="col-md-6">
                    <div className="row">
                        <div className="col-md-12">
                            <div id="smallDisplay">
                            <p className="myParagraph">
                                <span id="blueTag">Commercial services are available</span> for buildings up to 3 stories. 
                                We have a fleet of ladders and equipment to meet all of your 
                                small business needs. Click below to find out more about what 
                                we can offer your commercial property.
                            </p>
                            <a href="commercial" className="btn btn-primary" id="otherBtn">Commercial Window Cleaning</a>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <img alt="" id="serviceImage" src="https://dummyimage.com/350x300/13294B/4B9CD3.png&text=Image+(MUST+BE+350x300)"/>
                        </div>
                    </div> 
                </div> 
            </div>
        </div> 

    );
}

export default CommercialBody;