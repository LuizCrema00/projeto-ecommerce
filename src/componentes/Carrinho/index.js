import { Link } from 'react-router-dom';
import Cabecalho from '../Cabecalho'
// import Rodape from '../Rodape'
import styles from './Carrinho.module.css'
import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

export default function Carrinho({
    carrinho,
    removerDoCarrinho,
    aumentarQuantidade,
    diminuirQuantidade,
  }) {

    const [quantidadeProdutos, setQuantidadeProdutos] = useState(0);

    useEffect(() => {
      const quantidade = carrinho.reduce(
        (total, produto) => total + produto.quantidade,
        0
      );
  
      setQuantidadeProdutos(quantidade);
    }, [carrinho]);

    const formatarPreco = (preco) => {
        return new Intl.NumberFormat("pt-BR", {
          style: "currency",
          currency: "BRL",
        }).format(preco);
      };
    
      const calcularPrecoTotal = () => {
        return carrinho.reduce((total, produto) => {
          const preco = parseFloat(produto.preco.replace(".", "").replace(",", "."));
          return total + preco * produto.quantidade;
        }, 0);
      };
  
      return (
        <div>
          <Cabecalho quantidadeProdutos={quantidadeProdutos}/>
          {carrinho.length === 0 ? (
            <div className={styles.carrinho_vazio}>
              <h1>Seu carrinho está vazio <FontAwesomeIcon icon={faCartShopping} size="2xl" style={{color: "#000000",}} /></h1>
              <p>Navegue pelos nossos produtos!</p>
              <Link to='/' className={styles.btn_carrinho_vazio}>Ver produtos</Link>
            </div>
          ) : (
            <div className={styles.carrinho}>
              <div className={styles.container}>
                <h1>Meu Carrinho de compras</h1>
                <table className={styles.table}>
                  <thead>
                    <tr className={styles.cabecalho}>
                      <th>Produto</th>
                      <th>Preço Unitário</th>
                      <th>Quantidade</th>
                      <th>Preço Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {carrinho.map((produto) => (
                      <tr className={styles.card_produto} key={produto.id}>
                        <td>
                          <div className={styles.produto}>
                            <img src={produto.imagem} alt={produto.titulo} />
                            <p>{produto.titulo}</p>
                          </div>
                        </td>
                        <td>R${produto.preco}</td>
                        <td>
                          <div className={styles.quantidade_container}>
                            <div className={styles.botoes}>
                              <button onClick={() => diminuirQuantidade(produto.id)}>-</button>
                              <p>{produto.quantidade}</p>
                              <button onClick={() => aumentarQuantidade(produto.id)}>+</button>
                            </div>
                            <button className={styles.remover} onClick={() => removerDoCarrinho(produto.id)}>remover</button>
                          </div>
                        </td>
                        <td>
                          {formatarPreco(
                            parseFloat(
                              (
                                parseFloat(produto.preco.replace(".", "").replace(",", ".")) *
                                produto.quantidade
                              ).toFixed(2)
                            )
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className={styles.preco_total_container}>
                <p className={styles.resumo}>Resumo do pedido</p>
                <p className={styles.preco_total}>
                  Preço Total do Carrinho:{" "}
                  {formatarPreco(parseFloat(calcularPrecoTotal().toFixed(2)))}
                </p>
                <button className={styles.btn_compra}>
                  Continuar
                </button>
                <p className={styles.link}><Link to='/'>Adicionar mais produtos</Link></p>
              </div>
            </div>
          )}
          {/* <Rodape /> */}
        </div>
      );
      
      
  }
