import React, { Component } from "react";
import Media, { MediaOverlay } from "react-md/lib/Media";
import Link from "gatsby-link";

class NavTitle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mobile: true
    };
    this.handleResize = this.handleResize.bind(this);
  }
  componentDidMount() {
    this.handleResize();
    window.addEventListener("resize", this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleResize);
  }

  handleResize() {
    if (window.innerWidth >= 512) {
      this.setState({ mobile: false });
    } else {
      this.setState({ mobile: true });
    }
  }

  render() {
    var text = "Chester Burbidge"
    if(this.state.mobile === false){
      text = text + " - A Blogger like Joe"
    }
    return (
      <Link to="/">
        <p style={{color: "white"}} className="md-title md-title--toolbar">{text}</p>
      </Link>
    );
  }
}

export default NavTitle;
