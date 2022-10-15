import React from 'react';
import Teste from '../assets/teste.png'
import * as S from '../styles/WorksStyles.js'


export default function Work() {
  return (
    <body>
      <S.Works>
        <S.Htwo>Projetos</S.Htwo>
        <S.containerProjects>
        <S.Moldura>
          <S.Project src={Teste} alt=""/>
          <figcaption>PortFlow</figcaption>
        </S.Moldura>
        <S.Moldura>
          <S.Project src={Teste} alt=""/>
          <figcaption>Harry Potter</figcaption>
        </S.Moldura>
        <S.Moldura>
          <S.Project src={Teste} alt=""/>
          <figcaption>To-Do</figcaption>
        </S.Moldura>
        <S.Moldura>
          <S.Project src={Teste} alt=""/>
          <figcaption>ODS</figcaption>
        </S.Moldura>
        <S.Moldura>
          <S.Project src={Teste} alt=""/>
          <figcaption>Projeto em desenvolvimento, volte mais tarde</figcaption>
        </S.Moldura>
        </S.containerProjects>
      </S.Works>
    </body>
  );
}