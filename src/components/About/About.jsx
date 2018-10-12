import React, { Component } from "react";
import Card from "react-md/lib/Cards/Card";
import CardText from "react-md/lib/Cards/CardText";
import UserLinks from "../UserLinks/UserLinks";
import config from "../../../data/SiteConfig";
import "./About.scss";

class About extends Component {
  render() {
    return (
      <div className="about-container md-grid mobile-fix">
        <Card className="md-grid md-cell--8">
          <div className="about-wrapper">
            <CardText>
              <p>Chester Burbidge is a Bristol based software professional and the owner and operator of <a href="https://www.technicalunderstanding.co.uk">Technical Understanding Limited</a></p>
              <p>Chester's experience is primarily in, cloud based .Net software development. An interactive diagram of skills can be seen on the <a href="/cv/" >CV page</a> </p>
            </CardText>
          </div>
        </Card>
      </div>
    );
  }
}

export default About;
