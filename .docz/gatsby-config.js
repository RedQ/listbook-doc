const { mergeWith } = require('docz-utils')
const fs = require('fs-extra')

let custom = {}
const hasGatsbyConfig = fs.existsSync('./gatsby-config.custom.js')

if (hasGatsbyConfig) {
  try {
    custom = require('./gatsby-config.custom')
  } catch (err) {
    console.error(
      `Failed to load your gatsby-config.js file : `,
      JSON.stringify(err),
    )
  }
}

const config = {
  pathPrefix: '/',

  siteMetadata: {
    title: 'RnB Extra Product Options Documentation',
    description:
      "It's an extension of RnB and WooCommerce plugins. It allows to add more fields in booking form.",
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-typescript',
      options: {
        isTSX: true,
        allExtensions: true,
      },
    },
    {
      resolve: 'gatsby-theme-docz',
      options: {
        themeConfig: {},
        src: './',
        gatsbyRoot: null,
        themesDir: 'src',
        mdxExtensions: ['.md', '.mdx'],
        docgenConfig: {},
        menu: [
          'Welcome',
          'Installation',
          'Features',
          {
            name: 'Extra Fields',
            menu: [
              'Text Field',
              'Textarea Field',
              'Date Field',
              'Number Field',
              'Color Field',
              'Checkbox Field',
              'Select Field',
              'Multi Select Field',
              'Radio Field',
            ],
          },
          'Step By Step Discussion',
          'FAQ',
          'Support',
          'Changelog',
        ],
        mdPlugins: [],
        hastPlugins: [],
        ignore: ['README.md'],
        typescript: true,
        ts: false,
        propsParser: true,
        'props-parser': true,
        debug: false,
        native: false,
        openBrowser: null,
        o: null,
        open: null,
        'open-browser': null,
        p: 3005,
        port: 3005,
        root:
          '/Users/mdnayeemfarid/Local Sites/listbook/app/public/wp-content/plugins/listbook-doc/.docz',
        base: '/',
        source: './',
        'gatsby-root': null,
        files: '**/*.{md,markdown,mdx}',
        public: '/public',
        dest: '.docz/dist',
        d: '.docz/dist',
        editBranch: 'master',
        eb: 'master',
        'edit-branch': 'master',
        config: '',
        title: 'RnB Extra Product Options Documentation',
        description:
          "It's an extension of RnB and WooCommerce plugins. It allows to add more fields in booking form.",
        host: 'localhost',
        separator: '-',
        paths: {
          root:
            '/Users/mdnayeemfarid/Local Sites/listbook/app/public/wp-content/plugins/listbook-doc',
          templates:
            '/Users/mdnayeemfarid/Local Sites/listbook/app/public/wp-content/plugins/listbook-doc/node_modules/docz-core/dist/templates',
          docz:
            '/Users/mdnayeemfarid/Local Sites/listbook/app/public/wp-content/plugins/listbook-doc/.docz',
          cache:
            '/Users/mdnayeemfarid/Local Sites/listbook/app/public/wp-content/plugins/listbook-doc/.docz/.cache',
          app:
            '/Users/mdnayeemfarid/Local Sites/listbook/app/public/wp-content/plugins/listbook-doc/.docz/app',
          appPackageJson:
            '/Users/mdnayeemfarid/Local Sites/listbook/app/public/wp-content/plugins/listbook-doc/package.json',
          appTsConfig:
            '/Users/mdnayeemfarid/Local Sites/listbook/app/public/wp-content/plugins/listbook-doc/tsconfig.json',
          gatsbyConfig:
            '/Users/mdnayeemfarid/Local Sites/listbook/app/public/wp-content/plugins/listbook-doc/gatsby-config.js',
          gatsbyBrowser:
            '/Users/mdnayeemfarid/Local Sites/listbook/app/public/wp-content/plugins/listbook-doc/gatsby-browser.js',
          gatsbyNode:
            '/Users/mdnayeemfarid/Local Sites/listbook/app/public/wp-content/plugins/listbook-doc/gatsby-node.js',
          gatsbySSR:
            '/Users/mdnayeemfarid/Local Sites/listbook/app/public/wp-content/plugins/listbook-doc/gatsby-ssr.js',
          importsJs:
            '/Users/mdnayeemfarid/Local Sites/listbook/app/public/wp-content/plugins/listbook-doc/.docz/app/imports.js',
          rootJs:
            '/Users/mdnayeemfarid/Local Sites/listbook/app/public/wp-content/plugins/listbook-doc/.docz/app/root.jsx',
          indexJs:
            '/Users/mdnayeemfarid/Local Sites/listbook/app/public/wp-content/plugins/listbook-doc/.docz/app/index.jsx',
          indexHtml:
            '/Users/mdnayeemfarid/Local Sites/listbook/app/public/wp-content/plugins/listbook-doc/.docz/app/index.html',
          db:
            '/Users/mdnayeemfarid/Local Sites/listbook/app/public/wp-content/plugins/listbook-doc/.docz/app/db.json',
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
