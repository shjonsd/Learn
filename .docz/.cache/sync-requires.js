const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/hjalti/klappir_learn/.docz/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/hjalti/klappir_learn/.docz/src/pages/404.js"))),
  "component---documents-the-platform-md": hot(preferDefault(require("/Users/hjalti/klappir_learn/Documents/ThePlatform.md"))),
  "component---documents-user-support-enviro-master-introduction-md": hot(preferDefault(require("/Users/hjalti/klappir_learn/Documents/UserSupport_EnviroMaster_Introduction.md"))),
  "component---documents-index-mdx": hot(preferDefault(require("/Users/hjalti/klappir_learn/Documents/index.mdx"))),
  "component---documents-enviro-master-dashboard-md": hot(preferDefault(require("/Users/hjalti/klappir_learn/Documents/EnviroMaster_Dashboard.md")))
}

