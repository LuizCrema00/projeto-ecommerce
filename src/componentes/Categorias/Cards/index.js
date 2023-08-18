import React from 'react'
import styles from './Cards.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

export default function Cards({ itens, termoBusca}) {

  const itensFiltrados = itens.filter((item) => {
    return item.titulo.toLowerCase().includes(termoBusca.toLowerCase());
  });

  return (
    <div className={styles.container}>
        <ul className={styles.produto__cards}>
              {itens.map((item)=>{
                return (
                  <li key={item.id} className={styles.produtos__card}>
                    <img 
                      className={styles.imagem}
                      src={item.imagem}
                      alt={`produto ${item.titulo}`}
                    />
                  <span className={styles.titulo}>{item.titulo}</span>
                  <div className={styles.infos}>
                      <p className={styles.descricao}>{item.descricao}</p>
                      <p className={styles.preco}>R${item.preco}</p>
                  </div>
                  <Link to={`/produto/${item.id}`} className={styles.btn_compra}>Compre Agora<FontAwesomeIcon icon={faCartShopping} style={{color: "#ffffff",}} /></Link>
                  </li>
                )
              })}
          </ul>
    </div>
  )
}
