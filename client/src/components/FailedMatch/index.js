import React from "react";
import "./style.css";


function FailedMatch() {
    return ( 
        <div id="messageBox">
           No Match to Login Credentials<br />
           <a href="login" className="btn btn-primary" id="serviceBtn">Return to Login</a>
        </div>
    );
}

export default FailedMatch;

