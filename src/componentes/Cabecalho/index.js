import React, { useState, useEffect} from 'react'
import styles from './Cabecalho.module.css'
import logo from './Logotipo_Loja_Online__1_-removebg-preview.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'


export default function Cabecalho( { setTermoBusca, quantidadeProdutos } ) {

  const [busca, setBusca] = useState('')

  const handleBuscaInputChange = (event) => {
    setBusca(event.target.value);
  };

  const handleBuscaClick = () => {
    setTermoBusca(busca);
  };


  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('currentUser'));
    if (storedUser) {
      setCurrentUser(storedUser);
    }
  }, []);
  

  const handleLogout = () => {
    setCurrentUser(null);
    localStorage.removeItem('currentUser');
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
                        <Link to="/" className={styles.item}><FontAwesomeIcon icon={faHouse} style={{color: "#fafcff",}} />Início</Link>
                        <Link to="/carrinho" className={styles.item}>
                          <FontAwesomeIcon icon={faCartShopping} style={{ color: "#ffffff" }} /> Carrinho
                          {quantidadeProdutos > 0 && (
                            <span className={styles.quantidade}>({quantidadeProdutos})</span>
                          )}
                        </Link>
                        {currentUser ? (
                        <li>
                          Olá, {currentUser.name}!{' '}
                          <button className={styles.logout} onClick={handleLogout}>Sair</button>
                        </li>
                        ) : (
                          <Link to="/login" className={styles.item}><FontAwesomeIcon icon={faUser} style={{color: "#ffffff",}} />Entre ou Cadastre-se</Link>
                        )}
                    </ul>
          </nav>
      </header>
    </>
  )
}
