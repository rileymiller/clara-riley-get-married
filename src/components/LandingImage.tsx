import { graphql, StaticQuery } from 'gatsby';
import Img, { FluidObject, FixedObject } from 'gatsby-image';
import React from 'react';
import { maxSM } from '../styles/breakpoints';
import { css } from '@emotion/react';

import config from '../website-config';
import { bgColor, colors } from '../styles/colors';

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
  <div css={css`
    width: ${(props.width && props.width < maxSM) ? '100%' : '50%'};
    padding: .75rem;
    background-color: ${bgColor.tertiary};
    border-radius: .5rem;
    min-width: 300px;
    min-height: 300px;
    max-height: ${(props.width && props.width < maxSM) ? '450px' : '600px'};
  `}
  >

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
          // <div css={[css`
          // background-color: ${colors.royalty.blush};
          // `]}>
          <Img
            alt={config.title}
            style={{
              height: '100%',
              // width: (props.width && props.width < maxSM) ? '100%' : '50%',
              // minHeight: '300px',
              // minWidth: '300px',
              borderRadius: '.5rem',
              // maxHeight: (props.width && props.width < maxSM) ? '450px' : '600px',
              boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
            }}
            fluid={data.landingImage.childImageSharp.fluid}
          />
          // </div>
        );
      }}
    />
  </div>
);

export default LandingImage;

