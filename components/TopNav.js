import { darken } from "polished";
import React from "react";
import styled from "styled-components";

const TopNavContainer = styled.section`
  background-color: ${({ theme: { colors } }) => colors.secondary};
  box-shadow: 0px 3px 10px
    ${({ theme: { colors } }) => darken(0.3, colors.secondary)};
  padding: 8px 0;
  margin-bottom: 25px;
`;

const Logo = styled.img`
  width: 50px;
  margin-right: 8px;
`;

const DivFlex = styled.div`
  display: flex;
  align-items: center;
`;

const WebTitle = styled.h1`
  margin: 0;
  font-size: 30px;
  color: #eac00b;
  display: flex;
  align-items: center;
`;

const TopNav = ({ children }) => (
  <TopNavContainer>
    <div className="container">
      <div className="row">
        <DivFlex className="col-md-5">
          <Logo src="/logo.png" />
          <WebTitle>Milo Cup - (Mile / Kilo Club)</WebTitle>
        </DivFlex>
        {children && <div className="col-md-7">{children}</div>}
      </div>
    </div>
  </TopNavContainer>
);

export default TopNav;
