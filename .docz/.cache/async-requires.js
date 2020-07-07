// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---cache-dev-404-page-js": () => import("dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-404-js": () => import("../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---documents-index-mdx": () => import("../../Documents/index.mdx" /* webpackChunkName: "component---documents-index-mdx" */),
  "component---documents-the-platform-md": () => import("../../Documents/ThePlatform.md" /* webpackChunkName: "component---documents-the-platform-md" */),
  "component---documents-user-support-enviro-master-introduction-md": () => import("../../Documents/UserSupport_EnviroMaster_Introduction.md" /* webpackChunkName: "component---documents-user-support-enviro-master-introduction-md" */),
  "component---documents-enviro-master-dashboard-md": () => import("../../Documents/EnviroMaster_Dashboard.md" /* webpackChunkName: "component---documents-enviro-master-dashboard-md" */)
}

