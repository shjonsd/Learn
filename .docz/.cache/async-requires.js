// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---documents-klappir-core-mdx": () => import("../../Documents/klappir_core.mdx" /* webpackChunkName: "component---documents-klappir-core-mdx" */),
  "component---readme-md": () => import("../../README.md" /* webpackChunkName: "component---readme-md" */),
  "component---documents-index-mdx": () => import("../../Documents/index.mdx" /* webpackChunkName: "component---documents-index-mdx" */),
  "component---src-pages-404-js": () => import("../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */)
}

