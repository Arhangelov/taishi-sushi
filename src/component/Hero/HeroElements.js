import styled from "styled-components";
import ImgBg from "../../resources/Background.png";

export const HeroContainer = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;

  font-style: normal;
  font-weight: normal;

  color: #e1b486;

  background: url(${ImgBg});

   box-shadow: inset 280px 280px 280px 90px rgba(0, 0, 0, 0.7);
   /* mask-image: linear-gradient(to top, rgba(21, 15, 15, 1), transparent); */
  background-position: center;
  background-size: cover;

`;

export const Japan = styled.p`
  position: absolute;
  width: 5%;
  height: 30%;
  left: 5%;
  top: 10%;

  font-style: normal;
  font-size: 3rem;
  font-weight: 300;
  line-height: 56px;
  letter-spacing: 0.13em;

  color: #e1b486;
`;

export const Welcome = styled.p`
  font-size: 3.5rem;
  position: absolute;
  width: 10%;
  height: 5%;
  left: 10%;
  top: 10%;
`;

export const To = styled.p`
  font-size: 40px;
  position: absolute;
  width: 69px;
  height: 42px;
  left: 11%;
  top: 23%;
`;

export const Name = styled.p`
  font-size: 40px;
  position: absolute;
  width: 363px;
  height: 52px;
  left: 11%;
  top: 33%;
`;
