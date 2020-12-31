import { graphql } from 'gatsby';
import { FixedObject } from 'gatsby-image';
import React, { useEffect, useState } from 'react';

import { Helmet } from 'react-helmet';

import { css } from '@emotion/react';

import "fontsource-clicker-script";

import { RCLogo } from '../components/RCLogo';
import LandingImage from '../components/LandingImage';
import { Footer } from '../components/Footer';
import SiteNav from '../components/header/SiteNav';
import Pagination from '../components/Pagination';
import { PostCard } from '../components/PostCard';
import { Wrapper } from '../components/Wrapper';
import IndexLayout from '../layouts';
import {
  inner,
  outer,
  PostFeed,
  Posts,
  SiteDescription,
  SiteHeader,
  SiteHeaderContent,
  SiteTitle,
  SiteHeaderStyles,
} from '../styles/shared';
import config from '../website-config';
import { PageContext } from './post';
import { colors } from '../styles/colors';
import { lighten } from 'polished';

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
    allMarkdownRemark: {
      edges: Array<{
        node: PageContext;
      }>;
    };
  };
}

export const SiteMain = css`
  flex-grow: 1;

  /* background-color: #fff; */
  background-color: ${lighten(`0.05`, colors.royalty.white)};
  /* background-color: ${colors.royalty.white}; */

  @media (prefers-color-scheme: dark) {
    /* background: ${colors.royalty.blue}; */
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

const IndexPage: React.FC<IndexProps> = props => {
  // const { width, height } = props.data.header.childImageSharp.fixed;

  const size = useWindowSize();

  const getLogoWidth = () => {
    return (size.width && size.width > 500) ? 100 :
      (size.width && size.width < 380) ? 45 : 60;
  };

  const getLogoHeight = () => {
    return (size.width && size.width > 500) ? 100 :
      (size.width && size.width < 380) ? 45 : 60;
  };

  return (
    <IndexLayout>
      <Meta {...props} />
      <Wrapper>

        <main id="site-main" css={[SiteMain, outer]}>
          <div
            css={css`
              position: absolute;
              top: 2rem;
              left: 2rem;
            `}
          >

            <RCLogo
              width={getLogoWidth()} height={getLogoHeight()} />
          </div>
          <div css={[inner]}>
            <div css={css`
              /* margin-top: 24px; */
            `}
            >
              <h1 css={css`
              /* color: ${lighten(`0.05`, colors.royalty.gold)}; */
              color: ${colors.royalty.blue};
              justify-content: center;
              font-family: "Clicker Script";
              display: flex;
              font-size: 9rem;
              align-items: center;
              @media (max-width: 500px) {
              font-size: 5.2rem;
              }
            `}>
                Save the Date
              </h1>
            </div>
          </div>
          <LandingImage />
          {/* <div css={[inner, Posts]}>
            <div css={[PostFeed]}>
              {props.data.allMarkdownRemark.edges.map((post, index) => {
                // filter out drafts in production
                return (
                  (post.node.frontmatter.draft !== true ||
                    process.env.NODE_ENV !== 'production') && (
                    <PostCard key={post.node.fields.slug} post={post.node} large={index === 0} />
                  )
                );
              })}
            </div>
          </div> */}
        </main>
        {/* {props.children} */}
        {/* {props.pageContext.numPages > 1 && (
          // <Pagination
          //   currentPage={props.pageContext.currentPage}
          //   numPages={props.pageContext.numPages}
          // />
        )} */}
        <Footer />
      </Wrapper>
    </IndexLayout >
  );
};

export const pageQuery = graphql`
  query blogPageQuery($skip: Int!, $limit: Int!) {
    logo: file(relativePath: { eq: "img/ghost-logo.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    }
    header: file(relativePath: { eq: "img/blog-cover.png" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 2000, quality: 100) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { draft: { ne: true } } }
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
                  ... on ImageSharp {
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
