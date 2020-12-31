import { graphql, StaticQuery } from 'gatsby';
import Img, { FluidObject, FixedObject } from 'gatsby-image';
import React from 'react';
import { maxSM } from '../styles/breakpoints';

import config from '../website-config';

interface LandingImageProps {
  landingImage?: {
    childImageSharp: {
      fluid: FluidObject;
    };
  };
}

type Props = {
  width?: number
};

const LandingImage = (props: Props) => (
  <StaticQuery
    query={graphql`
      query LandingImage {
        landingImage: file(relativePath: { eq: "img/rc_landing.jpg" }) {
          childImageSharp {
            # Specify the image processing specifications right in the query.
            # Makes it trivial to update as your page's design changes.
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    `}
    render={(data: LandingImageProps) => {
      if (!data.landingImage) {
        return;
      }

      return (
        // <img
        //   css={LandingImageOverlayLogo}
        //   className="landing-image-overlay"
        //   src={data.landingImage.childImageSharp.fixed.src}
        //   alt={config.title}
        // />
        <Img
          alt={config.title}
          style={{
            height: '100%',
            width: (props.width && props.width < maxSM) ? '100%' : '50%',
            minHeight: '300px',
            minWidth: '300px',
            borderRadius: '.5rem',
            maxHeight: (props.width && props.width < maxSM) ? '450px' : '600px',
          }}
          fluid={data.landingImage.childImageSharp.fluid}
        />
      );
    }}
  />
);

export default LandingImage;

