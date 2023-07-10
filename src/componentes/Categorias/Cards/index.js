import React from 'react'
import styles from './Cards.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

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
                      alt={item.titulo}
                    />
                  <p className={styles.titulo}>{item.titulo}</p>
                  <div className={styles.infos}>
                      <p className={styles.descricao}>{item.descricao}</p>
                      <p className={styles.preco}>R${item.preco}</p>
                  </div>
                  <button className={styles.btn_compra}>Compre Agora<FontAwesomeIcon icon={faCartShopping} style={{color: "#ffffff",}} /></button>
                  </li>
                )
              })}
          </ul>
    </div>
  )
}
