import { graphql, StaticQuery } from 'gatsby';
import Img, { FixedObject, FluidObject } from 'gatsby-image';
import React, { useEffect, useState } from 'react';
import { useWindowSize } from '../hooks/useWindowSize';
import { Helmet } from 'react-helmet';

import { css } from '@emotion/react';
import SiteNav from '../components/header/SiteNav';

import "@fontsource/clicker-script";
import "@fontsource/raleway";
import { RCLogo } from '../components/RCLogo';
import LandingImage from '../components/LandingImage';
import { Footer } from '../components/Footer';
import { Wrapper } from '../components/Wrapper';
import IndexLayout from '../layouts';
import {
  inner,
  outer,
  flexColumn,
  flexRow,
  flexCenter,
  flexSpaceEvenly,
  flexStart,
} from '../styles/shared';
import config from '../website-config';
import { bgColor, colors, textColor } from '../styles/colors';
import { darken, lighten } from 'polished';
import { bpMaxSM, bpMaxXS, maxSM, maxXS } from '../styles/breakpoints';
import styled from '@emotion/styled';
// import { SaveTheDateHeader } from '../components/header/SaveTheDateHeader';

export interface IndexProps {
  pageContext: {
    currentPage: number;
    numPages: number;
  };
  data: {
    logo: {
      childImageSharp: {
        fixed: FixedObject;
      };
    };
    header: {
      childImageSharp: {
        fixed: FixedObject;
      };
    };
    beach: {
      childImageSharp: {
        fluid: FluidObject;
      };
    };
  };
}

export const SiteMain = css`
  flex-grow: 1;
  flex-direction: column;
  display: flex;
  align-items: center;
  /* background-color: ${lighten(`0.05`, bgColor.primary)}; */
  background-color: ${bgColor.primary};
  @media (prefers-color-scheme: dark) {
  }
`;

export const Meta = (props: IndexProps) => {
  const { width, height } = props.data.header.childImageSharp.fixed;
  return (
    <Helmet>
      <html lang={config.lang} />
      <title>{config.title}</title>
      <meta name="description" content={config.description} />
      <meta property="og:site_name" content={config.title} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={config.title} />
      <meta property="og:description" content={config.description} />
      <meta property="og:url" content={config.siteUrl} />
      <meta
        property="og:image"
        content={`${config.siteUrl}${props.data.header.childImageSharp.fixed.src}`}
      />
      {config.facebook && <meta property="article:publisher" content={config.facebook} />}
      {config.googleSiteVerification && (
        <meta name="google-site-verification" content={config.googleSiteVerification} />
      )}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={config.title} />
      <meta name="twitter:description" content={config.description} />
      <meta name="twitter:url" content={config.siteUrl} />
      <meta
        name="twitter:image"
        content={`${config.siteUrl}${props.data.header.childImageSharp.fixed.src}`}
      />
      {config.twitter && (
        <meta
          name="twitter:site"
          content={`@${config.twitter.split('https://twitter.com/')[1]}`}
        />
      )}
      <meta property="og:image:width" content={width.toString()} />
      <meta property="og:image:height" content={height.toString()} />
    </Helmet>
  );
};

export const SaveTheDateHeader = styled.h1`
  color: ${textColor.primary};
  justify-content: center;
  font-family: "Clicker Script";
  display: flex;
  font-size: 10rem;
  font-weight: 500;
  align-items: center;
  margin-bottom: 0;
  ${bpMaxSM} {
  font-size: 10rem;
  }
  ${bpMaxXS} {
  font-size: 6.34rem;
  }
`;

// const BeachBackground = () => {
//   return (
//     <StaticQuery
//       query={graphql`
//     query HomeImage {
//       # beachImage: file(relativePath: { eq: "img/rc_landing.jpg" }) {
//         childImageSharp {
//           # Specify the image processing specifications right in the query.
//           # Makes it trivial to update as your page's design changes.
//           fluid(quality: 100) {
//             ...GatsbyImageSharpFluid
//           }
//         }
//       }
//     }
//   `}
//       render={(data: any) => {
//         if (!data.beachImage) {
//           return;
//         }

//         return (
//           <Img
//             alt={config.title}
//             style={{
//               height: '100%',
//               borderRadius: '.5rem',
//               boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
//             }}
//             fluid={data.beachImage.childImageSharp.fluid}
//           />
//         );
//       }}
//     />
//   );
// };

const IndexPage: React.FC<IndexProps> = props => {
  const size = useWindowSize();

  return (
    <IndexLayout>
      <Meta {...props} />
      <Wrapper>
        <SiteNav isHome />
        <main id="site-main" css={[SiteMain, outer]}>
          <div css={[inner, flexColumn, flexSpaceEvenly]} >
            <div css={[flexRow, flexCenter]}>

              <SaveTheDateHeader>Riley & Clara</SaveTheDateHeader>
              {/* <SaveTheDateHeader width={size.width} height={size.height} fill={textColor.primary} /> */}
            </div>
            <div css={[flexRow]} >
              <Img
                alt={config.title}
                style={{
                  height: '100%',
                  innerWidth: '100%',
                  borderRadius: '.5rem',
                  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                }}
                fluid={props.data.beach.childImageSharp.fluid}
              />
            </div>
            <div css={css`display: flex; align-self: center;`}>
              Time to Build 🚧
            </div>
            {/* <div css={[flexRow, css`
              ${bpMaxSM} {
                justify-content: center;
                flex-wrap: wrap-reverse;
              }
              justify-content: space-evenly;
              margin-bottom: 3.3rem;
            `]}
            <di
            >
              <LandingImage width={size.width} />
              <SaveTheDateInfo size={size} />
            </div> */}
          </div>
        </main>
        <Footer />
      </Wrapper>
    </IndexLayout >
  );
};

export const pageQuery = graphql`
  query blogPageQuery($skip: Int!, $limit: Int!) {
          logo: file(relativePath: {eq: "img/ghost-logo.png" }) {
          childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    }
    header: file(relativePath: {eq: "img/rc_header.png" }) {
          childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 2000, quality: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    beach: file(relativePath: {eq: "img/beach.jpg" }) {
        childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fluid(quality: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    allMarkdownRemark(
      sort: {fields: [frontmatter___date], order: DESC }
      filter: {frontmatter: {draft: {ne: true } } }
      limit: $limit
      skip: $skip
    ) {
          edges {
          node {
          timeToRead
          frontmatter {
          title
            date
            tags
            draft
            excerpt
            image {
          childImageSharp {
          fluid(maxWidth: 3720) {
          ...GatsbyImageSharpFluid
        }
              }
            }
            author {
          id
              bio
              avatar {
          children {
          ...on ImageSharp {
          fluid(quality: 100, srcSetBreakpoints: [40, 80, 120]) {
          ...GatsbyImageSharpFluid
        }
                  }
                }
              }
            }
          }
          excerpt
          fields {
          layout
            slug
          }
        }
      }
    }
  }
`;

export default IndexPage;
