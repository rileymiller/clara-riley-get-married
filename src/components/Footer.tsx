import { Link } from 'gatsby';
import { lighten } from 'polished';
import React from 'react';
import { css } from '@emotion/react';

import { colors } from '../styles/colors';
import { outer, inner } from '../styles/shared';
import config from '../website-config';
import { bpMaxSM } from '../styles/breakpoints';

export const Footer: React.FC = () => {
  return (
    <footer css={[outer, SiteFooter]}>
      <div css={[inner, SiteFooterContent]}>
        <section className="copyright">
          <Link to="/">{config.title}</Link> &copy; {new Date().getFullYear()}{' '}
          {config.footer && (
            <Link to="/">
              | Made with ❤️ by {config.title}
            </Link>
          )}
        </section>
      </div>
    </footer >
  );
};

const SiteFooter = css`
  position: relative;
  padding-top: 4px;
  padding-bottom: 4px;
  font-size: 1.2rem;
  color: ${colors.royalty.gold};
  background-color: ${colors.royalty.blue};
`;

const SiteFooterContent = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  /* color: rgba(255, 255, 255, 0.7); */
  color: ${colors.royalty.gold}
  font-size: 1.3rem;
  a {
    color: ${colors.royalty.gold};
  }
  a:hover {
    color: ${lighten(`.1`, colors.royalty.gold)};
    text-decoration: none;
  }
  ${bpMaxSM} {
    flex-direction: column;
  }
`;


