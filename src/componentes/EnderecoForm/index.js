import styles from './EnderecoForm.module.css'
import React, {useState} from 'react'

export default function Endereco({ formData, setFormData }) {

const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
};

  return (
   <div>
      <h2>Confirmar endereço de entrega</h2>
      <div className={styles.form_control}>
          <label htmlFor='cep'>Cep: </label>
          <input type='text' name='cep' id='cep' placeholder='Digite o seu cep' value={formData.cep || ''}
        onChange={handleInputChange} required />
      </div>
      <div className={styles.form_container}>
            <div className={styles.form_control}>
                <label htmlFor='estado'>Estado: </label>
                <input type='text' name='estado' id='estado' placeholder='Digite o seu estado' value={formData.estado || ''}
        onChange={handleInputChange} required />
            </div>
            <div className={styles.form_control}>
                <label htmlFor='cidade'>Cidade: </label>
                <input type='text' name='cidade' id='cidade' placeholder='Digite a sua cidade' value={formData.cidade || ''}
        onChange={handleInputChange} required />
            </div>
      </div>
      <div className={styles.form_control}>
          <label htmlFor='bairro'>Bairro: </label>
          <input type='text' name='bairro' id='bairro' placeholder='Digite o seu bairro' value={formData.bairro || ''}
        onChange={handleInputChange} required />
      </div>
      <div className={styles.form_control}>
          <label htmlFor='rua'>Rua: </label>
          <input type='text' name='rua' id='rua' placeholder='Digite o seu rua' value={formData.rua || ''}
        onChange={handleInputChange} required />
      </div>
      <div className={styles.form_container}>
      <div className={styles.form_control}>
          <label htmlFor='numero'>Número: </label>
          <input type='text' name='numero' id='numero' placeholder='Digite o seu número' value={formData.numero || ''}
        onChange={handleInputChange} required />
      </div>
      <div className={styles.form_control}>
          <label htmlFor='complemento'>Complemento: </label>
          <input type='text' name='complemento' id='complemento' placeholder='Digite seu complemento' value={formData.complemento || ''}
        onChange={handleInputChange} required />
      </div>
      </div>
      <div className={styles.form_control}>
          <label htmlFor='pontoref'>ponto de referencia: </label>
          <input type='text' name='pontoref' id='pontoref' placeholder='Digite um ponto de referencia' value={formData.pontoref || ''}
        onChange={handleInputChange} required />
      </div>
      <div className={styles.form_control}>
          <label htmlFor='nome'>Nome Completo: </label>
          <input type='text' name='nome' id='nome' placeholder='Digite o seu nome' value={formData.nome || ''}
        onChange={handleInputChange} required />
      </div>
      <div className={styles.form_control}>
          <label htmlFor='cpf'>Cpf: </label>
          <input type='text' name='cpf' id='cpf' placeholder='Digite o seu cpf' value={formData.cpf || ''}
        onChange={handleInputChange} required />
      </div> 
    </div>
  )
}
