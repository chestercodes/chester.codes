var copy = "Chester Burbidge © " + new Date().getFullYear()

module.exports = {
  blogPostDir: "posts", // The name of directory that contains your posts.
  siteTitle: "chester.codes", // Site title.
  siteTitleAlt: "chester.codes", // Alternative site title for SEO.
  siteLogo: "/logos/logo-1024.png", // Logo used for SEO and manifest.
  siteUrl: "https://chester.codes", // Domain of your website without pathPrefix.
  pathPrefix: "/", // Prefixes all links. For cases when deployed to example.github.io/gatsby-material-starter/.
  siteDescription: "Website and blog of Chester Burbidge.", // Website description used for RSS feeds/meta description tag.
  siteFBAppID: "", // FB Application ID for using app insights
  siteGATrackingID: "UA-90678216-1", // Tracking code ID for google analytics.
  postDefaultCategoryID: "Tech", // Default category for posts.
  userLinks: [
    {
      label: "GitHub",
      url: "https://github.com/chestercodes",
      iconClassName: "fa fa-github"
    },
    {
      label: "Twitter",
      url: "https://twitter.com/chestercodes",
      iconClassName: "fa fa-twitter"
    }
  ],
  copyright: copy
};
