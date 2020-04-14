const settings = {
  "name": "my-app",
  "state": {
    "frontity": {
      "url": "https://test.frontity.io",
      "title": "igeeksblog",
      "description": "WordPress installation for Frontity development"
    }
  },
  "packages": [
    {
      "name": "@frontity/mars-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "Home",
              "/"
            ],
            [
              "iPhone",
              "/category/iphone/"
            ],
            [
              "iPad",
              "/category/ipad/"
            ],
            [
              "iOS",
              "/tag/ios/"
            ],
            [
              "About Us",
              "/about-us/"
            ]
          ],
          "featured": {
            "showOnList": false,
            "showOnPost": false
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "api": "https://www.igeeksblog.com/wp-json"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
