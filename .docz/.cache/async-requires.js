// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---cache-dev-404-page-js": () => import("dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-404-js": () => import("../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---readme-md": () => import("../../README.md" /* webpackChunkName: "component---readme-md" */),
  "component---documents-enviromaster-md": () => import("../../Documents/enviromaster.md" /* webpackChunkName: "component---documents-enviromaster-md" */),
  "component---documents-index-mdx": () => import("../../Documents/index.mdx" /* webpackChunkName: "component---documents-index-mdx" */),
  "component---documents-klappir-core-mdx": () => import("../../Documents/klappir_core.mdx" /* webpackChunkName: "component---documents-klappir-core-mdx" */)
}

