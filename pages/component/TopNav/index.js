import React from "react";
import styled from "styled-components";

const TopNavContainer = styled.section`
  background-color: rgba(24, 24, 24, 0.8);
  padding: 8px 0;
`;

const Logo = styled.img`
  width: 50px;
`;

const DivFlex = styled.div`
  display: flex;
`;

const WebTitle = styled.h1`
  margin: 0;
  font-size: 30px;
  color: #fff;
  display: flex;
`;

const TopNav = ({ children }) => (
  <TopNavContainer>
    <div className="container">
      <div className="row">
        <DivFlex className="col-md-4">
          <Logo src="/logo.png" />
          <WebTitle>Milo Cup</WebTitle>
        </DivFlex>
        {children && <div className="col-md-8">{children}</div>}
      </div>
    </div>
  </TopNavContainer>
);

export default TopNav;
