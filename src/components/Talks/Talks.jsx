import React, { Component } from "react";
import Card from "react-md/lib/Cards/Card";
import Media, { MediaOverlay } from "react-md/lib/Media";
import CardText from "react-md/lib/Cards/CardText";
import UserLinks from "../UserLinks/UserLinks";
import config from "../../../data/SiteConfig";
import CardTitle from "react-md/lib/Cards/CardTitle";
import "./Talks.scss";

class Talks extends Component {
  render() {
    var defaultCover = "/logos/logo-1024.png"
    var coverHeight = 300

    var renderSession = session => {
      var text = session.location + " - " + session.date
      if (session.url) {
        return (<a href={session.url}>{text}</a>)
      }
      return (<span>{text}</span>)
    }

    var renderTalk = t => {
      var cover = t.cover ? t.cover : defaultCover
      var s = {
        backgroundImage: `url(${cover})`,
        height: `${coverHeight}px`
      }
      if (t.coverPosition) {
        s.backgroundPosition = t.coverPosition
      }

      return (
        <Card key={t.title} className="md-grid md-cell md-cell--middle md-cell--12">
          <Media
            style={s}
            className="post-preview-cover"
          >
            <MediaOverlay>
              <CardTitle title={t.title} />
            </MediaOverlay>
          </Media>
          <div className="talk-wrapper">
            <CardText>
              <div className="talk-text md-body-1">
                <p>{t.abstract}</p>
                <ul>
                  {t.sessions.map(s => <li key={s.location + s.date} >{renderSession(s)}</li>)}
                </ul>
              </div>
            </CardText>
          </div>
        </Card>
      )
    }

    return (
      <div className="md-grid md-grid--no-spacing md-cell--middle">
        <div className="md-grid md-cell--10 mobile-fix">
          {this.props.talks.map(t => renderTalk(t))}
        </div>
      </div>
    );
  }
}

export default Talks;
