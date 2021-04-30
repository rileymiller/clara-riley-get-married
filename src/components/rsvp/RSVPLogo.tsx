import { graphql, StaticQuery } from 'gatsby';
import { FixedObject } from 'gatsby-image';
import React from 'react';

import { css } from '@emotion/react';

import config from '../../website-config';

interface SiteNavLogoProps {
  logo?: {
    childImageSharp: {
      fixed: FixedObject;
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
            fixed(quality: 100 width: 500) {
              ...GatsbyImageSharpFixed
            }
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
          src={data.logo.childImageSharp.fixed.src}
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
