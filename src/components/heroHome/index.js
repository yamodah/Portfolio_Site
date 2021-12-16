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
} from "./HeroHomeElements";

import { Button } from "../ButtonElement/Button";
import Video from "../../videos/oceanDarkWater.mp4";
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
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Yassine Dahlek.</HeroH1>
        <HeroH2>Coding, Learning & Problem Solving.</HeroH2>
        <HeroBtnsWrapper>
          <Button onMouseEnter={handleHoverG} onMouseLeave={handleHoverG}  big="true" fontBig="true" primary="true"
          href="https://github.com/yamodah"
          target='_blank'
          rel="noopener"
          aria-label='Github'>{hoverG ? <GithubIcon /> : "Github"}</Button>
          <Button onMouseEnter={handleHoverL} onMouseLeave={handleHoverL} big="true" fontBig="true"
          href="https://www.linkedin.com/in/yassine-dahlek"
          target='_blank'
          rel="noopener"
          aria-label='LinkedIn'>{hoverL ? <LinkedInIcon /> : "LinkedIn"}</Button>
          {/* <Button onMouseEnter={handleHoverE} onMouseLeave={handleHoverE} primary="true" big="true">{hoverE ? <EmailIcon /> : "Email"}</Button> */}
        </HeroBtnsWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HomeHero;
