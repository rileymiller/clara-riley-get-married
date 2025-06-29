import { graphql, StaticQuery } from 'gatsby';
import { IGatsbyImageData } from 'gatsby-plugin-image';
import React from 'react';

import { css } from '@emotion/react';

import config from '../../website-config';

interface SiteNavLogoProps {
  logo?: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData;
    };
  };
}

const RSVPLogo = () => (
  <StaticQuery
    query={graphql`
      query RSVPOverlayLogo {
        logo: file(relativePath: { eq: "img/ghost-logo.png" }) {
          childImageSharp {
            # Specify the image processing specifications right in the query.
            # Makes it trivial to update as your page's design changes.
            gatsbyImageData(quality: 100, width: 500, layout: FIXED)
          }
        }
      }
    `}
    render={(data: SiteNavLogoProps) => {
      if (!data.logo) {
        return;
      }

      return (
        <img
          css={RSVPOverlayLogo}
          className="RSVP-overlay-logo"
          src={data.logo.childImageSharp.gatsbyImageData.images.fallback!.src}
          alt={config.title}
        />
      );
    }}
  />
);

const RSVPOverlayLogo = css`
  position: fixed;
  top: 23px;
  left: 30px;
  height: 30px;
`;

export default RSVPLogo;
