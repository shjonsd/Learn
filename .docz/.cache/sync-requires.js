const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/hjalti/klappir_learn/.docz/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/hjalti/klappir_learn/.docz/src/pages/404.js"))),
  "component---readme-md": hot(preferDefault(require("/Users/hjalti/klappir_learn/README.md"))),
  "component---documents-enviromaster-md": hot(preferDefault(require("/Users/hjalti/klappir_learn/Documents/enviromaster.md"))),
  "component---documents-index-mdx": hot(preferDefault(require("/Users/hjalti/klappir_learn/Documents/index.mdx"))),
  "component---documents-klappir-core-mdx": hot(preferDefault(require("/Users/hjalti/klappir_learn/Documents/klappir_core.mdx")))
}

