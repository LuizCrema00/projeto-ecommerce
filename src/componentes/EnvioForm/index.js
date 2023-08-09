import React, { useState } from 'react';
import styles from './EnvioForm.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons';

export default function EnvioForm({ formData, quantidadeProdutos, carrinho  }) {
  const [modalOpen, setModalOpen] = useState(false);
  

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };


  return (
    <div>
      <h2>Resumo da compra</h2>
      <div className={styles.container}>
        <div className={styles.endereco}>
          <h3>endereço de entrega</h3>
          <p>{formData.nome}</p>
          <p>
            {formData.rua}, {formData.numero}, {formData.complemento}
          </p>
          <p>
            {formData.estado} - {formData.cidade}
          </p>
          <p>Cep: {formData.cep}</p>
        </div>
        <div className={styles.resumo_produto}>
          <h3>Resumo compra</h3>
          <p>Quantidade de Produtos: {quantidadeProdutos}</p>
          <button className={styles.abrir_modal} onClick={openModal}>Ver produtos</button>
        </div>
      </div>

      {modalOpen && (
        <div className={`${styles.modal} ${modalOpen ? styles.visible : ""}`}>
          <div className={styles.modalContent}>
            <button className={styles.fechar_modal} onClick={closeModal}><FontAwesomeIcon icon={faXmark} style={{color: "#000000",}} /></button>
            <h3>Produtos do Carrinho:</h3>
            <ul>
              {carrinho.map((produto) => (
                <li key={produto.id}>
                  <div className={styles.produtoModal}>
                    <img src={produto.imagem} alt={produto.titulo} />
                    <div>
                      <p>{produto.titulo}</p>
                      <p>Quantidade: {produto.quantidade}</p>
                      <p>Preço Unitário: R${produto.preco}</p>
                      <p>
                        Preço Total: R$
                        {(
                          produto.quantidade *
                          parseFloat(
                            produto.preco.replace(".", "").replace(",", ".")
                          )
                        ).toFixed(2)}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}