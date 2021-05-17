import { graphql, Link } from 'gatsby';
import React from 'react';

import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { bgColor, colors, textColor } from '../styles/colors';
import { darken, lighten } from 'polished';
import { RCLogo } from '../components/RCLogo';
import LandingImage from '../components/LandingImage';
import { bpMaxSM, bpMaxXS, maxSM, maxXS } from '../styles/breakpoints';
import SiteNav from '../components/header/SiteNav';
import { Wrapper } from '../components/Wrapper';
import IndexLayout from '../layouts';
// import { inner, outer, SiteHeader, SiteNavMain } from '../styles/shared';
import { SaveTheDateHeader } from '../components/header/SaveTheDateHeader';

import {
  inner,
  outer,
  flexColumn,
  flexRow,
  flexCenter,
  flexSpaceEvenly,
  SiteHeader, SiteNavMain,
} from '../styles/shared';
import { useWindowSize } from '../hooks/useWindowSize';

interface NotFoundTemplateProps {
  data: {
    allMarkdownRemark: {
      totalCount: number;
    };
  };
}
export const SaveTheDateWrapper = styled.div`
display: flex;
flex-direction:column;
/* justify-content: center; */
align-self: center;
align-items: center;
max-width: 50%;
${bpMaxSM} {
  max-width: 100%
}
${bpMaxXS} {
  max-width: 100%;
}
margin: .75rem;
`;

export const SiteMain = css`
  flex-grow: 1;
  flex-direction: column;
  /* justify-content:center; */
  align-items: center;
  display: flex;
  /* background-color: ${lighten(`0.05`, bgColor.primary)}; */
  background-color: ${bgColor.primary};
`;
export const SaveTheDateForTheWedding = styled.div`
color: ${textColor.primary};
font-family: "Raleway";
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
color: ${textColor.primary};
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
color: ${textColor.primary};
font-family: "Raleway";
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
color: ${textColor.primary};
font-family: "Raleway";
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
color: ${textColor.primary};
font-family: "Raleway";
font-size: 2rem;
margin-bottom: 1.2rem;
${bpMaxSM} {
  font-size: 1.75rem;
  margin-bottom: 1.06rem;
}
${bpMaxXS} {
  font-size: 1.16rem;
  margin-bottom: .696rem;
}

`;

export const SaveTheDateCovidNotice = styled.div`
color: ${textColor.primary};
font-family: "Raleway";
font-size: 1.4rem;
margin: 1rem 0;
text-align: center;
line-height: 1.5;
${bpMaxSM} {
  font-size: 1.0rem;
  margin: .9rem 0;
}
${bpMaxXS} {
  font-size: .85rem;
  margin: .6rem 0;
}`;

export type SaveTheDateInfoProps = {
  size: {
    width?: number
    height?: number
  }
};

export const SaveTheDateInfo = (props: SaveTheDateInfoProps) => {
  const { size } = props;

  const LG_LOGO_SIZE = 80;
  const MD_LOGO_SIZE = 65;
  const SM_LOGO_SIZE = 55;

  const getLogoWidth = () => {
    return (size.width && size.width > maxSM) ? LG_LOGO_SIZE :
      (size.width && size.width < maxXS) ? SM_LOGO_SIZE : MD_LOGO_SIZE;
  };

  const getLogoHeight = () => {
    return (size.width && size.width > maxSM) ? LG_LOGO_SIZE :
      (size.width && size.width < maxXS) ? SM_LOGO_SIZE : MD_LOGO_SIZE;
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
      <SaveTheDateInvitationContext>
        Invitation to Follow*
      </SaveTheDateInvitationContext>
      <RCLogo width={getLogoWidth()} height={getLogoHeight()} />
      <SaveTheDateCovidNotice>
        *Please be aware that we may need to limit our guest list due to unforseeable changes in COVID-19 regulations.
      </SaveTheDateCovidNotice>

    </SaveTheDateWrapper >
  );
};

const SaveTheDatePage: React.FC<NotFoundTemplateProps> = props => {
  const size = useWindowSize();

  return (
    <IndexLayout>
      <Wrapper>
        <header css={[SiteHeader, outer]}>
          <div css={[SiteNavMain]}>
            <div >
              <SiteNav />
            </div>
          </div>
        </header>
        <main id="site-main" css={[SiteMain, outer, flexCenter]}>
          <div css={[inner, flexColumn, flexSpaceEvenly]} >
            <div css={[flexRow, flexCenter, css`
                @media (max-width: 700px) {
                  padding-top: 25vw;
                }
            `]}
            >

              {/* <SaveTheDateHeader>Save the Date</SaveTheDateHeader> */}
              <SaveTheDateHeader width={size.width} height={size.height} fill={textColor.primary} />
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

const ErrorContent = css`
  padding: 14vw 4vw 6vw;

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

const ErrorCode = styled.h1`
  margin: 0;
  /* color: var(--lightgrey); */
  color: ${colors.lightgrey};
  font-size: 12vw;
  line-height: 1em;
  letter-spacing: -5px;
  opacity: 0.75;

  @media (max-width: 800px) {
    font-size: 11.2rem;
  }
`;

const ErrorDescription = styled.p`
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

export default SaveTheDatePage;
