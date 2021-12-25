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
          <IconLink href="mailto:yassinedahlek@gmail.com">
            <GrMail />
          </IconLink>
          <IconLink
            href="https://www.linkedin.com/in/yassine-dahlek"
            target="_blank"
            rel="noopener"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </IconLink>
          <IconLink
            href="https://github.com/yamodah"
            target="_blank"
            rel="noopener"
            aria-label="Github"
          >
            <FaGithubAlt />
          </IconLink>
        </Row>

        <ThankYouText>
          Thank you so much for visting my site ! - Yassine
        </ThankYouText>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
