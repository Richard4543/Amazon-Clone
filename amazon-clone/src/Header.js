import React from "react";
import './Header.css';

function Header() {
  return (
    <div className="header">
      Header
      <img
        className="header_logo"
        src="https://inductiveautomation.com/static/images/logos/inductive-automation-logo.b565238b0b65.png"
      />
      <div className="header_search">
        <input className="header_searchInput" type="text" />
        {/* logo */}
      </div>
      <div className="header_nav">
        <div className="header_option">
          <span className="header_optionLineOne">Hello Guest</span>
          <span className="header_optionLineTwo">Sign In</span>
        </div>
        <div className="header_option">
          <span className="header_optionLineOne">Returns</span>
          <span className="header_optionLineTwo">& Orders</span>
        </div>
        <div className="header_option">
          <span className="header_optionLineOne">Your</span>
          <span className="header_optionLineTwo">Prime</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
