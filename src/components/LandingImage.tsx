import { graphql, StaticQuery } from 'gatsby';
import { FixedObject } from 'gatsby-image';
import React from 'react';

import { css } from '@emotion/react';

import config from '../website-config';

interface LandingImageProps {
  landingImage?: {
    childImageSharp: {
      fixed: FixedObject;
    };
  };
}

const LandingImage = () => (
  <StaticQuery
    query={graphql`
      query LandingImage {
        logo: file(relativePath: { eq: "img/rc_landing.png" }) {
          childImageSharp {
            # Specify the image processing specifications right in the query.
            # Makes it trivial to update as your page's design changes.
            fixed(quality: 100 width: 500) {
              ...GatsbyImageSharpFixed
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
        <img
          css={LandingImageOverlayLogo}
          className="landing-image-overlay"
          src={data.landingImage.childImageSharp.fixed.src}
          alt={config.title}
        />
      );
    }}
  />
);

const LandingImageOverlayLogo = css`
  position: fixed;
  top: 23px;
  left: 30px;
  height: 30px;
`;

export default LandingImage;

