import styled from "styled-components";

export const ProjectsContainer = styled.div`
  height: 2000px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 160px 100px 0 100px;
  background-color: rgba(25, 25, 76, 0.8);
  font-family: "Raleway", sans-serif;

  @media screen and (max-width: 768px) {
    padding: 160px 50px 0 50px;
    height: 100%;
  } ;
`;
