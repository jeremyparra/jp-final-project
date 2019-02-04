import React from "react";
import "./style.css";

function Header() {
  return (
    <div id="myHeader">
      <div className="row" id="header">
        <div className="col-md-4">
          <img alt="" src="/images/dwc-logo.png" id="header-logo" />
        </div>
        <div className="col-md">
          <h5 id="callUs">CALL TODAY FOR A FREE QUOTE:</h5>
          <h1>303-351-5729</h1>
        </div>
      </div>
    </div>
  
  );
}

export default Header;
