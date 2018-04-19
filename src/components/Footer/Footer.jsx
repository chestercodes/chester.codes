import React, { Component } from "react";
import Button from "react-md/lib/Buttons";
import Link from "gatsby-link";
import UserLinks from "../UserLinks/UserLinks";
import config from "../../../data/SiteConfig";
import "./Footer.scss";

class Footer extends Component {
  render() {
    const { userLinks } = this.props;
    const copyright = config.copyright;
    if (!copyright) {
      return null;
    }
    return (
      <footer className={"footer"}>
        {userLinks ? <UserLinks config={config} labeled /> : null}
        <div className="notice-container">
          <div className="copyright">
            <h4>{copyright}</h4>
          </div>

          <div  style={{textDecoration: "none"}} className="based-on">
            <h4>
              <a href="https://github.com/chestercodes/chestercodes.github.io">
                View page source
              </a>
            </h4>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
