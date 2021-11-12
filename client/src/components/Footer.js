import React from "react";
import styled from "styled-components";
import iLogo from '../images/I.png'
import geckoLogo from '../images/gecko.png'

const Footer = () => {
  return (
    <FooterContainer>
      <FooterTitle>
        <div className="dev-text"><a href="https://github.com/ImanRS1/Crypto-Watch">Developed by <img src={iLogo} alt={iLogo} /></a></div>
        <div className="api-text"><a href="https://www.coingecko.com/en/api/documentation">Powered by <img src={geckoLogo} alt={geckoLogo} /></a></div>
        
        </FooterTitle>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.div`
  background-color: #282c34;
  width: 100vw;
  bottom: 0;
  position: sticky;
  height: 4.2rem;
  border-top: 1px solid black;
`;

const FooterTitle = styled.div`
  box-sizing: border-box;
  padding: 0.4rem;
  font-size: 1.2rem;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .dev-text a{
    display: flex;
    align-items: center;
  }

  .api-text {
    margin-top: 0.5rem;
    font-size: 1rem;
   
  }

  .api-text a{
    display: flex;
    align-items: center;
  }

  img{
    margin-left: 0.2rem;
    margin-top: 0.2rem;
    width: 1rem;
    height: 1rem;
  }
`;
