const { mergeWith } = require('lodash/fp')

let custom
try {
  custom = require('./gatsby-config.custom')
} catch (err) {
  custom = {}
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: 'Klappir Learn',
    description: 'Documentation for Klappir platforms',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {
          fonts: {
            body:
              'Inter, Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif',
            heading:
              'Inter, Open Sans, Helvetica Neue, Helvetica, Arial, sans-serif',
          },
        },
        themesDir: 'src',
        docgenConfig: {},
        menu: [
          { name: 'Klappir' },
          { name: 'The Klappir Platform' },
          { name: 'EnviroMaster' },
        ],
        mdPlugins: [],
        hastPlugins: [],
        ignore: ['README.md'],
        typescript: false,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: false,
        o: false,
        open: false,
        'open-browser': false,
        root: '/Users/hjalti/klappir_learn/.docz',
        base: '/',
        source: './',
        src: './',
        files: '**/*.{md,markdown,mdx}',
        public: '/public',
        dest: '/docs',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'Klappir Learn',
        description: 'Documentation for Klappir platforms',
        host: 'localhost',
        port: 3000,
        p: 3000,
        separator: '-',
        paths: {
          root: '/Users/hjalti/klappir_learn',
          templates:
            '/Users/hjalti/klappir_learn/node_modules/docz-core/dist/templates',
          docz: '/Users/hjalti/klappir_learn/.docz',
          cache: '/Users/hjalti/klappir_learn/.docz/.cache',
          app: '/Users/hjalti/klappir_learn/.docz/app',
          appPackageJson: '/Users/hjalti/klappir_learn/package.json',
          gatsbyConfig: '/Users/hjalti/klappir_learn/gatsby-config.js',
          gatsbyBrowser: '/Users/hjalti/klappir_learn/gatsby-browser.js',
          gatsbyNode: '/Users/hjalti/klappir_learn/gatsby-node.js',
          gatsbySSR: '/Users/hjalti/klappir_learn/gatsby-ssr.js',
          importsJs: '/Users/hjalti/klappir_learn/.docz/app/imports.js',
          rootJs: '/Users/hjalti/klappir_learn/.docz/app/root.jsx',
          indexJs: '/Users/hjalti/klappir_learn/.docz/app/index.jsx',
          indexHtml: '/Users/hjalti/klappir_learn/.docz/app/index.html',
          db: '/Users/hjalti/klappir_learn/.docz/app/db.json',
        },
      },
    },
  ],
}

const merge = mergeWith((objValue, srcValue) => {
  if (Array.isArray(objValue)) {
    return objValue.concat(srcValue)
  }
})

module.exports = merge(config, custom)
