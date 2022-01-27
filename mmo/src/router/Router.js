import { Routes, Route, Navigate } from "react-router-dom";
import { Jogos } from '../componentes/Jogo'

export const Router = () => {
    <Routes>
        <Route path='/' element={<Jogos />} />
        <Route path='*' element={<Navigate replace to='/' />} />

    </Routes>
}