import { graphql } from 'gatsby';
import React from 'react';
import CoursePage from '../components/pages/CoursePage';

const courseMarkdownRemark = ({ frontmatter }) => ({
  title: frontmatter.title,
  timeline: frontmatter.timeline,
  description: frontmatter.description,
  shortDescription: frontmatter.shortDescription,
  outcomes: frontmatter.outcomes,
  slug: frontmatter.slug,
  image: frontmatter.image ? frontmatter.image.childImageSharp : null,
  path: frontmatter.path,
});

const CourseTemplate = ({ data }) => {
  //console.log(data);
  const { markdownRemark, allMarkdownRemark } = data;
  const course = courseMarkdownRemark(markdownRemark);
  const allCourses = allMarkdownRemark.edges.map((edge) =>
    courseMarkdownRemark(edge.node)
  );
  return <CoursePage course={course} otherCourses={allCourses} />;
};

export default CourseTemplate;

export const pageQuery = graphql`
  query CourseByPath($path: String!, $type: String!) {
    markdownRemark(fields: { path: { eq: $path } }) {
      fields {
        path
      }
      frontmatter {
        title
        timeline
        description
        outcomes
        slug
        videoUrl
        shortDescription
        image {
          childImageSharp {
            gatsbyImageData(
              placeholder: DOMINANT_COLOR
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
    }
    allMarkdownRemark(
      limit: 2000
      filter: {
        fields: {
          path: { ne: $path }
          type: { eq: $type }
          draft: { eq: false }
        }
      }
    ) {
      edges {
        node {
          fields {
            path
          }
          frontmatter {
            title
            timeline
            description
            shortDescription
            outcomes
            slug
            image {
              childImageSharp {
                gatsbyImageData(
                  placeholder: DOMINANT_COLOR
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
          }
        }
      }
    }
  }
`;
