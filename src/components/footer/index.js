import React from "react";
import {
  FooterWrapper,
  FooterContainer,
  FooterLinkTitle,
  Row,
  IconLink,
  ThankYouText,
} from "./FooterElements";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrapper>
        {/* <FooterLinkTitle>Personal Links</FooterLinkTitle> */}
        <Row>
          <IconLink>Email</IconLink>
          <IconLink>LinkedIn</IconLink>
          <IconLink>Github</IconLink>
        </Row>

        <ThankYouText>Thank you so much for visting my site !</ThankYouText>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
