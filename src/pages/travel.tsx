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
              <SiteNav />
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
                Our hotel is <b>Denver Marriott West</b> (1717 Denver West Boulevard, Golden CO 80401). You can call 1-888-238-1803 to make a reservation.
              </p>
              <p css={[TravelParagraphStyles]}>
                Note: The hotel block discount is no longer available.
              </p>
              <h2 css={css`text-align: center; font-size: 3rem;`}>
                Transportation
              </h2>
              <p css={[TravelParagraphStyles]}>
                We will have one shuttle van depart from the hotel on Saturday, June 19 at 5:45pm, which will arrive at the venue roughly at 6:00pm.
              </p>
              <h2 css={css`text-align: center; font-size: 3rem;`}>
                Things to Do in Golden
              </h2>
              <p css={[TravelParagraphStyles]}>
                We have spent a lot of time in Golden over the years! If you're looking for things to do, here are some of our favorites.    
              </p>
              <h3 css={css`text-align: center; font-size: 2.5rem;`}>
                Food
              </h3>
              <p css={[TravelParagraphStyles]}>
                <ul css={css`margin-bottom: 0; list-style-type: none;`}>
                  <li>
                    <b>Woody's Wood Fired Pizza</b> is a fun and delicious pizza place right in the heart of downtown Golden that offers an all you can eat pizza buffet.
                  </li>
                  <li>
                    <b>Bob's Atomic Burgers</b> is a great build your own burger joint just two blocks off Washington Street.
                  </li>
                  <li>
                    <b>Blue Sky Cafe and Juice Bar</b> is over by the Colorado Mills Mall and is Clara's favorite breakfast spot of all time. Highly recommend checking it out if you're looking for breakfast! 
                  </li>
                  <li>
                    <b>Bonfire Burritos</b> is home to every Mines student's favorite breakfast burritos. We recommend ordering online, the wait can sometimes get crazy long!
                  </li>
                  <li>
                    <b>Sherpa House Restaurant and Culture Center</b> is an awesome little spot near downtown Golden with an amazing atmosphere and delicious Himalayan food.
                  </li>
                </ul>
              </p>
              <h3 css={css`text-align: center; font-size: 2.5rem;`}>
                Drinks
              </h3>
              <p css={[TravelParagraphStyles]}>        
                <ul css={css`margin-bottom: 0; list-style-type: none;`}>
                  <li>
                    <b>Golden City Brewery</b> (usually just called <b>GCB</b>) in downtown Golden is one of Riley's favorite spots to grab a beer and hang out with friends.
                  </li>
                  <li>
                    <b>Barrels &#38; Bottles Brewery</b> is a fun little brewery in downtown Golden on 12th St where you can grab a beer, some wine, or a wine slushy! They also have a second, larger location on Orchard St off South Golden Road.
                  </li>
                </ul> 
              </p>
              <h3 css={css`text-align: center; font-size: 2.5rem;`}>
                Food &#38; Drinks
              </h3>
              <p css={[TravelParagraphStyles]}>
                <ul css={css`margin-bottom: 0; list-style-type: none;`}>
                  <li>
                    <b>Colorado Plus 49 Cidery &#38; Pub</b> is Clara's favorite spot to grab a drink in downtown Golden. She recommends the Black Widow cider (if they have it, they rotate their ciders) and the adult mac and cheese! It's a lot of fun to get a flight of ciders and try out a bunch!
                  </li>
                  <li>
                    <b>Table Mountain Inn</b> (or <b>TMI</b>) was Clara and Riley's second date. We recommend the house margarita!
                  </li>
                  <li>
                    <b>El Dorado Mexican Restaurant</b> is a fun place to do bottomless mimosas in Golden! They also have great (and cheap) grab and go breakfast burritos that you can call ahead and order.
                  </li>
                  <li>
                    <b>Rock Rest Lodge</b> is a super fun bar off South Golden Road with some of Riley's favorite wings of all time.
                  </li>
                </ul>
              </p>
              <h3 css={css`text-align: center; font-size: 2.5rem;`}>
                Coffee
              </h3>
              <p css={[TravelParagraphStyles]}>
                <ul css={css`margin-bottom: 0; list-style-type: none;`}>
                  <li>
                    <b>Cafe 13</b> is an awesome spot in downtown Golden to grab a coffee and a bite to eat in the morning! They even offer a fun selection of morning cocktails if you wanted a spot to do brunch.
                  </li>
                  <li>
                    <b>Windy Saddle Cafe</b> is a super cute coffee place right on Washington Street. We love their specialty lattes!
                  </li>     
                </ul>
              </p>
              <h3 css={css`text-align: center; font-size: 2.5rem;`}>
                Other Stuff
              </h3>
              <p css={[TravelParagraphStyles]}>
                <ul css={css`margin-bottom: 0; list-style-type: none;`}>
                  <li>
                    The <b>Coors Brewery Tour</b> is really hard to beat if you're looking for things to do in Golden. You'll get to walk through the Coors Brewery while you learn about the history and brewing process. You'll also get to sample some beers along the way!
                  </li>
                  <li>
                    The <b>Colorado Mills Mall</b> is a great place to do some shopping or hang out. There are also a ton of restaurants in that area.
                  </li>
                  <li>
                    <b>South Table Mountain</b> and <b>North Table Mountain</b> are both fun, not too challenging, and absolutely beautiful hikes in Golden! If you hike to the very top of South Table, you'll get an incredible view of Golden.
                  </li>
                  <li>
                    <b>Clear Creek</b> in downtown Golden is a fun spot to hang out, swim, or even go tubing! There are several spots to rent tubes in Golden, we highly recommend trying it out if you have the time!
                  </li>
                </ul>
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
