import React from "react";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ChevronContainer,
} from "./InfoElements";
import { FaChevronDown } from "react-icons/fa";
const InfoSection = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  headline,
  description,
  darkText,
  description2,
  description3,
  description4,
}) => {

  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow >
            <Column>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <Subtitle darkText={darkText}>{description2}</Subtitle>
                <Subtitle darkText={darkText}>{description3}</Subtitle>
                <Subtitle darkText={darkText}>{description4}</Subtitle>
                <ChevronContainer to="projects">
                    <FaChevronDown/>
             </ChevronContainer>   
              </TextWrapper>
            </Column>
          </InfoRow> 
          
        </InfoWrapper>
       
      </InfoContainer>
    </>
  );
};

export default InfoSection;
