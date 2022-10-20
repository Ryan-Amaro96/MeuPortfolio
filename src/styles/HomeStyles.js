import styled, { keyframes } from 'styled-components';

export const Section = styled.section`
width:100%;
background-color:#140f07;
color:#fffaf2;
display:flex;
justify-content:space-around;
align-items:center;
@media (max-width:1000px){
    flex-direction: column-reverse;
    justify-content:space-between;
}
`

export const ContainerAll = styled.div`
display:flex;
flex-direction: column;
justify-content:space-between;
height:87.8vh;
@media (max-width:1000px){
    height:600px;
    justify-content:flex-end;
    
}
`

export const ContainerText = styled.div`
margin-top:18%;
@media (max-width:1000px){
    margin-top:0;
    
}
`

export const Hone = styled.h1`
font-size:28px;
color:#850b14;
margin-left:15px;
`

export const Info = styled.p`
font-size:25px;
width:70%;
margin-left:15px;
`

export const Htwo = styled.h2`
font-size:28px;
color:#850b14;
margin-top:25%;
margin-left:15px;

`

export const ContainerSocial = styled.div`
width:80%;
height:110px;
display:flex;
justify-content: space-around;
align-items:flex-end;
flex-wrap:wrap;
`

export const slideTop = keyframes`
    0% {
        -webkit-transform: translateY(100px);
              transform: translateY(100px);
    }
    100% {
        -webkit-transform: translateY(0);
              transform: translateY(0);
    }
`

export const Fig = styled.figure`
width:32%;
height:100px;
display:flex;
flex-direction:column;
align-items:center;
color:#140f07;
background-color:#850b14;
border-radius: 10px 10px 0 0;
-webkit-animation: ${slideTop} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
animation: ${slideTop} 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
`

export const Social = styled.img`
width:50px;
`

export const Leg = styled.figcaption`

`

export const Me = styled.img`
width:300px;
border-radius:10px;
object-fit:cover;
@media (max-width:1000px){
    margin-top:15px;
}
`


