import { graphql } from 'gatsby';
import { FixedObject } from 'gatsby-image';
import React, { useEffect, useState } from 'react';

import { Helmet } from 'react-helmet';

import { css } from '@emotion/react';

import "fontsource-clicker-script";
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
} from '../styles/shared';
import config from '../website-config';
import { colors } from '../styles/colors';
import { lighten } from 'polished';
import { bpMaxMD, bpMaxSM, bpMaxXS, maxMD, maxSM, maxXS } from '../styles/breakpoints';
import styled from '@emotion/styled';

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
  };
}

export const SiteMain = css`
  flex-grow: 1;
  display: flex;
  background-color: ${lighten(`0.05`, colors.royalty.white)};
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

function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState<{
    width?: number,
    height?: number
  }>({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth ?? 0,
        height: window.innerHeight ?? 0,
      });
    }

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Call handler right away so state gets updated with initial window size
    handleResize();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount

  return windowSize;
}

export const SaveTheDateHeader = styled.h1`
  color: ${colors.royalty.blue};
  justify-content: center;
  font-family: "Clicker Script";
  display: flex;
  font-size: 9rem;
  font-weight: 500;
  align-items: center;
  margin-bottom: 0;
  ${bpMaxSM} {
  font-size: 8.2rem;
  }
  ${bpMaxXS} {
  font-size: 5.2rem;
  }
`;

export const SaveTheDateWrapper = styled.div`
display: flex;
flex-direction:column;
/* justify-content: center; */
align-self: center;
align-items: center;
margin-left: 2rem;
`;

export const SaveTheDateForTheWedding = styled.div`
color: ${colors.royalty.blue};
font-family: "Railway";
font-size: 4rem;
margin-bottom: 4rem;
${bpMaxSM} {
  font-size: 3rem;
  margin-bottom: 3rem;
}
${bpMaxXS} {
  font-size: 2rem;
  margin-bottom: 2rem;
}
`;

export const SaveTheDateNamesAttention = () => (
  <div css={css`
font-family: 'Clicker Script';
font-size: 7rem;
margin-bottom: 3rem;
color: ${colors.royalty.blue};
display: flex;
align-items:center;
line-height: 1;
${bpMaxSM} {
  font-size: 5.25rem;
  margin-bottom: 2.25rem;
}
${bpMaxXS} {
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
}
`}
  >
    <span >
      Riley <br /> Miller
    </span>
    <span css={css`
    margin: 0 1.5rem;
  `}
    >

      {` `}&{` `}
    </span>
    <span>
      Clara <br /> Larson
    </span>
  </div>
);

export const SaveTheDateWeddingDate = styled.div`
color: ${colors.royalty.blue};
font-family: "Railway";
font-size: 5rem;
margin-bottom: 2.3rem;
${bpMaxSM} {
  font-size: 3.75rem;
  margin-bottom: 1.725rem;
}
${bpMaxXS} {
  font-size: 2.5rem;
  margin-bottom: 1.15rem;
}
`;

export const SaveTheDateWeddingPlace = styled.div`
color: ${colors.royalty.blue};
font-family: "Railway";
font-size: 3rem;
margin-bottom: 2.5rem;
${bpMaxSM} {
  font-size: 2.25rem;
  margin-bottom: 1.875rem;
}
${bpMaxXS} {
  font-size: 1.5rem;
  margin-bottom: 1.25rem;
}
`;

export const SaveTheDateInvitationContext = styled.div`
color: ${colors.royalty.blue};
font-family: "Railway";
font-size: 2rem;
margin-top: 1.2rem;
${bpMaxSM} {
  font-size: 1.75rem;
  margin-top: 1.06rem;
}
${bpMaxXS} {
  font-size: 1.16rem;
  margin-top: .696rem;
}

`;

export type SaveTheDateInfoProps = {
  size: {
    width?: number
    height?: number
  }
};

export const SaveTheDateInfo = (props: SaveTheDateInfoProps) => {
  const { size } = props;

  const getLogoWidth = () => {
    return (size.width && size.width > maxSM) ? 80 :
      (size.width && size.width < maxXS) ? 45 : 60;
  };

  const getLogoHeight = () => {
    return (size.width && size.width > maxSM) ? 80 :
      (size.width && size.width < maxXS) ? 45 : 60;
  };

  return (
    <SaveTheDateWrapper>
      <SaveTheDateForTheWedding>
        For the wedding of
      </SaveTheDateForTheWedding>
      <SaveTheDateNamesAttention />
      <SaveTheDateWeddingDate>
        June 19, 2021
      </SaveTheDateWeddingDate>
      <SaveTheDateWeddingPlace>
        Golden, Colorado
      </SaveTheDateWeddingPlace>
      <RCLogo
        width={getLogoWidth()} height={getLogoHeight()} />
      <SaveTheDateInvitationContext>
        Invitation to Follow
      </SaveTheDateInvitationContext>
    </SaveTheDateWrapper >
  );
};

const IndexPage: React.FC<IndexProps> = props => {
  const size = useWindowSize();

  return (
    <IndexLayout>
      <Meta {...props} />
      <Wrapper>
        <main id="site-main" css={[SiteMain, outer, flexCenter]}>
          <div css={[inner, flexColumn, flexSpaceEvenly]} >
            <div css={[flexRow, flexCenter]}>

              <SaveTheDateHeader>Save the Date</SaveTheDateHeader>
            </div>
            <div css={[flexRow, css`
              ${bpMaxSM} {
                justify-content: center;
                flex-wrap: wrap-reverse;
              }
              justify-content: space-evenly;
              margin-bottom: 3.3rem;
            `]}
            >
              <LandingImage width={size.width} />
              <SaveTheDateInfo size={size} />
            </div>
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
    header: file(relativePath: {eq: "img/blog-cover.png" }) {
          childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 2000, quality: 100) {
          ...GatsbyImageSharpFixed
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
