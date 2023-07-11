import styles from './Cadastro.module.css'
import React, { useState } from 'react'
import logo from './Logotipo_Loja_Online__1_-removebg-preview.png'
import { Link, useNavigate } from 'react-router-dom';
import Rodape from '../../componentes/Rodape';

export default function Cadastro() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleCadastro = (event) => {
    event.preventDefault();

    if (!name || !email || !password) {
      setError('Por favor, preencha todos os campos.');
      return;
    }

    // Verificar se o usuário já está cadastrado pelo email
    const users = JSON.parse(localStorage.getItem('users')) || [];

    const userExists = users.some((user) => user.email === email);

    if (userExists) {
      setError('Já existe um usuário cadastrado com esse email.');
      return;
    }

    // Criar o novo usuário
    const newUser = {
      name,
      email,
      password,
    };

    // Adicionar o novo usuário à lista de usuários
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));

    // Redirecionar para a página de login
    window.location.href = '/login';
  };

  return (
    <>
      <nav className={styles.navbar}>
          <div className={styles.logoContainer}>
              <Link to='/'><img className={styles.logo} src={logo} alt='Logo do site'></img></Link>
          </div>
        </nav>
      <div className={styles.container}>
          <h2 className={styles.titulo}>Cadastro do cliente</h2>
          <p className={styles.subtitulo}>Realize as compras de forma mais facil e rapida!</p>
          <form className={styles.form_grupo} onSubmit={handleCadastro}>
            <div className={styles.campo}>
              <label><strong>Nome Completo</strong></label>
              <input
              type="text"
              placeholder="Nome Completo"
              value={name}
              required
              onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className={styles.campo}>
              <label><strong>E-mail</strong></label>
              <input
              type="email"
              placeholder="Email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className={styles.campo}>
              <label><strong>Senha</strong></label>
              <input
              type="password"
              placeholder="Senha"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {error && <p>{error}</p>}
            <button className={styles.btn_cadastrar} type="submit">Cadastrar</button>
          </form>
          <p className={styles.link_login}>
            Já tem cadastro? <strong><Link to="/login">Clique aqui e faça o login</Link></strong>.
          </p>
    </div>
    <Rodape />
    </>
  )
}
