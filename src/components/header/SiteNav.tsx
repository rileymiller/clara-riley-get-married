import { Link } from 'gatsby';
import { lighten, saturate } from 'polished';
import React from 'react';

import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { colors } from '../../styles/colors';

import config from '../../website-config';

const SiteNav = () => {
  return (
    <nav css={SiteNavStyles}>
      <SiteNavLeft className="site-nav-left">
        <SiteNavContent>
          <ul css={NavStyles} role="menu">
            <li role="menuitem">
              <Link to="/">Home</Link>
            </li>
            <li role="menuitem">
              <Link to="/travel">Travel</Link>
            </li>
            <li role="menuitem">
              <Link to="/faq">FAQ</Link>
            </li>
            <li role="menuitem">
              <Link to="/save-the-date">Save The Date</Link>
            </li>

            <li
              css={css`
                display: block;
              @media (min-width: 700px) {
              display: none !important;
              }
            `} role="menuitem"
            >
              <Link to="/rsvp">RSVP</Link>
            </li>
          </ul>
        </SiteNavContent>
      </SiteNavLeft>
      <SiteNavRight>
        {config.showSubscribe && (
          <Link to="/rsvp">
            <RSVPFormButton>RSVP</RSVPFormButton>
          </Link>
        )}
      </SiteNavRight>
    </nav>
  )
}

const RSVPFormButton = styled.button`
  position: relative;
  display: inline-block;
  margin: 0 0 0 10px;
  padding: 0 20px;
  outline: none;
  color: #fff;
  font-size: 1.5rem;
  line-height: 39px;
  font-weight: 400;
  text-align: center;
  background: ${colors.royalty.ivory};
  color: ${colors.royalty.blue};
  border-radius: 5px;

  -webkit-font-smoothing: subpixel-antialiased;

  :active,
  :focus,
  :hover {
    background: ${saturate('-0.1', lighten('-0.09', colors.royalty.pink))};

    transition: background 0.35s ease-in-out;
  }
  @media (max-width: 500px) {
    margin: 10px 0 0 0;
    width: 100%;
  }
`;

export const SiteNavMain = css`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 9;
  background-color: red;
  @media (max-width: 700px) {
    padding-right: 0;
    padding-left: 0;
  }
`;

const SiteNavStyles = css`
  position: relative;
  z-index: 10;
  display: flex;
  background: ${colors.royalty.blue};
  justify-content: space-between;
  align-items: center;
  font-size: 1.3rem;
  padding: 0.25rem 2rem;
  flex-direction: row;
  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

const SiteNavLeft = styled.div`
  flex: 1 0 auto;
  display: flex;
  align-items: center;
  overflow-x: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  margin-right: 10px;
  font-weight: 500;
  letter-spacing: 0.2px;
  text-transform: uppercase;
  white-space: nowrap;

  -ms-overflow-scrolling: touch;

  @media (max-width: 700px) {
    margin-right: 0;
    padding-left: 5vw;
  }
`;

const SiteNavContent = styled.div`
  display: flex;
  align-self: flex-start;
`;

const NavStyles = css`
  z-index: 10;
  display: flex;
  flex-wrap: wrap;
  margin: 0 0 0 -12px;
  padding: 0;
  list-style: none;
  transition: all 1s cubic-bezier(0.19, 1, 0.22, 1);
  max-width: unset;
  li {
    display: block;
    margin: 0;
    padding: 0;
  }

  li a {
    position: relative;
    display: block;
    padding: 12px 12px;
    color: #fff;
    transition: opacity 0.35s ease-in-out;
  }

  li a:hover {
    text-decoration: none;
    opacity: 1;
  }

  li a:before {
    content: '';
    position: absolute;
    right: 100%;
    bottom: 8px;
    left: 12px;
    height: 1px;
    background: #fff;
    opacity: 0.25;
    transition: all 0.35s ease-in-out;
  }

  li a:hover:before {
    right: 12px;
    opacity: 0.5;
  }
`;

const SiteNavRight = styled.div`
  flex: 0 1 auto;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media (max-width: 700px) {
    display: none;
  }
`;



export default SiteNav;
