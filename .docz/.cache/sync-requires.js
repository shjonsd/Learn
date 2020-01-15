const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---documents-klappir-core-mdx": hot(preferDefault(require("/Users/hjalti/klappir_learn/Documents/klappir_core.mdx"))),
  "component---readme-md": hot(preferDefault(require("/Users/hjalti/klappir_learn/README.md"))),
  "component---documents-index-mdx": hot(preferDefault(require("/Users/hjalti/klappir_learn/Documents/index.mdx"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/hjalti/klappir_learn/.docz/src/pages/404.js")))
}

