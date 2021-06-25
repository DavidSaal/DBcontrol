import React from "react";
import logo from "../../images/logo.png";

const Header = () => {
  return (
    <div className="text-center my-5">
      <div className="card shadow my-2">
        <div className="d-flex justify-content-center align-items-center">
          <h1 className="display-3 mt-3">Data List</h1>
          <img
            src={logo}
            alt="Logo"
            style={{ width: "100px", height: "90px" }}
          />
        </div>
        <p className="display-6 fs-6">By David Saal</p>
      </div>
    </div>
  );
};

export default Header;
