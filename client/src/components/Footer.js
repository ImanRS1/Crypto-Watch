import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterTitle>Github Logo</FooterTitle>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.div`
  background-color: #1f1f1f;
  width: 100vw;
  bottom: 0;
  position: sticky;
  height: 5rem;
`;

const FooterTitle = styled.div`
  padding: 1rem;
  font-size: 1.2rem;
  box-sizing: border-box;
`;
