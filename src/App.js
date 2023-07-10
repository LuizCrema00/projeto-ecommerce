import React, { useState } from 'react';
import Banner from "./componentes/Banner";
import Cabecalho from "./componentes/Cabecalho";
import Categorias from "./componentes/Categorias";
import Rodape from './componentes/Rodape';

function App() {

  const [termoBusca, setTermoBusca] = useState('')

  return (
    <div className="App">
        <Cabecalho setTermoBusca={setTermoBusca}/>
        <Banner />
        <Categorias termoBusca={termoBusca}/>
        <Rodape />
    </div>
  );
}

export default App;
