import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing:border-box;
    list-style:none;
  }
  &::-webkit-scrollbar{
    width:15px;
  }
  &::-webkit-scrollbar-track{
    background-color: #131313;
  }
  &::-webkit-scrollbar-thumb{
    background-color:#850b14;
    border-radius: 10px;
  }
`;
