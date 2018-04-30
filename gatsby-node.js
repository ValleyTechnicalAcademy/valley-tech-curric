/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const { createFilePath, createPages } = require(`gatsby-source-filesystem`);
const path = require(`path`);

exports.onCreateNode = ({ node, getNode, boundActionCreators }) => {
  const { createNodeField } = boundActionCreators;
  if (node.internal.type === `MarkdownRemark`) {
    const filePath = createFilePath({ node, getNode, basePath: `pages` });
    const nameFile = getNode(node.parent).name.toString();
    // const slug = slugify(node.frontmatter.cirriculum) + filePath;
    const cirriculumPrefixs = node.frontmatter.cirriculum.map(c => slugify(c));
    cirriculumPrefixs.forEach(cPrefix => {
      createNodeField({
        node,
        name: `cirriculumPrefix`,
        value: cPrefix
      });
    });
    createNodeField({
      node,
      name: `slug`,
      value: filePath
    });
    createNodeField({
      node,
      name: `nameFile`,
      value: nameFile
    });
  }
};

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark(filter: { frontmatter: { draft: { eq: false } } }) {
          edges {
            node {
              frontmatter {
                cirriculum
                type
                draft
                courseId
              }
              fields {
                nameFile
                slug
                cirriculumPrefix
              }
            }
          }
        }
      }
    `).then(result => {
      //remove any markdown that has draft set true
      const publishedResults = result.data.allMarkdownRemark.edges.filter(
        ({ node }) => !node.frontmatter.draft
      );
      /* 
      Creating a unquie list of Cirriculums from markdown courses building out  
      then create a 'landing page' for each using the provided template
      */
      const cirriculum = Array.from(
        new Set(
          publishedResults
            .map(x => x.node.frontmatter.cirriculum)
            .reduce((a, b) => a.concat(b))
        )
      );
      console.log(cirriculum);

      cirriculum.forEach(cirr => {
        createPage({
          path: slugify(cirr),
          component: path.resolve(`./src/templates/course-list.js`),
          context: {
            //Data Passed to context is available in page queries as GraphQL variables.
            // cirriculumPrefix: node.fields.cirriculumPrefix
          }
        });
      });

      publishedResults.forEach(({ node }) => {
        // const slug = slugify(node.frontmatter.cirriculum) + node.fields.slug;
        switch (node.frontmatter.type) {
          case "course":
            createPage({
              path: node.fields.slug,
              component: path.resolve(`./src/templates/course.js`),
              context: {
                //Data Passed to context is available in page queries as GraphQL variables.
                slug: node.fields.slug,
                courseId: node.frontmatter.courseId
              }
            });
            break;
          case "syllabus":
            createPage({
              path: node.fields.slug,
              component: path.resolve(`./src/templates/syllabus.js`),
              context: {
                //Data Passed to context is available in page queries as GraphQL variables.
                slug: node.fields.slug
              }
            });
            break;
          case "slide":
            createPage({
              path: node.fields.slug,
              component: path.resolve(`./src/templates/slide.js`),
              context: {
                //Data Passed to context is available in page queries as GraphQL variables.
                slug: node.fields.slug
              }
            });
        }
      });
      resolve();
    });
  });
};

const slugify = char =>
  char
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "");
