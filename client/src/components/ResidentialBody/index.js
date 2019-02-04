import React from "react";
import "./style.css";

function ResidentialBody() {
    return (
        <div id="resBox">
           <div className="row">
                <div className="col-md-6">
                    <div className="row">
                        <div className="col-md-12">
                            <div id="smallDisplay">
                            <p className="myParagraph">
                                <span id="blueTag">The Denver Window Cleaning Company LLC</span> was formed specifically to 
                                provide the Denver metro market with high quality and reliable service. 
                                Look no further for your residential window cleaning needs. We are <strong>fully insured</strong> and we can provide references from our long list of repeat clients.
                            </p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <img alt="" id="serviceImage" src="https://dummyimage.com/350x300/13294B/4B9CD3.png&text=Image+(MUST+BE+350x300)"/>
                        </div>
                    </div> 
                </div> 
                <div className="col-md-6">
                    <div className="row">
                        <div className="col-md-12">
                            <img alt="" id="serviceImage" src="https://dummyimage.com/350x300/13294B/4B9CD3.png&text=Image+(MUST+BE+350x300)"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div id="smallDisplay">
                            <h5 id="listHead">All basic residential service includes:</h5>
                            <ul className="unorderedList">
                                <li>Cleaning of all interior and exterior windows, as requested</li>
                                <li>A wipe down of all screens in the service area</li>
                                <li>The vaccuuming of all window tracks and the wipe down of all sills</li>
                            </ul>
                            </div>
                        </div>
                    </div> 
                </div> 
            </div>
        </div> 

    );
}

export default ResidentialBody;