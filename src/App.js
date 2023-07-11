import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PaginaInicial from './Paginas/PaginaInicial';
import Login from './Paginas/Login'
import Cadastro from './Paginas/Cadastro';


function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<PaginaInicial />}/>
              <Route path="/login" element={<Login />} />
              <Route path="/cadastro" element={<Cadastro />} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
