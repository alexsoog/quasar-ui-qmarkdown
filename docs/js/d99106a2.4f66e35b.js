(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["d99106a2"],{2514:function(n,t,e){"use strict";var a=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",[e("section",{staticClass:"page-header"},[e("div",{staticClass:"donate"},[e("a",{attrs:{href:n.donateUrl,target:"_blank",title:"Donate"}},[e("i",{staticClass:"fas fa-heart",staticStyle:{color:"red"}})])]),e("div",{staticClass:"text-h1 project-name"},[n._v(n._s(n.title))]),e("div",{staticClass:"text-h2 project-tagline"},[n._v(n._s(n.tagline))]),e("q-btn",{staticClass:"btn",attrs:{type:"a",href:n.locationUrl,target:"_blank",label:"View on GitHub","no-caps":"",flat:""}}),e("q-btn",{staticClass:"btn",attrs:{to:"/docs",label:"Docs","no-caps":"",flat:""}}),e("q-btn",{staticClass:"btn",attrs:{to:"/examples",label:"Examples","no-caps":"",flat:""}}),e("q-btn",{staticClass:"btn",attrs:{to:"/demo",label:"Interactive Demo","no-caps":"",flat:""}}),e("q-btn",{staticClass:"btn",attrs:{type:"a",href:n.donateUrl,target:"_blank",label:"Donate","no-caps":"",flat:""}}),e("div",{staticClass:"row justify-evenly items-center q-ma-sm"},[e("div",{staticClass:"quasar"},[n._v(n._s(n.quasarDesc))]),e("div",{staticClass:"byline"},[n._v(n._s(n.byline)),e("a",{attrs:{href:n.bylineTwitter,target:"_blank",title:"Twitter"}},[e("i",{staticClass:"fab fa-twitter"})])])])],1),e("main",{staticClass:"flex flex-start justify-center inset-shadow"},[e("div",{staticClass:"q-pa-md col-12-sm col-8-md col-6-lg inset-shadow",staticStyle:{width:"100%",height:"3px"}}),e("div",{staticClass:"q-pa-md col-12-sm col-8-md col-6-lg shadow-1",staticStyle:{"max-width":"800px",width:"100%"}},[n._t("default")],2)])])},o=[],r={name:"Hero",data:function(){return{title:"QMarkdown",tagline:"Inline markdown for your Quasar App",byline:"Created and maintained by Jeff Galbraith",bylineTwitter:"https://twitter.com/jgalbraith64",quasarDesc:"A Quasar Framework Component and App Extension",locationUrl:"https://github.com/quasarframework/quasar-ui-qmarkdown",donateUrl:"https://github.com/sponsors/hawkeye64"}}},s=r,i=e("2877"),d=Object(i["a"])(s,a,o,!1,null,null,null);t["a"]=d.exports},"8b24":function(n,t,e){"use strict";e.r(t);var a=function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("hero",[e("q-markdown",{attrs:{src:n.markdown,toc:""},on:{data:n.onToc}}),e("json-api-viewer",{attrs:{title:"QMarkdown API",json:n.json}}),e("q-markdown",[n._v("\n# Donate\nIf you appreciate the work that went into this, please consider donating to [Quasar](https://donate.quasar.dev) or [Jeff](https://github.com/sponsors/hawkeye64).\n\n---\n\nThis page created with [QMarkdown](https://quasarframework.github.io/quasar-ui-qmarkdown), another great Quasar App Extension.\n    ")]),e("q-page-scroller",{attrs:{position:"bottom-right","scroll-offset":150,offset:[18,18]}},[e("q-btn",{class:{"text-black bg-grey-4":n.$q.dark.isActive,"text-white bg-primary":!n.$q.dark.isActive},attrs:{fab:"",icon:"keyboard_arrow_up"}})],1)],1)},o=[],r=e("2514"),s="QMarkdown\n===\n\nQMarkdown is a Quasar component as well as a [Quasar App Extension](https://v1.quasar.dev/app-extensions/introduction). It provides the ability for your Quasar app to display markdown. If you don't know how to use Markdown or need a refresher, this site is recommended: [Markdown Guide](https://www.markdownguide.org/).\n\n# Features\n\n## Markdown Constructs\n\n- Abbreviations\n- Blockquotes\n- Code and Code Highlighting\n- Containers\n- Definition Lists\n- Emojies\n- Emphasis\n- Footnotes\n- Headings\n- Images\n- Inserts\n- Links\n- Lists\n- Marks\n- Rules\n- Subscript/Superscript\n- Tables\n- Tasklists\n- Titles\n- Typography\n\n## Loaders\nThe loaders are only available if you installed via the QMarkdown App Extension.\n\n- markdown (.md) loader that can load your markdown as text to be processed by QMarkdown\n- vue+markdown (.vmd) loader that can process markdown, then hand off to Vue to be processed\n\n## Front-Matter\n- The front-matter functonality is only available to vue+markdown (`.vmd`) files.\n\n## Utility Functions\n- `getTagParts` that can process a Vue SFC file and return the `template`, `script` and `style` parts\n\n# Installation Types\n\n## Quasar CLI\n\n**App Extension**\n\n:::\n#### Install\n\nTo add as an App Extension to your Quasar application, run the following (in your Quasar app folder):\n```\nquasar ext add @quasar/qmarkdown\n```\n\n#### Uninstall\n\nTo remove as an App Extension from your Quasar application, run the following (in your Quasar app folder):\n```\nquasar ext remove @quasar/qmarkdown\n```\n\n#### Describe\nWhen installed as an App Extension, you can use `quasar describe QMarkdown`\n:::\n\n**OR**:\n\n:::\nCreate and register a boot file:\n\n```js\nimport Vue from 'vue'\nimport Plugin from '@quasar/quasar-ui-qmarkdown'\nimport '@quasar/quasar-ui-qmarkdown/dist/index.css'\n\nVue.use(Plugin)\n```\n:::\n\n**OR**:\n\n:::\n```html\n<style src=\"@quasar/quasar-ui-qmarkdown/dist/index.css\"></style>\n\n<script>\nimport { QMarkdown } from '@quasar/quasar-ui-qmarkdown'\n\nexport default {\n  components: {\n    QMarkdown\n  }\n}\n<\/script>\n```\n:::\n\n## Vue CLI project\n\n:::\n```js\nimport Vue from 'vue'\nimport Plugin from '@quasar/quasar-ui-qmarkdown'\nimport '@quasar/quasar-ui-qmarkdown/dist/index.css'\n\nVue.use(Plugin)\n```\n:::\n\n**OR**:\n\n:::\n```html\n<style src=\"@quasar/quasar-ui-qmarkdown/dist/index.css\"></style>\n\n<script>\nimport { QMarkdown } from '@quasar/quasar-ui-qmarkdown'\n\nexport default {\n  components: {\n    QMarkdown\n  }\n}\n<\/script>\n```\n:::\n\n## UMD variant\n\nExports `window.QMarkdown`.\n\nAdd the following tag(s) after the Quasar ones:\n\n:::\n```html\n<head>\n  \x3c!-- AFTER the Quasar stylesheet tags: --\x3e\n  <link href=\"https://cdn.jsdelivr.net/npm/@quasar/quasar-ui-qmarkdown/dist/index.min.css\" rel=\"stylesheet\" type=\"text/css\">\n</head>\n<body>\n  \x3c!-- at end of body, AFTER Quasar script(s): --\x3e\n  <script src=\"https://cdn.jsdelivr.net/npm/@quasar/quasar-ui-qmarkdown/dist/index.umd.min.js\"><\/script>\n</body>\n```\nIf you need the RTL variant of the CSS, then go for the following (instead of the above stylesheet link):\n```html\n<link href=\"https://cdn.jsdelivr.net/npm/@quasar/quasar-ui-qmarkdown/dist/index.rtl.min.css\" rel=\"stylesheet\" type=\"text/css\">\n```\n:::\n\n## Testing on Codepen\n[UMD Example on Codepen](https://codepen.io/Hawkeye64/pen/ExxzdMp?editors=1010)\n\n\n# Docs\nCan be found [here](https://quasarframework.github.io/quasar-ui-qmarkdown).\n\n# Examples\nCan be found [here](https://quasarframework.github.io/quasar-ui-qmarkdown/examples).\n\n# Interactive Demo\nCan be found [here](https://quasarframework.github.io/quasar-ui-qmarkdown/demo).\n\n# Demo (source) Project\nCan be found [here](https://github.com/quasarframework/quasar-ui-qmarkdown/tree/master/demo).\n\n---\n\n# Working with markdown\nThere are two way to pass your markdown content to QMarkdown: Vue slot or property.\n\nQMarkdown App Extension also comes with a Webpack loader that allows you to import your markdown directly into your code.\n\nYou have the ability to get the TOC (Table of Contents), if one is generated, and display that as well.\n\n## Using the property\nIt's as simple as:\n```html\n<q-markdown src=\":::\\nThis is a **test** of markdown\\n:::\"></q-markdown>\n```\n**Output**:\n\n:::\nThis is a **test** of markdown\n:::\n\n\n## Using a Vue slot\nYou can simply use a Vue slot to display markdown.\n\nIn your HTML:\n```html\n<q-markdown>\n:::\nPut your markdown here\n\nClassic markup: :wink: :joy: :cry: :angel: :heart: :beers: :laughing: :yum:\n\nShortcuts (emoticons): :-) :-( 8-) ;)\n:::\n</q-markdown>\n```\n**Output**:\n\n:::\nPut your markdown here\n\nClassic markup: :wink: :joy: :cry: :angel: :heart: :beers: :laughing: :yum:\n\nShortcuts (emoticons): :-) :-( 8-) ;)\n:::\n\nA couple of caveats to remember.\n\nAlways keep your markdown left justified. It does not have to line up with your HTML. This way, the markdown processor won't process it as a blockquote.\n\nIf you start getting weird linting errors, consider a markdown file and importing it.\n\n## Importing Markdown\nQMarkdown App Extesnion comes with a Webpack loader for importing markdown files directly into your code.\n\nIn your JavaScript:\n```js\nimport markdown from '../markdown/calendar.md'\n\nexport default {\n  data () {\n    return {\n      markdown: markdown\n    }\n  },\n...\n```\n\nAnd, in your HTML:\n```html\n<q-markdown :src=\"markdown\" />\n```\n\n# Setting up Table of Contents\nYou enable a TOC by setting `:toc=\"true\"`. The data in the TOC is based on HTML Headings (H1-H6). You can change the number of headings that you are interested in by using the `toc-start` and `toc-end` properties.\n\nTo get the data for the TOC, you must use the `@data` event.\n\nHTML\n```html\n<q-markdown :src=\"markdown\" toc @data=\"onToc\" />\n```\n\nJavaScript:\n```js\nmethods: {\n  onToc (toc) {\n    this.toc = toc\n  }\n}\n```\n\nThe TOC data looks like this:\n```\n[\n  {id: 'h2-Heading', title: 'h2 Heading', level: 2, children: []},\n  {id: 'h3-Heading', title: 'h3 Heading', level: 3, children: []}\n]\n```\n\nIf you desire a hierarchical tree of data instead, do the following:\n\nHTML\n```html\n<q-markdown ref=\"markdown\" :src=\"markdown\" toc @data=\"onToc\" />\n```\n\nJavaScript:\n```js\nmethods: {\n  onToc (toc) {\n    this.toc = this.$refs.markdown.makeTree(toc)\n  }\n}\n```\n\nThe TOC data will be transformed to the following:\n```\n[\n  {id: 'h2-Heading', title: 'h2 Heading', level: 2, children: [\n    {id: 'h3-Heading', title: 'h3 Heading', level: 3, children: []}\n  ]}\n\n]\n```\n\n# Importing Vue+Markdown (.vmd)\n\nYou are able to mix Vue (SFC: single-file component) and Markdown together. This must be in a file with an extension of `.vmd` (vue+markdown). The markdown can only reside in the `<template>` section of the Vue SFC file.\n\nThe minimal viable `.vmd` file must contain a `<template>` section. All other sections are optional.\n\nExample:\n\n```html\n<template>\n  <div class=\"q-pa-md q-gutter-sm q-markdown\">\n\nQMarkdown\n===\n\nQMarkdown is a [Quasar App Extension](https://v1.quasar.dev/app-extensions/introduction). It provides the ability for your web app to display markdown.\n\n# Features\n... // the rest of the markdown\n</template>\n```\n\nAs you may have noticed, your HTML code should add the `q-markdown` class to the wrapper html in order to get all proper syntax highlighting.\n\nNow, as far as getting it to be displayed on your page, do the following in your `<script>` section:\n\n```js\nimport markdownVue from '../markdown/markdown.vmd'\n\nexport default {\n\n  components: {\n    markdownVue\n  },\n\n```\n\nand in your HTML `<template>` section:\n\n```html\n<template>\n  <markdown-vue />\n</template>\n```\n\n## TOC with Vue+Markdown\n\nIf you would like to generate a TOC (Table of Contents) derived from the header components (h1, h2, h3, etc), you will need to add some code to your `.vmd` file so it can be accepted. Just add the following to your `data ()` instance in the `.vmd`:\n\n```\n  data () {\n    return {\n      // eslint-disable-next-line\n      tocData: []\n    }\n  },\n```\n\nThe Vue+Markdown (`.vmd`) loader will replace the `tocData: []`, if found, and add the TOC data.\n\n::: warning\nNotice the commented line `eslint-disable-next-line`? The data added is not formatted and eslint will complain during compilation time. If you use something other than eslint, you may need to add an appropriate **ignore** statement for your linter.\n:::\n\nFinally, if your TOC data is used elsewhere, like the right-drawer in these docs, you need a way of getting it there and if you are using a Vuex store, this is relative easy:\n\n```\n  mounted () {\n    this.toc = this.tocData\n  },\n\n  computed: {\n    toc:\n    {\n      get () {\n        return this.$store.state.common.toc\n      },\n      set (toc) {\n        this.$store.commit('common/toc', toc)\n      }\n    }\n  }\n```\n\n## Vue+Markdown Issues\nSo far, a couple of issues have been found.\n1. When using `-` over multiple rows for an unorder list, the markdown processor sometimes is not putting in the end `</ul>` tag which causes an issue with Vue transpiling. You can make this an ordered list with `1.` notation.\n2. When using text interpolation, better known as moustache or handle bars, the Vue Loader sees these in the markdown and tries to do substitution which will cause Vue Loader to complain that the variable does not exist. You can fix this, by taking the text from the interpolation and use the `v-text=\"my text\"` instead (like a `span` tag).\n\n## Vue+Markdown Comments\nVue+Markdown is experimental. There are a few other authors doing it, like **Vue Press** and **Sable**, as well as the **Quasar Documentation**. However, none of them are using a `.vmd` extension. This was used to distinguish `vue+markdown` from regular markdown. As such, your favorite editor may not have syntax highlighting that works with `.vmd` files. Hopefully, in the future, this will be resolved.\n\n# Front-Matter with Vue+Markdown\nFront-Matter is a way of extracting meta data from the beginning of a file and converting it to object format. The format for Front-Matter is in YAML format.\n\n::: tip\nAll Front-Matter meta data defined in your .vmd file **must** be at the top of the file.\n:::\n\nAn example of Front-Matter YAML:\n\n```yaml\n---\ntitle: QMarkdown Docs\ndesc: This is the documentation for QMarkdown\n---\n```\n\nThis will be converted to:\n\n```js\n{\n  title: \"QMarkdown Docs\",\n  desc: \"This is the documentation for QMarkdown\"\n}\n```\n\nThis is injected into your Vue data by having the following:\n\n```js\n  data () {\n    return {\n      // eslint-disable-next-line\n      frontMatter: {}\n    }\n  },\n```\n\nThe Vue+Markdown (`.vmd`) loader will replace the `frontMatter: {}`, if found, and add the Front-Matter data.\n\n::: warning\nNotice the commented line `eslint-disable-next-line`? The data added is not formatted and eslint will complain during compilation time. If you use something other than eslint, you may need to add an appropriate **ignore** statement for your linter.\n:::\n\nFinally, you can use the Front-Matter data like this:\n\n```js\n  mounted () {\n    document.title = this.frontMatter.title\n  },\n```\n\n# Extracting Vue SFC parts\nAdditionally, QMarkdown comes with a utility function to extract SFC files into their tag parts (where tag is one of `template`, `script` and `style`). To import, do the following:\n\n```js\nimport { getTagParts } from '@quasar/quasar-ui-qmarkdown'\n```\n\nAnd then, you can use it like this:\n\n```\n  mounted () {\n    // eslint-disable-next-line import/no-webpack-loader-syntax\n    const results = getTagParts(require('!!raw-loader!../components/Hero.vue').default)\n\n    console.log('template', results.template)\n    console.log('script', results.script)\n    console.log('css', results.css)\n  },\n```\n\nThis makes use of the `raw-loader` Webpack loader. The exclamations (or bang characters) are needed to tell Webpack to overload the default loader.\n\n::: tip\n`raw-loader` is already loaded via QMarkdown App Extension and you do not need to install it. If you do not install via the App extension, just include `raw-loaded` in your `devDependencies`.\n:::\n\nNow, you will have access to the tag parts of the Vue file.\n\n# Extending\n\n## Extending Markdown-it!\nYou can use the `extend` property to extend the Markdown-it! markdown processor. The extend function takes a single argument of the md (markdown) instance.\n\nNow, you can extend QMarkdown with either your own code or Markdown-it! [plugins](https://www.npmjs.com/search?q=keywords:markdown-it-plugin). Please read the Markdown-It [documentation](https://github.com/markdown-it/markdown-it#readme) on how to do this.\n\nSyntax:\n\n```html\n<q-markdown :extend=\"extendMarkdown\" />\n```\n\n```js\nmethods: {\n  // to extend links\n  extendMarkdown (md) {\n    md.renderer.rules.link_open = (tokens, idx, options, env, self) => {\n      const token = tokens[idx]\n\n      const hrefIndex = token.attrIndex('href')\n      if (token.attrs[hrefIndex][1][0] === '/') {\n        token.attrSet('class', 'q-markdown--link q-markdown--link-local')\n      } else {\n        token.attrSet('class', 'q-markdown--link q-markdown--link-external')\n        token.attrSet('target', '_blank')\n      }\n\n      return self.renderToken(tokens, idx, options)\n    }\n  }\n}\n```\n\n## Extend the Code Highlighting\nQMarkdown uses **Prism** for code highlighting. You can use the `extendPrism` property with a function.\n\nSyntax:\n\n```html\n<q-markdown :extendPrism=\"extendPrism\" />\n```\n\n```js\nmethods: {\n  // to extend Prism\n  extendPrism (Prism) {\n    // this uses the 'autoloader' plugin\n    // https://prismjs.com/plugins/autoloader/\n    Prism.plugins.autoloader.languages_path = 'path/to/grammars/'\n  }\n}\n```\n",i=e("161b"),d={name:"PageIndex",components:{Hero:r["a"]},data:function(){return{markdown:s,json:i}},computed:{toc:{get:function(){return this.$store.state.common.toc},set:function(n){this.$store.commit("common/toc",n)}}},methods:{onToc:function(n){n.push({id:"QMarkdown-API",label:"QMarkdown API",level:1,children:Array(0)}),n.push({id:"Donate",label:"Donate",level:1,children:Array(0)}),this.toc=n}}},l=d,u=e("2877"),m=Object(u["a"])(l,a,o,!1,null,null,null);t["default"]=m.exports}}]);