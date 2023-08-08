import React from 'react';
import styles from './EnvioForm.module.css'
// ... importações de estilos

export default function EnvioForm({ formData }) {
  return (
    <div>
      <h2>Resumo da compra</h2>
      <div className={styles.endereco}>
        <h3>endereço de entrega</h3>
        <p>{formData.nome}</p>
        <p>{formData.rua}, {formData.numero}, {formData.complemento}</p>
        <p>{formData.estado} - {formData.cidade}</p>
        <p>Cep: {formData.cep}</p>
      </div>
      {/* ... outros campos ... */}
    </div>
  );
}