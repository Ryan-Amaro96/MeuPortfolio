import React, { useState } from 'react';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import * as S from '../styles/HeaderStyles.js'
import Home from './Home';
import About from './About';
import Works from './Works';


export default function Header() {
    const [open, setOpen] = useState(false);

    const Modal = () => {
        return (
            <S.MenuHam>
                <ul>
                    <li>
                        <S.LinkH to="/">Home</S.LinkH>
                    </li>
                    <li>
                        <S.LinkH to="/about">About</S.LinkH>
                    </li>
                    <li>
                        <S.LinkH to="/works">Works</S.LinkH>
                    </li>
                </ul>
            </S.MenuHam>
        );
    };


    return (
        <BrowserRouter>
            <S.Cabecalho>


                <S.Ham onClick={() => {
                    setOpen(!open);
                }}>{open === true ? "x" : "≡"}</S.Ham>
                {open && Modal()}
                <S.Menu>
                    <S.Containerlista>
                        <S.Lista>
                            <S.Links to="/">Home</S.Links>
                        </S.Lista>
                        <S.Lista>
                            <S.Links to="/about">About</S.Links>
                        </S.Lista>
                        <S.Lista>
                            <S.Links to="/works">Works</S.Links>
                        </S.Lista>
                    </S.Containerlista>
                </S.Menu>
            </S.Cabecalho>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/works" element={<Works />} />
            </Routes>
        </BrowserRouter>

    )
}