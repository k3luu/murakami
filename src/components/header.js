import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "@emotion/styled"

const HeaderContainer = styled.header`
  height: 60px;
  display: flex;
  align-items: center;
  position: absolute;
  z-index: 1;
  background-color: #fff;
  width: 100%;
`;

const SiteName = styled.div`
  font-family: 'Raleway';
  font-size: 24px;
  font-weight: 300;
  color: #000;
  margin: 0;
  padding: 0 40px;
  text-transform: uppercase;

  a {
    color: #000;
  }
`;

const Header = ({ siteTitle }) => (
  <HeaderContainer>
    <SiteName>
      <Link
        to="/"
        style={{
          textDecoration: `none`,
        }}
      >
        {siteTitle}
      </Link>
    </SiteName>
  </HeaderContainer>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
