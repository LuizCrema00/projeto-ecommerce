import React from 'react';
import { Link, useParams } from 'react-router-dom';
import fotos from './fotos';
import Cabecalho from '../Cabecalho';
import styles from './Produto.module.css'
import Rodape from '../Rodape';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faRotateLeft } from '@fortawesome/free-solid-svg-icons';


export default function Produto({ adicionarAoCarrinho}) {
  const { id } = useParams();
  const produto = fotos.find((item) => item.id === id);


  if (!produto) {
    return <div>Produto não encontrado</div>;
  }


  const handleAdicionarAoCarrinho = () => {
    adicionarAoCarrinho(produto);
  };

  return (
    <div>
      <Cabecalho />
      <div className={styles.localizacao}>
        <p>Página Inicial > {produto.tag} > {produto.titulo}</p>
        <Link className={styles.btn_voltar} to='/'><FontAwesomeIcon icon={faRotateLeft} />Voltar</Link>
      </div>
      <div className={styles.container}>
            <div className={styles.card_imagem}>
                    <img src={produto.imagem} alt={produto.titulo} />
            </div>
            <div className={styles.card_compra}>
                    <p className={styles.produto_titulo}>{produto.titulo}</p>
                    <p className={styles.produto_preco}>R${produto.preco}</p>
                    <div>
                        <p className={styles.paragrafo}>Descrição</p>
                        <p className={styles.produto_descricao}>{produto.descricao}</p>
                    </div>
                    <Link to='/carrinho' className={styles.btn_compra} onClick={handleAdicionarAoCarrinho}>
                          Adicionar ao carrinho<FontAwesomeIcon icon={faCartShopping} style={{color: "#ffffff",}} />
                    </Link>
            </div>
      </div>
      <Rodape />
    </div>
  );
}

