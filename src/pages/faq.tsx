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

const FAQPage: React.FC<NotFoundTemplateProps> = props => {
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
          <div css={[inner]}>
            <section css={[pageIvoryBackground]}>
              <Sparkles>
                <InfoPageTitle>FAQ</InfoPageTitle>
              </Sparkles>
              <h2 css={css`text-align: center; font-size: 3rem;`}>
                General Questions
                </h2>
              <div css={css`display: flex; flex-direction: column; align-items: flex-start; text-align: left;`}>
                <h3 css={[FAQHeaderStyles]}>
                  Where are the ceremony and reception taking place?
                </h3>
                <p css={[FAQParagraphStyles]}>
                  Both will take place at the Pines at Genesee (633 Park Point Dr, Golden, CO 80401). The ceremony will be outside and we will move inside for the reception. The ceremony and reception sites are a short walk apart, so you will not need to worry about driving from one site to the other.
                </p>
                <h3 css={[FAQHeaderStyles]}>
                  Where can I park?
                </h3>
                <p css={[FAQParagraphStyles]}>
                  There is plenty of free parking at the venue!
                </p>
                <h3 css={[FAQHeaderStyles]}>
                  When should I arrive?
                </h3>
                <p css={[FAQParagraphStyles]}>
                  Anywhere between 6:00 and 6:30pm. Please do not arrive before 6:00pm. The ceremony begins at 6:30pm sharp, so please arrive with enough time to park and find a seat.
                </p>
                <h3 css={[FAQHeaderStyles]}>
                  What is the tentative schedule of events?
                </h3>
                <p css={[FAQParagraphStyles]}>
                  <ul css={css`margin-bottom: 0;`}>
                    <li>

                      6:30 Ceremony Begins
                    </li>
                    <li>

                      7:00 Cocktail Hour
                    </li>
                    <li>

                      7:50 Reception Begins
                    </li>
                    <li>

                      8:00 Dinner
                    </li>
                    <li>

                      9:00 Cake Cutting and First Dance
                    </li>
                    <li>

                      12:00 Send Off
                    </li>
                  </ul>
                </p>
                <h3 css={[FAQHeaderStyles]}>
                  When is the reception over?
                </h3>
                <p css={[FAQParagraphStyles]}>
                  The reception ends at midnight. For those who are able to stay that late, we will be doing a glow stick send-off and would love to have you there!
                </p>
                <h3 css={[FAQHeaderStyles]}>
                  What’s the dress code?
                </h3>
                <p css={[FAQParagraphStyles]}>
                  Semi-formal. Ladies, the walk from the ceremony to the reception is on pavement, so if you want to wear heels you can.
                </p>
                <h3 css={[FAQHeaderStyles]}>
                  When is the RSVP deadline? How do I RSVP?
                </h3>
                <p css={[FAQParagraphStyles]}>
                  Please RSVP by May 29. You can do so at our <Link to="/rsvp">RSVP</Link> page.
                </p>
                <h3 css={[FAQHeaderStyles]}>
                  Are kids welcome?
                </h3>
                <p css={[FAQParagraphStyles]}>
                  Yes, kids are welcome. However, please keep in mind that we will have an open bar at the reception.
                </p>
                <h3 css={[FAQHeaderStyles]}>
                  Can I bring a plus one?
                </h3>
                <p css={[FAQParagraphStyles]}>
                  Unfortunately, due to COVID restrictions, our guest numbers are limited and we cannot accommodate any extra plus ones. We appreciate your understanding!
                </p>
                <h3 css={[FAQHeaderStyles]}>
                  Do you have a hotel block?
                </h3>
                <p css={[FAQParagraphStyles]}>
                  Yes, please see our <Link to="/travel">Travel</Link> page for more information.
                </p>
                <h3 css={[FAQHeaderStyles]}>
                  Will transportation be provided to/from the hotel?
                </h3>
                <p css={[FAQParagraphStyles]}>
                  Yes, we will have shuttle busses running from the hotel to the venue on Saturday, June 19 before the ceremony and from the venue to the hotel after the reception. Details are TBD, please check our <Link to="/travel">Travel</Link> page later for more information!
                </p>
                <h3 css={[FAQHeaderStyles]}>
                  Are there any other wedding events I can attend?
                </h3>
                <p css={[FAQParagraphStyles]}>
                  Yes, we will be having a post-wedding brunch on Sunday, June 20 from 9am-11am at the hotel listed on our <Link to="/travel">Travel</Link> page. This is a drop-in event and everyone is welcome to stop by at any time from 9-11!
                </p>
                <h3 css={[FAQHeaderStyles]}>
                  Can I take pictures and/or post pictures of your wedding on social media?
                </h3>
                <p css={[FAQParagraphStyles]}>
                  We will be having an unplugged ceremony, so please silence or turn your phones off and put them away during the ceremony. After that, feel free to take and post pictures! We would love to see them, so use our hashtag <a>#clarasallriledup</a> when you post. :)
                </p>
                <h3 css={[FAQHeaderStyles]}>
                  Do you have a registry?
                </h3>
                <p css={[FAQParagraphStyles]}>
                  Yes! Please do not feel any obligation whatsoever, we are just happy to celebrate with you! For those who are interested, we are registered at Bed Bath &#38; Beyond: https://www.bedbathandbeyond.com/store/giftregistry/viewregistryguest/549821130?eventType=Wedding
                </p>
                <h3 css={[FAQHeaderStyles]}>
                  I have more questions! Who do I ask?
                </h3>
                <p css={[FAQParagraphStyles]}>
                  Please feel free to text Clara or Riley with any more questions.
                </p>
                <h2 css={css`display: flex; align-self: center; font-size: 3rem;`}>
                  COVID-Related Questions
                </h2>
                <h3 css={[FAQHeaderStyles]}>
                  What are the rules regarding masks?
                </h3>
                <p css={[FAQParagraphStyles]}>
                  From our venue: "For now, the Statewide indoor mask mandate is still in place. Even if you are vaccinated, you are still required to wear a mask indoors. Once you are seated at your table, you may remove your mask to eat/drink. If you are outdoors, you do not need to wear a mask."
                </p>
                <h3 css={[FAQHeaderStyles]}>
                  What are the rules for the dance floor?
                </h3>
                <p css={[FAQParagraphStyles]}>
                  From our venue: "Open dancing is restricted to no more than 6 people from the same party (i.e. from the same dining table). This means that 1 pod of 6 can be spaced away from another pod of 6 (with 6' in between the groups). We are estimating that 6 or 7 dance pods will be able to dance at one time. Each pod should be restricted to people seated at the same dining table – we plan to provide wristbands to each table designating their group."
                </p>
                <h3 css={css`text-align: center; font-size: 3rem;`}>   
                  Overall, please be prepared to be flexible, as COVID-19 regulations are fluid and may change at any time. We appreciate your understanding!
                </h3>
              </div>
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

const FAQHeaderStyles = css`font-weight: bold;`;

const FAQParagraphStyles = css`color: ${colors.royalty.blue};`;

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

const FAQTitle = styled.h1`
  margin: 0;
  /* color: var(--lightgrey); */
  color: ${colors.royalty.blue};
  font-size: 8vw;
  line-height: 1em;
  letter-spacing: -5px;
  opacity: 0.9;

  @media (max-width: 800px) {
    font-size: 9em;
  }
`;

const FAQDescription = styled.p`
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

export default FAQPage;
