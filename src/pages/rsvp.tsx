import { graphql, Link } from 'gatsby';
import React from 'react';

import { css } from '@emotion/react';
import styled from '@emotion/styled';

import SiteNav from '../components/header/SiteNav';
import { Wrapper } from '../components/Wrapper';
import IndexLayout from '../layouts';
import { colors } from '../styles/colors';
import { inner, outer, SiteHeader, SiteNavMain } from '../styles/shared';
import { RSVP as Rsvp } from '../components/rsvp/RSVP';
import { Footer } from '../components/Footer';

interface NotFoundTemplateProps {
  data: {
    allMarkdownRemark: {
      totalCount: number;
    };
  };
}

const RSVPPage: React.FC<NotFoundTemplateProps> = props => {
  return (
    <IndexLayout>
      <Wrapper>
        <header css={[SiteHeader]}>
          <div css={[SiteNavMain]}>
            <div>
              <SiteNav />
            </div>
          </div>
        </header>
        <main id="site-main" css={[outer, MainContent]} className="error-content">
          <div css={[inner]}>
            <section style={{ textAlign: 'center' }}>

              <Rsvp title={`Riley and Clara's Wedding`} />
            </section>
          </div>
        </main>
        <Footer />
      </Wrapper>
    </IndexLayout>
  );
};

export const pageQuery = graphql`
  query {
    allMarkdownRemark(limit: 3, sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          timeToRead
          frontmatter {
            title
            date
            tags
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

const MainContent = css`
  padding: 8vw 4vw 6vw;
  display:flex;
  justify-content: center;
  align-items:center;
  
  @media (max-width: 800px) {
    padding-top: 24vw;
  }

  @media (max-width: 500px) {
    padding-top: 28vw;
  }

  @media (min-width: 940px) {
    .post-card {
      margin-bottom: 0;
      padding-bottom: 0;
      border-bottom: none;
    }
  }
`;

export default RSVPPage;
