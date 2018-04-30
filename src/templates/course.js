import React from "react";
import Link from "gatsby-link";

export default ({ data, location }) => {
  const course = data.markdownRemark;

  /*
  Slide-List will only list those slides relevant to the given
  course, based on the slide type && the slide courseId matching the page's courseId
  */
  const matchingSlides = data.allMarkdownRemark.edges.filter(
    ({ node }) =>
      node.frontmatter.type === `slide` &&
      course.frontmatter.courseId === node.frontmatter.courseId
  );
  return (
    <div>
      <h1>{course.frontmatter.title}</h1>
      <div className="course-item-container">
        <div className="course-content">
          <Link className="bracket-select" to={`${course.fields.slug}syllabus`}>
            Syllabus
          </Link>
        </div>
        <div className="course-content">
          <div className="slide-title">Slides</div>

          {matchingSlides.map(({ node }) => {
            return (
              <li className="slides-list" key={node.id}>
                <Link
                  className="bracket-select"
                  to={node.fields.slug}
                  target="_blank"
                >
                  {node.frontmatter.title}
                </Link>
              </li>
            );
          })}
        </div>
      </div>
      <div dangerouslySetInnerHTML={{ __html: course.html }} />
    </div>
  );
};

export const queryCourseDetails = graphql`
  query CourseQuery($courseId: String!, $slug: String) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        cirriculum
        type
        courseId
      }
      fields {
        slug
      }
    }
    allMarkdownRemark(
      filter: { frontmatter: { courseId: { eq: $courseId } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            courseId
            type
            title
          }
          fields {
            slug
            cirriculumPrefix
          }
        }
      }
    }
  }
`;

const slugify = char =>
  char
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "");
