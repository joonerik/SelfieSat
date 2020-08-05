import React from "react";

import { IconContext } from "react-icons";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import styled, { css } from "styled-components";

function Footer() {
  return (
    <FooterContainer className="main-footer">
      <div className="container">
        <SocialMediaIconsContainer>
          <a>
            <FaFacebook />
          </a>
          <a>
            <FaInstagram />
          </a>
          <a>
            <FaTwitter />
          </a>
          <a>
            <FaLinkedin />
          </a>
        </SocialMediaIconsContainer>
        <PageLinksContainer>
          <a>Home</a>
          <Dot />
          <a>OrbitWIKI</a>
          <Dot />
          <a>Get Started</a>
          <Dot />
          <a>About Us</a>
        </PageLinksContainer>
        <PageLinksContainer privacy>
          <a>Terms of Use</a>
          <Dot />
          <a>Privacy Policy</a>
        </PageLinksContainer>
        <div className="footer-bottom">
          <p>&copy;{new Date().getFullYear()} OrbitNTNU - SelfieSat</p>
        </div>
      </div>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  width: 100%;
  height: 300px;
  background: #050b10;
  left: 0;
  bottom: 0;

  .container {
    width: 100%;
    height: 100%;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .footer-bottom {
    color: #363f4a;
  }
`;

const SocialMediaIconsContainer = styled.div`
  font-size: 45px;
  margin-bottom: 20px;
  a {
    margin: 5px;
  }
`;

const PageLinksContainer = styled.div`
  display: flex;
  align-items: center;

  a {
    margin: 5px;
  }
`;

const Dot = styled.span`
  height: 7px;
  width: 7px;
  background-color: #464c55;
  border-radius: 50%;
  display: inline-block;
`;

export default Footer;
