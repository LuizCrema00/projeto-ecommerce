import React, { useState } from 'react';
import Banner from "../../componentes/Banner";
import Cabecalho from "../../componentes/Cabecalho";
import Categorias from "../../componentes/Categorias";
import Rodape from '../../componentes/Rodape';

export default function PaginaInicial() {
  const [termoBusca, setTermoBusca] = useState('')

  return (
    <>
        <Cabecalho setTermoBusca={setTermoBusca}/>
        <Banner />
        <Categorias termoBusca={termoBusca}/>
        <Rodape />
    </>
  )
}
