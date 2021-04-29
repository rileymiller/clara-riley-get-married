import { Link } from 'gatsby';
import { lighten } from 'polished';
import React from 'react';
import { css } from '@emotion/react';

import { bgColor, colors, textColor } from '../styles/colors';
import { outer, inner } from '../styles/shared';
import config from '../website-config';
import { bpMaxSM } from '../styles/breakpoints';

export const Footer: React.FC = () => {
  return (
    <footer css={[outer, SiteFooter]}>
      <div css={[SiteFooterContent]}>
        <section className="copyright">
          <Link to="/">{config.title}</Link> &copy; {new Date().getFullYear()}{' '}
          {config.footer && (
            <Link to="/">
              | Made with ❤️ by {config.title}
            </Link>
          )}
        </section>
        <section>
          #clarasallriledup
        </section>
      </div>
    </footer >
  );
};

const SiteFooter = css`
  position: absolute;
  bottom: 0;
  width:100%;
  padding-top: 2px;
  padding-bottom: 2px;
  font-size: 1.2rem;
  color: ${textColor.secondary};
  background-color: ${bgColor.secondary};
`;

const SiteFooterContent = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  /* color: rgba(255, 255, 255, 0.7); */
  color: ${textColor.secondary}
  font-size: 1.3rem;
  a {
    color: ${textColor.secondary};
  }
  a:hover {
    color: ${lighten(`.1`, textColor.secondary)};
    text-decoration: none;
  }
  ${bpMaxSM} {
    flex-direction: column;
  }
`;

