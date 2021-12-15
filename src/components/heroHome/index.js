import React from 'react'
import { HeroContainer, HeroBg, VideoBg } from './HeroHomeElements'
import Video from "../../videos/video.mp4"
const HomeHero = () => {
    return (
        <HeroContainer id="home">
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type="video/mp4"/>
            </HeroBg>
        </HeroContainer>
    )
}

export default HomeHero
