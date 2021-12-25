import React from "react";
import {
  FooterWrapper,
  FooterContainer,
  Row,
  IconLink,
  ThankYouText,
} from "./FooterElements";
import { GrMail } from "react-icons/gr";
import { FaLinkedin, FaGithubAlt } from "react-icons/fa";
const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        {/* <FooterLinkTitle>Personal Links</FooterLinkTitle> */}
        <Row>
          <IconLink>
            <GrMail />
          </IconLink>
          <IconLink>
            <FaLinkedin />
          </IconLink>
          <IconLink>
            <FaGithubAlt />
          </IconLink>
        </Row>

        <ThankYouText>
          Thank you so much for visting my site ! - yassine
        </ThankYouText>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
