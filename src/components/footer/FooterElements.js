import styled from "styled-components";

export const FooterContainer = styled.footer`
  background-color: #202022;
  padding: 48px 24px;
  border-top: solid 2px;
  border-color: #fff;
`;
export const FooterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  color: #fff;
  text-align: center;
`;
export const FooterLinkTitle = styled.h3`
  font-size: 1.5rem;
`;
export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  max-width: 500px;
  margin: 25px 0;
`;
export const IconLink = styled.a`
  color: #fff;
  text-decoration: none;
  padding: 0 1rem;
  cursor: pointer;
  font-size: 1.5rem;
  &:hover {
    color: #1969ea;
    // text-shadow: 2px 2px 4px #fff;
  }
`;

export const ThankYouText = styled.h2`
  font-size: 1.35rem;
  // weight: bold;
  // font-family: "Raleway", sans-serif;
`;
