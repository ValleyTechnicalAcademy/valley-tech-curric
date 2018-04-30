import React from "react";
import { withPrefix } from "gatsby-link";

let stylesStr;
let remark;
if (process.env.NODE_ENV === `production`) {
  try {
    stylesStr = require(`!raw-loader!../public/styles.css`);
    remark = withPrefix("./remark.js");
  } catch (e) {
    console.log(e);
  }
}

if (process.env.NODE_ENV === `production`) {
  remark = withPrefix("/remark.js");
} else {
  remark = "/remark.js";
}

module.exports = class HTML extends React.Component {
  render() {
    let css;
    if (process.env.NODE_ENV === `production`) {
      css = (
        <style
          id="gatsby-inlined-css"
          dangerouslySetInnerHTML={{ __html: stylesStr }}
        />
      );
    }
    return (
      <html {...this.props.htmlAttributes}>
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          <link
            rel="icon"
            type="image/png"
            href={withPrefix("./images/favicon-16x16.png")}
          />
          {this.props.headComponents}
          {css}
        </head>
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <div
            key={`body`}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          <script src={remark} />
          {this.props.postBodyComponents}
        </body>
      </html>
    );
  }
};
