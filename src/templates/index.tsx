import { graphql, Link } from 'gatsby';
import Img, { FixedObject, FluidObject } from 'gatsby-image';
import { StaticImage } from 'gatsby-plugin-image';

import React, { useEffect, useState } from 'react';
import { useWindowSize } from '../hooks/useWindowSize';
import { Helmet } from 'react-helmet';
import { Sparkles } from '../components/sparkle/Sparkles';
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
  flexAlignMiddle,
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
  justify-content: flex-start;
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

const daysTillWedding = () => {
  const today = new Date();
  const weddingDate = new Date(today.getFullYear(), 5, 19);

  if (today.getMonth() === 5 && today.getDate() > 19) {
    return `0`;
  }

  const oneDaySeconds = 1000 * 60 * 60 * 24;

  return Math.ceil((weddingDate.getTime() - today.getTime()) / (oneDaySeconds));
};

const IndexPage: React.FC<IndexProps> = props => {
  const size = useWindowSize();

  return (
    <IndexLayout>
      <Meta {...props} />
      <Wrapper>
        <SiteNav />

        <main id="site-main" css={[SiteMain, outer, css`display:flex;justify-content:center;`]}>
          <div css={[flexColumn, flexCenter, flexAlignMiddle]} >
            <div css={[flexRow, flexCenter]}>

              <SaveTheDateHeader>Riley &#38; Clara</SaveTheDateHeader>
              {/* <SaveTheDateHeader width={size.width} height={size.height} fill={textColor.primary} /> */}
            </div>
            <h3 css={css`text-align: center; color: rgba(255, 255, 255, 0.75);`}>
              Saturday, June 19 at 6:30pm | The Pines at Genesee
            </h3>
            <Sparkles>
              <h2 css={css`color: ${colors.royalty.pink};`}>
                {`${daysTillWedding()} days until the wedding!`}
              </h2>
            </Sparkles>
            <div css={css`background-color: ${colors.royalty.ivory}; border-radius: 1rem; text-align: center; margin-top: 1.5rem; font-size: 1.8rem;`}>
              <ul css={css`margin-bottom: 0; list-style: none;`}>
                <li>
                  See our new <Link to="/registry">Registry</Link> page!
                </li>
                <li>
                  You can make song requests to our DJ <a target="_blank" rel="noreferrer" href="https://jdjclients.com/requests.asp?djidnumber=23469&month=6&day=19&year=2021&password=tncycwd">here</a>.
                </li>
                <li>
                  <strong>We have not booked a shuttle from the venue to the hotel after the reception. If you would be interested in this, please text Clara or Riley and let us know ASAP!</strong>
                </li>
              </ul>
            </div>
            <div css={[flexRow]} >
              {/* <Img
                alt={config.title}
                style={{
                  height: '100%',
                  innerWidth: '100%',
                  borderRadius: '.5rem',
                  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                }}
                fluid={props.data.beach.childImageSharp.fluid}
              /> */}

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
        <StaticImage
          src="../content/img/beach_cropped.jpg"
          alt="homepage beach background"
          placeholder="blurred"
          css={css`flex-grow: 3;margin-top: 2rem;`}
        // height={600}
        />
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
