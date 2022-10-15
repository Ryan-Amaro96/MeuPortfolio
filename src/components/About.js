import React from 'react';
import htmlIcon from '../assets/htmlLog.png';
import cssIcon from '../assets/cssLog.png';
import jsIcon from '../assets/jsLog.png';
import reactIcon from '../assets/reactLog.png';
import * as S from '../styles/AboutStyles';



export default function About() {
  return (
    <S.AboutMe>
      <S.CompleteDesc>
        <S.Htwo>Sobre mim:</S.Htwo>
        <S.Description>Meu nome é Ryan, tenho 19 anos. Tive meu primeiro contato com programação em março "?" de 2022, quando comecei o curso de desenvolvedor front-end no Vai Na Web. De lá pra cá, fui cada vez mais gostando e me interessando pela prática, e meu objetivo é, brevemente, me tornar um  desenvolvedor Full Stack.</S.Description>
      </S.CompleteDesc>
      <S.CompleteSkills>
        <S.Htwo>Habilidades:</S.Htwo>
        <S.Skills>
          <S.Fig>
            <S.Lang src={htmlIcon} alt="logo HTML" />
            <S.Leg>HTML</S.Leg>
          </S.Fig>
          <S.Fig>
            <S.Lang src={cssIcon} alt="logo Css" />
            <S.Leg>CSS</S.Leg>
          </S.Fig>
          <S.Fig>
            <S.Lang src={jsIcon} alt="logo Javascript" />
            <S.Leg>JAVASCRIPT</S.Leg>
          </S.Fig>
          <S.Fig>
            <S.Lang src={reactIcon} alt="logo React" />
            <S.Leg>REACT.JS</S.Leg>
          </S.Fig>
        </S.Skills>
      </S.CompleteSkills>

    </S.AboutMe>
  );
}