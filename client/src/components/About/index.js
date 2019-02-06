import React from "react";
import "./style.css";

function About() {
    return (
        <div id="aboutBox">
            <h3 id="aboutTitle">About Us</h3>
            <div className="row">
                <div className="col-md-6">
                    <img alt="" src="https://dummyimage.com/150x150/13294b/4B9CD3.png&text=Owner+Photo" id="ownerPhoto" />
                    <p id="ownerBio">
                        <strong>Hi, my name is Jeremy Parra </strong>and I am the owner of the
                        Denver Window Cleaning Company LLC. I started washing windows
                        as a summer job with the family business. I began my local
                        professional career in 2009 in the Boulder valley area.
                        In 2015, the Denver Window Cleaning Company LLC was born to
                        fill a void in the Denver market that provides the highest
                        levels in customer service and finished product with a brand
                        that you can trust. I am a second generation entrepreneur in
                        Denver, with a strong background in home services and customer
                        relations. I serve the Denver Metro area from Boulder to Douglas County.
                    </p>
                </div>
                <div className="col-md-6">
                    <h5 id="videoTitle">Watch the Video Below to See More About What We Can Offer</h5>
                    <iframe title="The Denver Window Cleaning Company LLC Service Video" id="youTube" width="380" height="300" src="https://www.youtube.com/embed/c4oTCw33U-4" 
                        frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
            </div>
        </div>
    );
}

export default About;