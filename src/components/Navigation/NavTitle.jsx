import React, { Component } from "react";
import Link from "gatsby-link";

class NavTitle extends Component {
  render() {
    return (
      <Link to="/">
        <p style={{color: "white"}} className="md-title md-title--toolbar">Chester Burbidge - A Blogger like Joe</p>
      </Link>
    );
  }
}

export default NavTitle;
