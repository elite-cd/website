import { graphql } from 'gatsby';
import * as React from 'react';
import Home from '../components/pages/Home';

const IndexPage = ({ data }) => {
  const carouselItems = data.allCarouselJson.edges.map((edge) => edge.node);
  const courses = data.courses.edges.map((edge) => edge.node.frontmatter);
  console.log('courses: ', courses);
  return <Home carouselItems={carouselItems} courses={courses} />;
};

export const pageQuery = graphql`
  query {
    allCarouselJson {
      edges {
        node {
          title
          subtitle
          desc
          buttontext
          buttonUrl
          students
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
    courses: allMarkdownRemark(limit: 10) {
      edges {
        node {
          frontmatter {
            title
            timeline
            description
            outcomes
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
export default IndexPage;
