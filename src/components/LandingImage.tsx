import { graphql, StaticQuery } from 'gatsby';
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image';
import React from 'react';
import { maxSM } from '../styles/breakpoints';
import { css } from '@emotion/react';

import config from '../website-config';
import { bgColor } from '../styles/colors';

interface LandingImageProps {
  landingImage?: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData;
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
              gatsbyImageData(quality: 100, layout: FULL_WIDTH)
            }
          }
        }
      `}
      render={(data: LandingImageProps) => {
        if (!data.landingImage) {
          return;
        }

        const image = getImage(data.landingImage);
        return (
          <GatsbyImage
            image={image!}
            alt={config.title}
            style={{
              height: '100%',
              borderRadius: '.5rem',
              boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
            }}
          />
        );
      }}
    />
  </div>
);

export default LandingImage;

