import React from "react";
import "./style.css";

function Quotes() {
    return (
        <div id="quoteBox">
            <h3 id="quoteTitle">What Our Customers Have to Say About Us!</h3>
            <div className="row">
                <div className="col-md">
                    <blockquote className="otro-blockquote">
                        Jeremy was very professional, clean, and efficient.
                        We would hire him again to clean our interior and
                        exterior windows (of our home).
                    <span>Jaime L. - Lakewood</span>
                    </blockquote>
                </div>
                <div className="col-md">
                    <blockquote className="otro-blockquote">
                        Jeremy was extremely professional and did an 
                        excellent job on our windows. He communicated 
                        each step along the way, to ensure it was the 
                        best experience possible. We would definitely 
                        use the Denver Window Cleaning Company again, 
                        and highly recommend them!
                    <span>Cassie N. - Wheat Ridge</span>
                    </blockquote>
                </div>
                <div className="col-md">
                    <blockquote className="otro-blockquote">
                        Jeremy did an excellent job on all windows and even replaced 
                        some of the screens that had holes in them . Excellent 
                        service with a very fair price. Would highly recommend 
                        in all your window cleaning needs.
                    <span>Peter B. - Parker</span>
                    </blockquote>
                </div>
            </div>
        </div>

    );
}

export default Quotes;