import styles from './EnderecoForm.module.css'
import React, { useState } from 'react'

export default function Endereco({ formData, setFormData }) {
  const [cpfValido, setCpfValido] = useState(true);


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const checkCEP = (e) => {
    const cep = e.target.value.replace(/\D/g, '');
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => res.json())
      .then((data) => {
        setFormData((prevData) => ({
          ...prevData,
          cep: data.cep || '',
          estado: data.uf || '',
          cidade: data.localidade || '',
          bairro: data.bairro || '',
          rua: data.logradouro || '',
        }));
      });
  };

  const validarCPF = (cpf) => {
    // Remove caracteres não numéricos
    cpf = cpf.replace(/\D/g, '');

    if (cpf.length !== 11) {
      return false;
    }

    // Verificação do primeiro dígito verificador
    let soma = 0;
    for (let i = 0; i < 9; i++) {
      soma += parseInt(cpf.charAt(i)) * (10 - i);
    }
    let resto = (soma * 10) % 11;
    if (resto === 10 || resto === parseInt(cpf.charAt(9))) {
      soma = 0;
      for (let i = 0; i < 10; i++) {
        soma += parseInt(cpf.charAt(i)) * (11 - i);
      }
      resto = (soma * 10) % 11;
      return resto === 10 || resto === parseInt(cpf.charAt(10));
    }
    return false;
  };

  const handleBlurCPF = (e) => {
    const { name, value } = e.target;
    const cpf = value.replace(/\D/g, ''); // Remove caracteres não numéricos
    const valido = validarCPF(cpf);
    setCpfValido(valido);
    setFormData((prevData) => ({ ...prevData, [name]: cpf }));
  };

  return (
   <div>
      <h2>Confirmar endereço de entrega</h2>
      <div className={styles.form_control}>
          <label htmlFor='cep'>Cep: </label>
          <input type='text' name='cep' id='cep' placeholder='Digite o seu cep' value={formData.cep || ''}
        onChange={handleInputChange} onBlur={checkCEP} required />
      </div>
      <div className={styles.form_container}>
            <div className={styles.form_control}>
                <label htmlFor='estado'>Estado: </label>
                <input type='text' name='estado' id='estado' placeholder='Digite o seu estado' value={formData.estado || ''}
        onChange={handleInputChange} readOnly required />
            </div>
            <div className={styles.form_control}>
                <label htmlFor='cidade'>Cidade: </label>
                <input type='text' name='cidade' id='cidade' placeholder='Digite a sua cidade' value={formData.cidade || ''}
        onChange={handleInputChange} readOnly required />
            </div>
      </div>
      <div className={styles.form_control}>
          <label htmlFor='bairro'>Bairro: </label>
          <input type='text' name='bairro' id='bairro' placeholder='Digite o seu bairro' value={formData.bairro || ''}
        onChange={handleInputChange} readOnly required />
      </div>
      <div className={styles.form_control}>
          <label htmlFor='rua'>Rua: </label>
          <input type='text' name='rua' id='rua' placeholder='Digite o seu rua' value={formData.rua || ''}
        onChange={handleInputChange} readOnly required />
      </div>
      <div className={styles.form_container}>
      <div className={styles.form_control}>
          <label htmlFor='numero'>Número: </label>
          <input type='text' name='numero' id='numero' placeholder='Digite o seu número' value={formData.numero || ''}
        onChange={handleInputChange} required />
      </div>
      <div className={styles.form_control}>
          <label htmlFor='complemento'>Complemento(opcional): </label>
          <input type='text' name='complemento' id='complemento' placeholder='Digite seu complemento' value={formData.complemento || ''}
        onChange={handleInputChange}/>
      </div>
      </div>
      <div className={styles.form_control}>
          <label htmlFor='pontoref'>ponto de referencia (opcional): </label>
          <input type='text' name='pontoref' id='pontoref' placeholder='Digite um ponto de referencia' value={formData.pontoref || ''}
        onChange={handleInputChange}/>
      </div>
      <div className={styles.form_control}>
          <label htmlFor='nome'>Nome Completo: </label>
          <input type='text' name='nome' id='nome' placeholder='Digite o seu nome' value={formData.nome || ''}
        onChange={handleInputChange} required />
      </div>
      <div className={`${styles.form_control} ${!cpfValido ? styles['invalid-cpf'] : ''}`}>
      <label htmlFor="cpf">Cpf: </label>
        <input
          type="text"
          name="cpf"
          id="cpf"
          placeholder="Digite o seu cpf"
          value={formData.cpf || ''}
          onChange={handleInputChange}
          onBlur={handleBlurCPF}
          required
        />
        {!cpfValido && <p className={styles.error}>CPF inválido.</p>}
      </div> 
    </div>
  )
}
