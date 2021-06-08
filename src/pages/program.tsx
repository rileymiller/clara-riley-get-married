import { graphql, Link } from 'gatsby';
import React from 'react';

import { css } from '@emotion/react';
import styled from '@emotion/styled';

import SiteNav from '../components/header/SiteNav';
import { Wrapper } from '../components/Wrapper';
import IndexLayout from '../layouts';
import { colors, textColor } from '../styles/colors';
import { flexJustifyCenter, inner, outer, pageIvoryBackground, SiteHeader, SiteNavMain, InfoPageTitle } from '../styles/shared';
import { Sparkles } from '../components/sparkle/Sparkles';
import { bpMaxSM, bpMaxXS, maxSM, maxXS } from '../styles/breakpoints';

export const SaveTheDateHeader = styled.h1`
  color: ${colors.royalty.blue};
  justify-content: center;
  font-family: "Clicker Script";
  display: flex;
  font-size: 6rem;
  font-weight: 500;
  align-items: center;
  margin-bottom: 0;
  ${bpMaxSM} {
  font-size: 10rem;
  }
  ${bpMaxXS} {
  font-size: 6rem;
  }
`;

interface NotFoundTemplateProps {
  data: {
    allMarkdownRemark: {
      totalCount: number;
    };
  };
}

const ProgramPage: React.FC<NotFoundTemplateProps> = props => {
  return (
    <IndexLayout>
      <Wrapper>
        <header css={[SiteHeader, outer]}>
          <div css={[SiteNavMain]}>
            <div>
              <SiteNav />
            </div>
          </div>
        </header>
        <main id="site-main" css={[outer, ErrorContent, flexJustifyCenter]} className="error-content">
          <div css={css`background-color: ${colors.royalty.ivory}; border-radius: 3px; text-align: center; font-size: 1.8rem;`}>
            <p css={css`font-size: 2.2rem; margin-bottom: 1rem; margin-top: 2rem;`}>
              ❤️ Welcome to our wedding! ❤️
            </p>
              <Sparkles color={colors.royalty.pink}>
                <SaveTheDateHeader css={css `margin-left: 2rem; margin-right: 2rem; margin-top: 1rem; margin-bottom: 2rem;`}>
                  Riley &#38; Clara
                </SaveTheDateHeader>
              </Sparkles>
              <p css={css`font-size: 4rem; margin-bottom: 0; margin-top: 0; font-family: "Clicker Script";`}>
                June 19
              </p>
              <ul css={css`list-style: none; margin-bottom: 5rem;`}>
                <li css={css`font-size: 2.5rem; margin-bottom: 0; margin-top: 3.5rem;`}>
                  Seating of the Families
                </li>
                <li css={css`font-size: 2.5rem; margin-bottom: 0; margin-top: 1.5rem;`}>
                  Processional
                </li>
                <li css={css`font-size: 1.7rem; margin-bottom: 0; margin-top: 0;`}>
                  <i>King of Kings by Lighthouse Piano</i>
                </li>
                <li css={css`font-size: 2.5rem; margin-bottom: 0; margin-top: 1.5rem;`}>
                  Bride's Entrance
                </li>
                <li css={css`font-size: 1.7rem; margin-bottom: 0; margin-top: 0;`}>
                  <i>King of My Heart by Lighthouse Piano</i>
                </li>
                <li css={css`font-size: 2.5rem; margin-bottom: 0; margin-top: 1.5rem;`}>
                  Welcome
                </li>
                <li css={css`font-size: 2.5rem; margin-bottom: 0; margin-top: 1.5rem;`}>
                  Blessing
                </li>
                <li css={css`font-size: 2.5rem; margin-bottom: 0; margin-top: 1.5rem;`}>
                  Declaration of Consent
                </li>
                <li css={css`font-size: 2.5rem; margin-bottom: 0; margin-top: 1.5rem;`}>
                  First Reading
                </li>
                <li css={css`font-size: 2.5rem; margin-bottom: 0; margin-top: 1.5rem;`}>
                  Second Reading
                </li>
                <li css={css`font-size: 2.5rem; margin-bottom: 0; margin-top: 1.5rem;`}>
                  Homily
                </li>
                <li css={css`font-size: 2.5rem; margin-bottom: 0; margin-top: 1.5rem;`}>
                  Exchange of Vows
                </li>
                <li css={css`font-size: 2.5rem; margin-bottom: 0; margin-top: 1.5rem;`}>
                  Communion
                </li>
                <li css={css`font-size: 1.7rem; margin-bottom: 0; margin-top: 0;`}>
                  <i>O Come to the Altar (Acoustic) by Elevation Worship</i>
                </li>
                <li css={css`font-size: 1.7rem; margin-bottom: 0; margin-top: 0;`}>
                  <i>Build My Life by Housefires</i>
                </li>
                <li css={css`font-size: 2.5rem; margin-bottom: 0; margin-top: 1.5rem;`}>
                  Exchange of Rings
                </li>
                <li css={css`font-size: 2.5rem; margin-bottom: 0; margin-top: 1.5rem;`}>
                  Lord's Prayer
                </li>
                <li css={css`font-size: 2.5rem; margin-bottom: 0; margin-top: 1.5rem;`}>
                  Pronouncement
                </li>
                <li css={css`font-size: 2.5rem; margin-bottom: 0; margin-top: 1.5rem;`}>
                  Recessional
                </li>
                <li css={css`font-size: 1.7rem; margin-bottom: 0; margin-top: 0;`}>
                  <i>Mr. Blue Sky by Electric Light Orchestra</i>
                </li>
              </ul>
              <p css={css`font-size: 4rem; margin-bottom: 3rem; margin-top: 0; font-family: "Clicker Script";`}>
                Wedding Party
              </p>
              <ul css={css`list-style: none; margin-bottom: 5rem;`}>
                <li css={css`font-size: 2rem; margin-bottom: 0; margin-top: 3rem;`}>
                  <b>Officiant</b>
                </li>
                <li css={css`font-size: 2.8rem; margin-bottom: 0; margin-top: 0; font-family: "Clicker Script";`}>
                  Bill Rader
                </li>
                <li css={css`font-size: 2rem; margin-bottom: 0; margin-top: 2rem;`}>
                  <b>Parents of the Bride</b>
                </li>
                <li css={css`font-size: 2.8rem; margin-bottom: 0; margin-top: 0; font-family: "Clicker Script";`}>
                  Steve and Daffni Larson
                </li>
                <li css={css`font-size: 2rem; margin-bottom: 0; margin-top: 2rem;`}>
                  <b>Parents of the Groom</b>
                </li>
                <li css={css`font-size: 2.8rem; margin-bottom: 0; margin-top: 0; font-family: "Clicker Script";`}>
                  Tim and Tana Miller
                </li>
                <li css={css`font-size: 2rem; margin-bottom: 0; margin-top: 2rem;`}>
                  <b>Maid of Honor</b>
                </li>
                <li css={css`font-size: 2.8rem; margin-bottom: 0; margin-top: 0; font-family: "Clicker Script";`}>
                  Sara Larson
                </li>
                <li css={css`font-size: 2rem; margin-bottom: 0; margin-top: 2rem;`}>
                  <b>Best Man</b>
                </li>
                <li css={css`font-size: 2.8rem; margin-bottom: 0; margin-top: 0; font-family: "Clicker Script";`}>
                  Cody Miller
                </li>
                <li css={css`font-size: 2rem; margin-bottom: 0; margin-top: 2rem;`}>
                  <b>Bridesmaids</b>
                </li>
                <li css={css`font-size: 2.8rem; margin-bottom: 0; margin-top: 0; font-family: "Clicker Script";`}>
                  Maddie Rogers
                </li>
                <li css={css`font-size: 2.8rem; margin-bottom: 0; margin-top: 0; font-family: "Clicker Script";`}>
                  Kelsey Buechler
                </li>
                <li css={css`font-size: 2.8rem; margin-bottom: 0; margin-top: 0; font-family: "Clicker Script";`}>
                  Loren Dempsey
                </li>
                <li css={css`font-size: 2.8rem; margin-bottom: 0; margin-top: 0; font-family: "Clicker Script";`}>
                  Sara Wofford
                </li>
                <li css={css`font-size: 2rem; margin-bottom: 0; margin-top: 2rem;`}>
                  <b>Groomsmen</b>
                </li>
                <li css={css`font-size: 2.8rem; margin-bottom: 0; margin-top: 0; font-family: "Clicker Script";`}>
                  Trey Miller
                </li>
                <li css={css`font-size: 2.8rem; margin-bottom: 0; margin-top: 0; font-family: "Clicker Script";`}>
                  Corbin Cargil
                </li>
                <li css={css`font-size: 2.8rem; margin-bottom: 0; margin-top: 0; font-family: "Clicker Script";`}>
                  Andrew Larson
                </li>
                <li css={css`font-size: 2.8rem; margin-bottom: 0; margin-top: 0; font-family: "Clicker Script";`}>
                  Steve Larson
                </li>
                <li css={css`font-size: 2rem; margin-bottom: 0; margin-top: 2rem;`}>
                  <b>Ring Bearer</b>
                </li>
                <li css={css`font-size: 2.8rem; margin-bottom: 0; margin-top: 0; font-family: "Clicker Script";`}>
                  Rhett Wasinger
                </li>
                <li css={css`font-size: 2rem; margin-bottom: 0; margin-top: 2rem;`}>
                  <b>Flower Girl</b>
                </li>
                <li css={css`font-size: 2.8rem; margin-bottom: 0; margin-top: 0; font-family: "Clicker Script";`}>
                  Lola
                </li>
              </ul>
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

const ProgramParagraphStyles = css`color: ${colors.royalty.blue};`;

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

const ProgramTitle = styled.h1`
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

const ProgramDescription = styled.p`
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

export default ProgramPage;
