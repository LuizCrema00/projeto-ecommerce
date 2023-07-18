import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PaginaInicial from './Paginas/PaginaInicial';
import Login from './Paginas/Login'
import Cadastro from './Paginas/Cadastro';
import Produto from './componentes/Produto';
import Carrinho from './componentes/Carrinho';

function App() {

  const [carrinho, setCarrinho] = useState([]);

  const adicionarProdutoAoCarrinho = (produto) => {
    const produtoExistente = carrinho.find((item) => item.id === produto.id);

    if (produtoExistente) {
      const novoCarrinho = carrinho.map((item) => {
        if (item.id === produto.id) {
          return { ...item, quantidade: item.quantidade + 1 };
        }
        return item;
      });
      setCarrinho(novoCarrinho);
    } else {
      setCarrinho((prevCarrinho) => [...prevCarrinho, { ...produto, quantidade: 1 }]);
    }
  };

  const removerProdutoDoCarrinho = (produtoId) => {
    const novoCarrinho = carrinho.filter((item) => item.id !== produtoId);
    setCarrinho(novoCarrinho);
  };

  const aumentarQuantidade = (produtoId) => {
    const novoCarrinho = carrinho.map((item) => {
      if (item.id === produtoId) {
        return { ...item, quantidade: item.quantidade + 1 };
      }
      return item;
    });
    setCarrinho(novoCarrinho);
  };

  const diminuirQuantidade = (produtoId) => {
    const novoCarrinho = carrinho.map((item) => {
      if (item.id === produtoId) {
        return { ...item, quantidade: item.quantidade - 1 };
      }
      return item;
    });
    setCarrinho(novoCarrinho);
  };
  
  return (
    <div className="App">
        <BrowserRouter>
              <Routes>
                <Route path="/" element={<PaginaInicial />}/>
                <Route path="/login" element={<Login />} />
                <Route path="/cadastro" element={<Cadastro />} />
                <Route
                    path="/produto/:id"
                    element={<Produto adicionarAoCarrinho={adicionarProdutoAoCarrinho} carrinho={carrinho} />}
                />
                <Route path="/carrinho" element=
                {<Carrinho carrinho={carrinho} 
                    removerDoCarrinho={removerProdutoDoCarrinho}
                    aumentarQuantidade={aumentarQuantidade}
                    diminuirQuantidade={diminuirQuantidade}
                />} 
                />
              </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
