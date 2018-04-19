import React from "react";
import FontIcon from "react-md/lib/FontIcons";
import Link from "gatsby-link";

function GetNavList(config) {
  const NavList = [
    {
      primaryText: "Blog",
      leftIcon: <FontIcon>home</FontIcon>,
      component: Link,
      to: "/"
    },
    {
      divider: true
    }
  ];

  NavList.push({
    primaryText: "CV",
    leftIcon: <FontIcon>person</FontIcon>,
    component: Link,
    to: "/cv/"
  });

  NavList.push({
    primaryText: "Talks",
    leftIcon: <FontIcon>share</FontIcon>,
    component: Link,
    to: "/talks/"
  });

  NavList.push({ divider: true });

  if (config.userLinks) {
    config.userLinks.forEach(link => {
      NavList.push({
        primaryText: link.label,
        leftIcon: <FontIcon forceSize iconClassName={link.iconClassName} />,
        component: "a",
        href: link.url
      });
    });
  }

  return NavList;
}
export default GetNavList;
