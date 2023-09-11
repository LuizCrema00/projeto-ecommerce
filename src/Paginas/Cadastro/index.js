import styles from './Cadastro.module.css'
import React, { useState } from 'react'
import logo from './Logotipo_Loja_Online__1_-removebg-preview.png'
import { Link, useNavigate } from 'react-router-dom';
import Mailcheck from 'mailcheck';
import Rodape from '../../componentes/Rodape';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

export default function Cadastro() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [emailExists, setEmailExists] = useState(false);
  const [suggestion, setSuggestion] = useState(null);
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [confirmarSenha, setConfirmarSenha] = useState('');
  const [mostrarConfirmarSenha, setMostrarConfirmarSenha] = useState(false);
  const [error, setError] = useState('');

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleMostrarConfirmarSenha = () => {
    setMostrarConfirmarSenha(!mostrarConfirmarSenha);
  };

  const handleCadastro = (event) => {
    event.preventDefault();

    if (!name || !email || !password) {
      setError('Por favor, preencha todos os campos.');
      return;
    }

    if (suggestion) {
      setError(`Você quis dizer ${suggestion.full} ?`);
      return;
    }

    // Verificar se o usuário já está cadastrado pelo email
    const users = JSON.parse(localStorage.getItem('users')) || [];

    const userExists = users.some((user) => user.email === email);

    if (userExists) {
      setError('Já existe um usuário cadastrado com esse email.');
      setEmailExists(true);
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

    if (password !== confirmarSenha) {
      setError('Senha e confirmar senha devem ser os mesmos');
      return;
    }
    
    // Redirecionar para a página de login
    window.location.href = '/login';
  };

  const handleEmailChange = (event) => {
    const inputValue = event.target.value;

    // Use o Mailcheck para obter sugestões de domínio
    const suggestion = Mailcheck.run({
      email: inputValue,
      domains: ['example.com', 'gmail.com', 'yahoo.com.br', 'hotmail.com'], // Domínios para verificação
    });

    if (suggestion) {
      setEmailExists(true);
      setSuggestion(suggestion); // Armazenar a sugestão de domínio
    } else {
      setEmailExists(false);
      setSuggestion(null); // Limpar sugestão quando não há nenhuma
    }

    setEmail(inputValue);
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
              <label htmlFor='name'><strong>Nome Completo</strong></label>
              <input
              type="text"
              placeholder="Nome Completo"
              id='name'
              name='name'
              value={name}
              required
              onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className={styles.campo}>
              <label htmlFor='email'><strong>E-mail</strong></label>
              <input 
                className={`${emailExists ? styles['error_border'] : ''}`}
                type="email"
                id='email'
                name='email'
                placeholder="Email"
                value={email}
                required
                onChange={(e) => {
                  handleEmailChange(e)
                  setEmail(e.target.value);
                  setEmailExists(false); // Reseta o estado quando o valor é alterado
                }}
              />
            </div>
            <div className={styles.campo}>
              <label htmlFor='senha'><strong>Senha</strong></label>
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
               {emailExists && suggestion && (
                  <p className={styles.suggestion}>Sugestão de domínio: {suggestion.full}</p>
               )}
            </div>
            <div className={styles.campo}>
              <label htmlFor='confirmarSenha'><strong>Confirmar Senha</strong></label>
              <div className={styles.passwordInputContainer}>
                <input
                  type={mostrarConfirmarSenha ? "text" : "password"}
                  id='confirmarSenha'
                  name='confirmarSenha'
                  placeholder="Confirmar Senha"
                  value={confirmarSenha}
                  required
                  onChange={(e) => setConfirmarSenha(e.target.value)}
                  className={styles.passwordInput} // Adicione esta classe
                />
                <button
                  type="button"
                  onClick={toggleMostrarConfirmarSenha}
                  className={styles.showPasswordButton}
                >
                  <FontAwesomeIcon icon={mostrarConfirmarSenha ? faEyeSlash : faEye} />
                </button>
              </div>
            </div>
            {error && <p className={styles.error}>{error}</p>}
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
