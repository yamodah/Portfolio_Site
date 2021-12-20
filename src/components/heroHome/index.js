import React, { useState } from "react";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  GithubIcon,
  LinkedInIcon,
//   EmailIcon,
  HeroBtnsWrapper,
  HeroContent,
  HeroH1,
  HeroH2,
  AnchorIcon,
} from "./heroHomeElements";

import { Button } from "../ButtonElement/Button";
import Video from "../../videos/oceanDarkWater.mp4";
 import {FaChevronDown} from "react-icons/fa"
const HomeHero = () => {
  const [hoverG, setHoverG] = useState(false);
  const handleHoverG = () => {
    setHoverG(!hoverG);
  };
  const [hoverL, setHoverL] = useState(false);
  const handleHoverL = () => {
    setHoverL(!hoverL);
  };
//   const [hoverE, setHoverE] = useState(false);
//   const handleHoverE = () => {
//     setHoverE(!hoverE);
//   };
  return (
    <HeroContainer id="home">
      <HeroBg>
        <VideoBg autoPlay loop muted playsinline src={Video} type="video/mp4" />
      </HeroBg>
      {/* <FaCloud style={{fontSize:"350px", color:"#1969EA",zIndex:"1", marginTop:"85px", alignSelf:"flex-start", opacity:".45"}}/> */}
      <HeroContent>
      
        <HeroH1>Coding, Learning & Problem Solving</HeroH1>
        <HeroH2>full stack software developer</HeroH2>
        <HeroBtnsWrapper>
          <Button onMouseEnter={handleHoverG} onMouseLeave={handleHoverG}  big="true" fontBig="true" primary="true"
          href="https://github.com/yamodah"
          target='_blank'
          rel="noopener"
          aria-label='Github'>{hoverG ? <GithubIcon /> : "Github"}</Button>
          <Button onMouseEnter={handleHoverL} onMouseLeave={handleHoverL} big="true" fontBig="true" primary="true"
          href="https://www.linkedin.com/in/yassine-dahlek"
          target='_blank'
          rel="noopener"
          aria-label='LinkedIn'>{hoverL ? <LinkedInIcon /> : "LinkedIn"}</Button>
          {/* <Button onMouseEnter={handleHoverE} onMouseLeave={handleHoverE} primary="true" big="true">{hoverE ? <EmailIcon /> : "Email"}</Button> */}
        </HeroBtnsWrapper>
      </HeroContent>
      
        <AnchorIcon to="about">
            <FaChevronDown />
        </AnchorIcon>
    </HeroContainer>
  );
};

export default HomeHero;
