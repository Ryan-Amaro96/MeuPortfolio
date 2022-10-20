import React from 'react';
import Teste from '../assets/teste.png';
import prjct1 from '../assets/projeto1.jpg';
import prjct2 from '../assets/projeto2.jpg';
import prjct3 from '../assets/toDo.jpg';
import Load from '../assets/loading.jpg';
import * as S from '../styles/WorksStyles.js';


export default function Work() {
  return (
    <body>
      <S.Works>
        <S.Htwo>Projetos</S.Htwo>
        <S.containerProjects>
        <S.Moldura>
          <S.Ancora href="https://github.com/Ryan-Amaro96/Portflow-Ryan" target="_blank"><S.Project src={prjct1} alt="Imagem do meu primeiro grande projeto, criado utilizando apenas html e css puro."/></S.Ancora>
          <h3>PortFlow</h3>
      <S.Leg>Meu primeiro grande projeto, criado utilizando apenas html e css puro.</S.Leg>
        </S.Moldura>
        <S.Moldura>
          <S.Ancora href="https://1uujd2.csb.app/" target="_blank"><S.Project src={prjct2} alt="Imagem de um projeto, onde consumo uma API do Harry Potter, com React.js."/></S.Ancora>
          <h3>Harry Potter</h3>
          <S.Leg>Projeto onde consumo uma API do Harry Potter com React.js.</S.Leg>
        </S.Moldura>
        <S.Moldura>
          <S.Ancora href="https://50hodj.csb.app/" target="_blank"><S.Project src={prjct3} alt="To do list feita com React.js."/></S.Ancora>
          <h3>To-Do</h3>
          <S.Leg>To do list feita com React.js.</S.Leg>
        </S.Moldura>
        <S.Moldura>
          <S.Ancora href="" target="_blank"><S.Project src={Teste} alt=""/></S.Ancora>
          <h3>ODS</h3>
          <S.Leg>Objetivos de desenvolvimento sustentável (ONU) da minha cidade.</S.Leg>
        </S.Moldura>
        <S.Moldura>
          <S.Loading src={Load} alt=""/>
          <S.Leg>Projeto em desenvolvimento, volte mais tarde!</S.Leg>
        </S.Moldura>
        </S.containerProjects>
      </S.Works>
    </body>
  );
}