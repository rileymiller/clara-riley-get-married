import { graphql, Link } from 'gatsby';
import React from 'react';

import { css } from '@emotion/react';
import styled from '@emotion/styled';

import SiteNav from '../components/header/SiteNav';
import { Wrapper } from '../components/Wrapper';
import IndexLayout from '../layouts';
import { colors } from '../styles/colors';
import { flexJustifyCenter, inner, outer, pageIvoryBackground, SiteHeader, SiteNavMain, InfoPageTitle } from '../styles/shared';
import { Sparkles } from '../components/sparkle/Sparkles';

interface NotFoundTemplateProps {
  data: {
    allMarkdownRemark: {
      totalCount: number;
    };
  };
}

const TravelPage: React.FC<NotFoundTemplateProps> = props => {
  return (
    <IndexLayout>
      <Wrapper>
        <header css={[SiteHeader, outer]}>
          <div css={[SiteNavMain]}>
            <div>
              <SiteNav isHome={false} />
            </div>
          </div>
        </header>
        <main id="site-main" css={[outer, ErrorContent, flexJustifyCenter]} className="error-content">
          <div css={[inner]}>
            <section css={[pageIvoryBackground]}>
              <Sparkles>
                <InfoPageTitle>Travel</InfoPageTitle>
              </Sparkles>
              <h2 css={css`text-align: center; font-size: 3rem;`}>
                Hotel
                </h2>
              <p css={[TravelParagraphStyles]}>
                Our hotel block is at <b>Denver Marriott West</b> (1717 Denver West Boulevard, Golden CO 80401).
              </p>
              <p css={[TravelParagraphStyles]}>
                You can go <a target=" blank" rel ="noreferrer" href="https://www.marriott.com/event-reservations/reservation-link.mi?id=1620496745022&key=GRP&app=resvlink">here</a> to make a room reservation at the discounted block rate.
              </p>
              <p css={[TravelParagraphStyles]}>
                You can also call 1-888-238-1803 to make a reservation. If you call, please identify yourself as a part of the <b>Larson/Miller Wedding Room Block</b> to get the discounted block rate.
              </p>
              <p>
                The room block will only be active until <b>Friday, May 28</b>. Please be sure to make your reservation before then!
              </p>
              <h2 css={css`text-align: center; font-size: 3rem;`}>
                Transportation
                </h2>
                <p css={[TravelParagraphStyles]}>
                  We will have shuttle busses running from the hotel to the venue on Saturday, June 19 before the ceremony and from the venue to the hotel after the reception. Details are TBD, please check back later for more information!
                </p>
            </section>
          </div>
        </main>
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

const TravelParagraphStyles = css`color: ${colors.royalty.blue};`;

const ErrorContent = css`
  padding: 10vw 4vw 6vw;

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

const TravelTitle = styled.h1`
  margin: 0;
  /* color: var(--lightgrey); */
  color: ${colors.royalty.blue};
  font-size: 10vw;
  line-height: 1em;
  letter-spacing: -5px;
  opacity: 0.9;

  @media (max-width: 800px) {
    font-size: 9rem;
  }
`;

const TravelDescription = styled.p`
  margin: 0;
  /* color: var(--midgrey); */
  color: ${colors.midgrey};
  font-size: 3rem;
  line-height: 1.3em;
  font-weight: 400;

  @media (max-width: 800px) {
    margin: 5px 0 0 0;
    font-size: 1.8rem;
  }
`;

const ErrorLink = css`
  display: inline-block;
  margin-top: 5px;
`;

export default TravelPage;
