import styled from 'styled-components';
import {Link} from 'react-router-dom';

export const Cabecalho = styled.header`
width:100%;
height:80px;
border-bottom:solid #850b14 4px;
background-color:#140f07;
display:flex;
justify-content:center;
align-items:center;
@media (max-width:600px){
    justify-content:flex-start;
}
`

export const Menu = styled.nav`
width:50%;
display:flex;
justify-content: center;
align-items:center;
@media (max-width:600px){
display:none;
}
`

export const Containerlista = styled.ul`
list-style:none;
width:100%;
display:flex;
justify-content: space-around;
align-items: center;
`
export const Lista =styled.li`
width:33%;
color:#fffaf2;
display:flex;
align-items:center;
justify-content:center;
font-size:30px;
`

export const Links= styled(Link)`
text-decoration:none;
color:#fffaf2;
&:hover{
    color:#850b14;
}
`

export const Ham= styled.button`
display:none;
@media (max-width:600px){
    height:40px;
    width:50px;
    font-size:30px;
    display:initial;
    border:none;
    background-color:transparent;
    color:#850b14;;
}
`

export const MenuHam = styled.nav`
width:80%;
display:flex;
justify-content:center;
background-color:Black;
border:solid;
`

export const LinkH = styled(Link)`
text-decoration:none;
color:#850b14;
`