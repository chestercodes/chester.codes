import React from "react";
import Helmet from "react-helmet";
import "font-awesome/scss/font-awesome.scss";
import Navigation from "../components/Navigation/Navigation";
import config from "../../data/SiteConfig";
import "./index.scss";
import "./global.scss";

export default class MainLayout extends React.Component {
  getLocalTitle() {
    function capitalize(string) {
      if (!string) { return "" }
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
    const pathPrefix = config.pathPrefix ? config.pathPrefix : "/";
    const currentPath = this.props.location.pathname
      .replace(pathPrefix, "")
      .replace("/", "");
    let title = "";
    if (currentPath === "") {
      title = "Blog";
    } else if (currentPath === "tags") {
      title = "Tags";
    } else if (currentPath === "talks") {
      title = "Talks";
    } else if (currentPath === "cv") {
      title = "CV";
    } else if (currentPath.includes("posts")) {
      title = "Article";
    } else if (currentPath.includes("tags")) {
      const tag = currentPath
        .replace("tags", "")
        .replace("/", "")
        .replace("-", " ");
      title = `Tag == ${capitalize(tag)}`;
    } else if (currentPath.includes("categories")) {
      const category = currentPath
        .replace("categories", "")
        .replace("/", "")
        .replace("-", " ");
      title = `${capitalize(category)}`;
    }
    return title;
  }
  render() {
    const { children } = this.props;
    var minHeight = 600;
    return (
      <Navigation config={config} LocalTitle={this.getLocalTitle()}>
        <div style={{
          height: "100%",
          width: "100%",
          position: "absolute",
          backgroundImage: "url('/logos/logo-1024.png')",
          opacity: 0.5,
          height: minHeight
        }} ></div>
        <div style={{
          minHeight: minHeight,
          zIndex: 0
        }} >
          <Helmet>
            <meta name="description" content={config.siteDescription} />
          </Helmet>
          {children()}
        </div>
      </Navigation>
    );
  }
}
