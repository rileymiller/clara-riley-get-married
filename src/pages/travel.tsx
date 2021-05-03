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
              <p css={[TravelParagraphStyles]}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sagittis volutpat ligula, eu pulvinar leo placerat in. Suspendisse sed lorem a mi hendrerit dapibus eu at nisl. Donec nibh leo, molestie pretium metus ac, molestie rhoncus neque. Sed ultricies ultricies sem, a dapibus turpis ornare at. Pellentesque interdum nec dolor non elementum. Curabitur accumsan vel elit non bibendum. Nulla lacus nunc, vestibulum eu mattis maximus, efficitur sit amet eros. Praesent auctor diam quis neque ullamcorper interdum. Vestibulum vitae enim nec nunc commodo posuere vestibulum sed dui. Nam id eros dictum ex sagittis cursus. Quisque diam lectus, fermentum at placerat eu, congue at justo.
              </p>
              <p css={[TravelParagraphStyles]}>
                Sed luctus odio finibus nibh lobortis vestibulum. Duis vel pretium erat. Pellentesque sed velit leo. Duis nec urna ante. Suspendisse tempor ligula eget ipsum facilisis, ut eleifend sem aliquam. In nec lacinia mi. Maecenas vehicula, nisl sed sagittis venenatis, ex enim viverra justo, at consectetur velit libero eu sapien. Sed a tristique est. Quisque at mollis ligula. Nam viverra urna at augue luctus volutpat. Vestibulum sollicitudin nibh in arcu semper dapibus. Nullam sodales elit et finibus condimentum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce porttitor nibh tellus, consequat viverra tortor bibendum sit amet. Nam laoreet volutpat ante non lacinia.
              </p>
              <p css={[TravelParagraphStyles]}>
                Etiam nec enim eu neque scelerisque iaculis. Maecenas vitae ante eu ante efficitur elementum ac eu libero. Donec neque metus, tincidunt id nunc nec, tempus interdum sem. Etiam non quam in urna consequat fermentum non sit amet tortor. In rhoncus sapien eu enim tempor molestie. Donec non sagittis velit. Phasellus pretium, turpis ac feugiat consequat, augue erat placerat leo, elementum mattis turpis sem vitae odio. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Phasellus ac facilisis tellus, vitae tincidunt neque. Quisque aliquet congue augue vel tempus. Proin efficitur nisi eget tincidunt venenatis.
              </p>
              <TravelDescription>Not ready yet go back</TravelDescription>
              <Link css={ErrorLink} to="/">
                Go to the front page →
              </Link>
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
