import React from "react";
import Link, { withPrefix } from "gatsby-link";

export default ({ data, pathContext, location }) => {
  /*
  this path nonsense is bc we need the trailing slug from the url
  this is diff on PROD, bc github-pg has the repo name as the first url path /woz-u-instructional-materials
  */
  const cirriculumPath = location.pathname
    .split("/")
    .filter(x => x)
    .slice(-1)[0];
  /*
  Course-List will only list those courses relevant to the given
  cirriculum, based on the url path of pathContext.rootPath as it
  matches the course cirriculum in slug form
  */
  const matchingCourses = data.allMarkdownRemark.edges.filter(({ node }) => {
    return (
      node.fields.cirriculumPrefix === cirriculumPath &&
      node.frontmatter.type === `course`
    );
  });

  return (
    <table className="table table-striped">
      <tbody>
        {matchingCourses.map(({ node }) => (
          <tr key={node.id}>
            <td>
              <Link className="bracket-select" to={node.fields.slug}>
                {node.frontmatter.title}
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export const query = graphql`
  query courseQuery {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
            cirriculum
            type
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
