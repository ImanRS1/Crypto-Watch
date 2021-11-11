import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderTitle>Crypto Watch</HeaderTitle>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
 background-color: #282c34;
  width: 100vw;
`;

const HeaderTitle = styled.div`
  padding: 1.5rem;
  font-size: 4rem;
  box-sizing: border-box;
  text-decoration: underline;
`;
