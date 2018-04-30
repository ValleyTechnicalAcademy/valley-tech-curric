import React from "react";
import Link from "gatsby-link";
import logo from "./VTA-namemark.png";

const Header = () => (
  <div
    style={{
      background: "white",
      marginBottom: "1.45rem"
    }}
  >
    <div
      style={{
        margin: "0 auto",
        maxWidth: 960,
        padding: "1.45rem 1.0875rem",
        textAlign: "center"
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: "white",
            textDecoration: "none"
          }}
        >
          <img src={logo} alt="Logo" />
        </Link>
      </h1>
    </div>
  </div>
);

export default Header;
