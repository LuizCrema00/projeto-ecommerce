import { Link } from 'react-router-dom'
import React from 'react'
import styles from './CompraConfirmada.module.css'
import logo from './Logotipo_Loja_Online__1_-removebg-preview.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import Rodape from '../../componentes/Rodape';

export default function CompraConfirmada() {
  return (
    <>
    <nav className={styles.navbar}>
        <div className={styles.logoContainer}>
          <Link to='/'>
            <img
              className={styles.logo}
              src={logo}
              alt='Logo do site'
            />
          </Link>
        </div>
    </nav>
    <div className={styles.carrinho_vazio}>
          <h1>
            Compra efetuada com sucesso{' '}
            <FontAwesomeIcon icon={faCheck} size="2xl" style={{color: "#054d00",}} />
          </h1>
          <p>Navegue pelos nossos produtos!</p>
          <Link to="/" className={styles.btn_carrinho_vazio}>
            Ver produtos
          </Link>
    </div>
    <Rodape />
    </>
    
  )
}
