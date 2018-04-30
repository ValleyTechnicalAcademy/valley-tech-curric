import React from "react";

export default ({ data }) => {
  const syllabus = data.markdownRemark;
  return (
    <div className="syllabus">
      <h1>{syllabus.frontmatter.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: syllabus.html }} />
    </div>
  );
};

export const query = graphql`
  query syllabusQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      headings {
        depth
        value
      }
      frontmatter {
        title
      }
    }
  }
`;
