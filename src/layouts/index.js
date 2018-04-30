import React, { Component } from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import "prismjs/themes/prism-solarizedlight.css";
import "./index.css";

import Header from "../components/Header";

class TemplateWrapper extends Component {
  render() {
    const { children, location } = this.props;
    return (
      <div>
        <Helmet
          title="woz-u"
          meta={[
            { name: "description", content: "instructional content" },
            {
              name: "keywords",
              content: "instruction, slides, courses, syllabus"
            }
          ]}
        />
        {/*Removing the Header when there is a slide deck present */}
        {!location.pathname.match("slides") && <Header />}
        <div
          style={{
            margin: "0 auto",
            maxWidth: 960,
            padding: "0px 1.0875rem 1.45rem",
            paddingTop: 0
          }}
        >
          {children()}
        </div>
      </div>
    );
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
