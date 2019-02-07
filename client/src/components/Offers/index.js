import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Offers() {
    return (
        <div id="offerBox" >
            <div className="row" id="offerBg">
                <div className="col-md">
                    <img alt="" src="https://dummyimage.com/485x330/13294b/4B9CD3.png&text=SPECIAL+OFFER+GOES+HERE+(485x330)" id="offerImage" />
                </div>
                <div className="col-md">
                    <h3 id="offerHead">Get a no obligation quote, free of charge!</h3>
                    <p id="offerBody">
                        Spring is right around the corner!
                        Let us help you with your spring cleaning needs and get your windows spotless!
                        15% off all of your window cleaning needs now through the end of May 2019.
                        Contact us today!
                    </p>
                    <Link to="/contact"><button className="btn btn-primary">Contact Us Today</button></Link>             
                </div>
            </div>
        </div>
    );
}

export default Offers;