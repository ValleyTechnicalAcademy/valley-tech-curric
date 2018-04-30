import React, { Component } from "react";
import Link from "gatsby-link";
import "./slide.css";

export default class Slide extends Component {
  //capture markdown content from slide node
  slideMarkdown = stripYAMLConfig(
    this.props.data.allMarkdownRemark.edges[0].node.internal.content
  );
  componentDidMount() {
    const slideshow = remark.create({
      ratio: "16:9"
    });
  }
  render() {
    console.log(this.slideMarkdown);
    return <textarea id="source" defaultValue={this.slideMarkdown} />;
  }
}

/*
We need to strip the YAML config from the top 
any slide file so the slide presents slide 1, and not the config stuff
*/
const stripYAMLConfig = markdown =>
  markdown
    .split("---")
    .filter((element, index) => index > 1)
    .join("---");

export const query = graphql`
  query SlideQuery($slug: String!) {
    allMarkdownRemark(filter: { fields: { slug: { eq: $slug } } }) {
      edges {
        node {
          html
          internal {
            content
          }

          fields {
            slug
          }
        }
      }
    }
  }
`;
