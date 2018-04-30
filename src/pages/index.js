import React from "react";
import Link from "gatsby-link";

export default ({ data }) => {
  //Creating a unquie list of Cirriculums from markdown courses
  const cirriculum = Array.from(
    new Set(
      data.allMarkdownRemark.edges
        .map(x => x.node.frontmatter.cirriculum)
        .reduce((a, b) => a.concat(b))
    )
  );
  return (
    <table className="table table-striped">
      <tbody>
        {cirriculum.map((cir, index) => (
          <tr key={index}>
            <td>
              <Link className="bracket-select" to={`/${slugify(cir)}/`}>
                {cir}
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export const query = graphql`
  query IndexQuery {
    allMarkdownRemark(filter: { frontmatter: { draft: { eq: false } } }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            cirriculum
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
