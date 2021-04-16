import styled from 'styled-components';
import ImgBg from '../../resources/Background.png'

export const HeroContainer = styled.div`
position: absolute;
width: 100%;
height: 100%;
// left: 0px;
// top: 0px;


font-style: normal;
font-weight: normal;
font-size: 60px;
line-height: 73px;
letter-spacing: 0.13em;

color: #E1B486;

background: url(${ImgBg});
box-shadow: inset 280px 280px 280px 90px rgba(0, 0, 0, 0.7);
background-position: center;
background-size: cover;
`;

export const Japan = styled.p`
position: absolute;
width: 5%;
height: 30%;
left: 5%;
top: 349px;


font-style: normal;
font-weight: 300;
line-height: 56px;
letter-spacing: 0.13em;

color: #E1B486;
`;

export const Welcome = styled.p`
font-size: 60px;
position: absolute;
width: 460px;
height: 65px;
left: 153px;
top: 350px;
`;

export const To = styled.p`
font-size: 40px;
position: absolute;
width: 69px;
height: 42px;
left: 192px;
top: 445px;

`;

export const Name = styled.p`
font-size: 40px;
position: absolute;
width: 363px;
height: 52px;
left: 233px;
top: 517px;
`;
