import React, { Component, useState } from "react";
// import AnchorLink from "react-anchor-link-smooth-scroll"
import Scrollspy from "react-scrollspy";
import { Menu, X } from "react-feather";
import { Link } from "gatsby";

// import { Container } from "../../global"
import {
  ActionsContainer,
  Brand,
  LinkButton,
  Mobile,
  MobileMenu,
  Nav,
  NavItem,
  NavListWrapper,
  StyledContainer,
} from "./NavigationStyles";

const NAV_ITEMS = ["Features"];

export const Container = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0 16px;

  @media (min-width: ${props => props.theme.screen.xs}) {
    max-width: 540px;
  }

  @media (min-width: ${props => props.theme.screen.sm}) {
    max-width: 720px;
  }

  @media (min-width: ${props => props.theme.screen.md}) {
    max-width: 960px;
  }

  @media (min-width: ${props => props.theme.screen.lg}) {
    max-width: 1200px;
  }

  ${props =>
    props.fluid &&
    `
    max-width: 1200px !important;
  `};
`
export const Navigation = () => {
  // state = {
  //   mobileMenuOpen: false,
  //   hasScrolled: false,
  // };

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [hasScrolled, setHasScrolled] = useState(false)
  const handleScroll = (event: any) => {
    const scrollTop = window.pageYOffset;

    if (scrollTop > 32) {
      this.setState({ hasScrolled: true });
    } else {
      this.setState({ hasScrolled: false });
    }
  };
  componentDidMount() {
    window.addEventListener("scroll", handleScroll);
  }


  const toggleMobileMenu = () =>
    setMobileMenuOpen(!mobileMenuOpen)


  const closeMobileMenu = () => setMobileMenuOpen(false)

  const getNavAnchorLink = (item: string) => (
    <Link href={`/#${item.toLowerCase()}`} onClick={() => closeMobileMenu()}>
      {item}
    </Link>
  );

  const getNavList = ({ mobile = false }) => (
    <NavListWrapper mobile={mobile}>
      <Scrollspy
        items={NAV_ITEMS.map(item => item.toLowerCase())}
        currentClassName="active"
        // mobile={mobile}
        offset={-64}
      >
        {NAV_ITEMS.map(navItem => (
          <NavItem key={navItem}>{getNavAnchorLink(navItem)}</NavItem>
        ))}
      </Scrollspy>
    </NavListWrapper>
  );

  // signUpOnClick = () => {
  //   window.location.href = window.location.host + "/earlyaccess";
  // };

  // const { mobileMenuOpen } = this.state;

  return (
    <Nav scrolled={hasScrolled}>
      <StyledContainer>
        <Brand>
          <Scrollspy offset={-64} items={["top"]} currentClassName="active">
            <Link to="/" onClick={closeMobileMenu}>
              LiveLot
              </Link>
          </Scrollspy>
        </Brand>
        <Mobile>
          <button
            style={{ color: "black", background: "none" }}
            onClick={toggleMobileMenu}
          >
            {mobileMenuOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </button>
        </Mobile>

        <Mobile hide>{getNavList({})}</Mobile>
        <ActionsContainer>
          <LinkButton to="/earlyaccess">Sign up</LinkButton>
        </ActionsContainer>
      </StyledContainer>
      <Mobile>
        {mobileMenuOpen && (
          <MobileMenu>
            <Container>{getNavList({ mobile: true })}</Container>
          </MobileMenu>
        )}
      </Mobile>
    </Nav>
  );
}
