webpackJsonp([0x5fde12801563],{240:function(e,t,a){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.query=void 0;var l=a(3),n=r(l),u=a(48),d=r(u);t.default=function(e){var t=e.data,a=(e.pathContext,e.location),r=a.pathname.split("/").filter(function(e){return e}).slice(-1)[0],l=t.allMarkdownRemark.edges.filter(function(e){var t=e.node;return t.fields.cirriculumPrefix===r&&"course"===t.frontmatter.type});return n.default.createElement("table",{className:"table table-striped"},n.default.createElement("tbody",null,l.map(function(e){var t=e.node;return n.default.createElement("tr",{key:t.id},n.default.createElement("td",null,n.default.createElement(d.default,{className:"bracket-select",to:t.fields.slug},t.frontmatter.title)))})))};t.query="** extracted graphql fragment **"}});
//# sourceMappingURL=component---src-templates-course-list-js-85e9e3b7054b2f72d5ab.js.map