import React, { useState } from 'react'
import styles from './Cabecalho.module.css'
import logo from './Logotipo_Loja_Online__1_-removebg-preview.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faHouse } from '@fortawesome/free-solid-svg-icons'

export default function Cabecalho( { setTermoBusca } ) {

  const [busca, setBusca] = useState('')

  const handleBuscaInputChange = (event) => {
    setBusca(event.target.value);
  };

  const handleBuscaClick = () => {
    setTermoBusca(busca);
  };

  return (
    <>
      <header>
        <nav className={styles.navbar}>
          <div className={styles.logoContainer}>
            <img className={styles.logo} src={logo} alt='Logo do site'></img>
          </div>
            <div className={styles.busca}>
              <input 
              className={styles.inputBusca} 
              type='text' 
              placeholder='Digite o produto que deseja encontrar...' 
              value={busca}
              onChange={handleBuscaInputChange}
              />
              <button className={styles.botaoBusca} onClick={handleBuscaClick}>
                Buscar
              </button>
            </div>
                <ul className={styles.lista}>
                  <li className={styles.item}><FontAwesomeIcon icon={faHouse} style={{color: "#fafcff",}} />Início</li>
                  <li className={styles.item}><FontAwesomeIcon icon={faCartShopping} style={{color: "#ffffff",}} />Carrinho</li>
                  <li className={styles.item}><FontAwesomeIcon icon={faUser} style={{color: "#ffffff",}} />Entre ou Cadastre-se</li>
                </ul>
        </nav>
      </header>
    </>
  )
}
