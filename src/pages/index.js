import { graphql } from 'gatsby';
import * as React from 'react';
import Home from '../components/pages/Home';

const IndexPage = ({ data }) => {
  const carouselItems = data.allCarouselJson.edges.map((edge) => edge.node);
  return <Home carouselItems={carouselItems} />;
};

export const pageQuery = graphql`
  query AllCarouselItems {
    allCarouselJson {
      edges {
        node {
          title
          subtitle
          desc
          buttontext
          image {
            childImageSharp {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid
              }
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
`;
export default IndexPage;
