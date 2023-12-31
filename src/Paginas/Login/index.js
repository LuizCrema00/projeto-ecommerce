import React, { useState } from 'react'
import styles from './Login.module.css'
import logo from './Logotipo_Loja_Online__1_-removebg-preview.png'
import { Link, useNavigate } from 'react-router-dom';
import Rodape from '../../componentes/Rodape';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';



export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // Verificar se o usuário está cadastrado
    const users = JSON.parse(localStorage.getItem('users'));
    const user = users.find((u) => u.email === email && u.password === password);

    if (user) {
      // Armazenar o usuário logado no localStorage
      localStorage.setItem('currentUser', JSON.stringify(user));
      navigate('/');
    } else {
      alert('Email ou senha inválidos.');
    }
  };

  return (
    <>
      <nav className={styles.navbar}>
          <div className={styles.logoContainer}>
            <Link to='/'><img className={styles.logo} src={logo} alt='Logo do site'></img></Link>
          </div>
      </nav>
      <div className={styles.container}>
          <h2 className={styles.titulo}>Login do cliente</h2>
          <p className={styles.subtitulo}>Realize as compras de forma mais fácil e rápida!</p>
          <form className={styles.form_group} onSubmit={handleLogin}>
            <div className={styles.campo}>
              <label>E-mail</label>
                <input 
                  className={styles.campos}
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className={styles.campo}>
              <label>Senha</label>
              <div className={styles.passwordInputContainer}>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id='senha'
                    name='senha'
                    placeholder="Senha"
                    value={password}
                    required
                    onChange={(e) => setPassword(e.target.value)}
                    className={styles.passwordInput}
                  />
                  <button
                    type="button"
                    onClick={toggleShowPassword}
                    className={styles.showPasswordButton}
                  >
                    <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                  </button>
                </div>
            </div>
              <button className={styles.btn_entrar} type="submit">Entrar</button>
          </form>
          <p className={styles.link_cadastro}>
            Não tem cadastro? <strong><Link to="/cadastro">Cadastre-se</Link></strong>.
          </p>
    </div>
    <Rodape />
    </>
  )
}
