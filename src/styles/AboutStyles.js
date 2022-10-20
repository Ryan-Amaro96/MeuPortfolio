import styled, {keyframes} from 'styled-components';

export const AboutMe = styled.section`
width:100%;
height:max-content;
display:flex;
flex-direction:column;
justify-content:space-between;
background-color:#140f07;
`

export const CompleteDesc =styled.div`
display:flex;
flex-direction:column;
align-items:center;
`

export const Htwo = styled.h2`
margin-top:15px;
margin-bottom:25px;
font-size:28px;
color:#850b14;
`

export const Description = styled.p`
width:50%;
text-align:center;
color:#fffaf2;
font-size:25px;
@media (max-width:750px){
    font-size:16px;
    width:65%;
    }
`

export const CompleteSkills = styled.div`
display:flex;
flex-direction:column;
align-items:center;
`

export const Skills = styled.div`
width:100%;
display:flex;
justify-content:space-around;
@media (max-width:700px){
    flex-wrap:wrap;
     align-items:center;
     justify-content:space-evenly; 
    }
`

export const slideTop = keyframes`

    0% {
        
              transform: translateY(400px);
    }
    100% {
        
              transform: translateY(0);
    }
`
/*-webkit-animation: ${slideTop} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
-webkit-transform: translateY(400px);*/
export const Fig = styled.figure`
width:22%;
height:400px;
display:flex;
flex-direction:column;
align-items:center;
justify-content:space-around;
color:#140f07;
background-color:#850b14;
border-radius: 20px 20px 0 0;

animation: ${slideTop} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;

@media (max-width:700px){
    width:40%;
    height:250px;
    border-radius: 20px;
    margin-bottom:20px;
    }
`

export const Lang = styled.img`
width:75%;
`

export const Leg = styled.figcaption`
font-size:25px;
color:#140f07;
`