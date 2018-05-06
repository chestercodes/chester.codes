import React, { Component } from "react";
// import Helmet from "react-helmet";
// import Talks from "../components/Talks/Talks";
// import config from "../../data/SiteConfig";
// import talksJson from "./talks.json";
import Card from "react-md/lib/Cards/Card";
import CardText from "react-md/lib/Cards/CardText";
import Link from "gatsby-link"

class FourOhFour extends Component {
  render() {
    return (
      <div style={{ maxWidth: 1200 }} className="md-grid md-grid--no-spacing md-cell--middle">
        <div className="md-grid md-cell--10 mobile-fix">
          <Card className="md-grid md-cell md-cell--12 post" >

            <CardText>
              Oops, can't find that page.

              <p>
                <Link style={{
                  //textDecoration: "none" 
                }} to={"/"}>
                  Try the blog?
              </Link>
              </p>
            </CardText>
          </Card>
        </div>
      </div>
    );
  }
}

export default FourOhFour;
