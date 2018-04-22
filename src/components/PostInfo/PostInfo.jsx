import React, { Component } from "react";
import CardTitle from "react-md/lib/Cards/CardTitle";
import Avatar from "react-md/lib/Avatars";
import FontIcon from "react-md/lib/FontIcons";
import Link from "gatsby-link";
import _ from "lodash";
import "./PostInfo.scss";

class PostInfo extends Component {
  render() {
    const { postNode } = this.props;
    const post = postNode.frontmatter;
    let s = {
      padding: 10,
      paddingBottom: 20
    }
    return (
      <div className="post-info">
        <CardTitle
          style={s}
          subtitle={`Published on ${post.date}`}
        />
        <CardTitle
          style={s}
          subtitle={`${postNode.timeToRead} min read`}
        />
      </div>
    );
  }
}

export default PostInfo;
