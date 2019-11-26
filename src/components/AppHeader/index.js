import React from "react";
import logo from "../../assets/vgs-logo.png";
import "./AppHeader.css"; // eslint-disable-line

const AppHeader = props => {
  return (
    <header className="app-header">
      <div className="app-title-wrapper">
        <div className="app-title-wrapper">
          <div className="app-left-nav">
            <img src={logo} className="app-logo" alt="logo" />
            <div className="app-title-text">
              <h1 className="app-title">Netlify + Fauna DB + VGS</h1>
              <p className="app-intro">
                Using FaunaDB, VGS, and Netlify functions
              </p>
            </div>
          </div>
        </div>
        <div className="deploy-button-wrapper"></div>
      </div>
    </header>
  );
};

export default AppHeader;
