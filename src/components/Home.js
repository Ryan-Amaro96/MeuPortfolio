import React from 'react';
import * as S from '../styles/HomeStyles';
import InstaIcon from '../assets/pngegg.png'
import me from '../assets/me.jpg'
import email from '../assets/emailIcon.png'
import gitH from '../assets/githubIcon.png'

export default function Home() {

  return (
    <S.Section>
      <S.ContainerAll>
        <S.ContainerText>
          <S.Hone>Olá mundo,</S.Hone>
          <S.Info>Meu nome é Ryan Amaro e sou Desenvolvedor Front-End</S.Info>
        </S.ContainerText>
        <S.Htwo>Contatos:</S.Htwo>
        <S.ContainerSocial>        
          <S.Fig>
            <a href="https://www.linkedin.com/in/ryan-amaro-581992253/" target="_blank"><S.Social src={InstaIcon} alt="Logo LinkedIn" /></a>
            <S.Leg>Meu LinkedIn</S.Leg>
          </S.Fig>
          <S.Fig>
            <a href="mailto:ryanamaro2003.st@gmail.com" target="_blank"><S.Social src={email} alt="Logo Email" /></a>
            <S.Leg>Meu Email</S.Leg>
          </S.Fig>
          <S.Fig>
            <a href="https://github.com/Ryan-Amaro96" target="_blank"><S.Social src={gitH} alt="Logo Github" /></a>
            <S.Leg>Meu Github</S.Leg>
          </S.Fig>
        </S.ContainerSocial>
      </S.ContainerAll>
      <S.Me src={me} alt="" />
    </S.Section>
  );
}