import React, {useState} from 'react'
import { HeroContainer, HeroBg, VideoBg, GithubIcon, LinkedInIcon, EmailIcon, Button, HeroBtnsWrapper, HeroContent, HeroH1, HeroH2 } from './HeroHomeElements'
import Video from "../../videos/video.mp4"
const HomeHero = () => {
    const [hover, setHover] = useState(false)
    const handleHover = () =>{
        setHover(!hover)
    }
    return (
        <HeroContainer id="home">
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type="video/mp4"/>
            </HeroBg>
            <HeroContent>
                <HeroH1>
                    Yassine Dahlek.
                </HeroH1>
                <HeroH2>
                    Coding, Learning & Problem Solving.
                </HeroH2>
                <HeroBtnsWrapper>
                    <Button onMouseEnter={handleHover} onMouseLeave={handleHover}>
                        {hover ? <GithubIcon/>:"Github" }
                    </Button>
                    <Button>
                    {hover ? <LinkedInIcon/>:"LinkedIn" }
                    </Button>
                    <Button>
                    {hover ? <EmailIcon/>:"Email" }
                    </Button>
                </HeroBtnsWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HomeHero
