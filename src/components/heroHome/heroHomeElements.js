import styled from "styled-components";
import { FaGithubAlt, FaLinkedin } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { Link as LinkScroll } from "react-scroll";
export const HeroContainer = styled.div`
  background: #0c0c0c;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 900px;
  position: relative;
  z-index: 1;
  @media screen and (max-width: 900px) {
    height: 850px;
  }
  @media screen and (max-width: 1200px) {
    height: 800px;
  }
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;
export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
  opacity: 0.75;
`;
export const Img = styled.img`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: #232a34;
  opacity: 0.75;
  object-position: 65%;
`;
export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100%;
`;
export const HeroH1 = styled.h1`
  text-shadow: 2px 2px 4px #000, 0px 0px 20px #000, 0px 0px 6px #000;
  // text-shadow: 2px 2px 4px #000000;
  color: #fff;
  font-size: 52px;
  text-align: center;
  //   font-family: 'Playfair Display', serif;

  @media screen and (max-width: 768px) {
    font-size: 48px;
  }
`;
export const HeroH2 = styled.h2`
  text-shadow: 2px 2px 4px #000, 0px 0px 20px #000, 0px 0px 6px #000;
  // text-shadow: 2px 2px 4px #000000;
  // font-family: 'Playfair Display', serif;
  margin-top: 24px;
  color: #fff;
  font-size: 32px;
  text-align: center;
  max-width: 600px;
  margin-bottom: 75px;

  @media screen and (max-width: 768px) {
    font-size: 28px;
    margin-bottom: 30px;
  }
`;
export const HeroBtnsWrapper = styled.div`
  margin: 2rem;
  margin-top: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 5;
  @media screen and (max-width: 768px) {
    justify-content: space-between;
  }
  @media screen and (max-width: 447px) {
    justify-content: space-between;
    flex-direction: column;
  }
`;
export const GithubIcon = styled(FaGithubAlt)`
  font-size: 32px;
  margin-right: 16px;
  margin-left: 16px;
`;
export const LinkedInIcon = styled(FaLinkedin)`
  font-size: 32px;
  margin-right: 16px;
  margin-left: 16px;
`;
export const EmailIcon = styled(FiMail)`
  font-size: 24px;
`;
export const AnchorIcon = styled(LinkScroll)`
  position: absolute;
  bottom: 45px;
  color: #fff;
  text-shadow: 2px 2px 4px #000000;
  justify-self: flex-start;
  cursor: pointer;
  font-size: 2rem;
  display: flex;
  align-self: center;
  font-weight: bold;
  text-decoration: none;
  z-index: 7;
  &:hover {
    color: #1969ea;
    text-shadow: 2px 2px 4px #fff;
    font-size: 2.5rem;
  }
`;
