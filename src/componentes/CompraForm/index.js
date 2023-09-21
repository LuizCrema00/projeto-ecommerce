import React, { useState } from 'react';
import styles from './CompraForm.module.css';
import qrcode from './qrcode.jpg'

export default function CompraForm({ precoTotal, metodoPagamento, setMetodoPagamento, numeroParcelasEscolhidas,
  setNumeroParcelasEscolhidas, setValorParcelaEscolhida, formCompra, setFormCompra}) {

  const [confirmacao, setConfirmacao] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormCompra((prevData) => ({ ...prevData, [name]: value }));
};

  const limparValorNumerico = (valor) => {
    const valorNumerico = valor.replace(/[^\d,-]/g, ''); // Remove todos os caracteres não numéricos, exceto ',' e '-'
    const valorSemVirgula = valorNumerico.replace(',', '.'); // Substitui ',' por '.' para garantir que o número seja interpretado corretamente
    return parseFloat(valorSemVirgula);
  };

  const calcularParcela = (parcelas) => {
    const preco = limparValorNumerico(precoTotal);
    if (isNaN(preco) || preco === 0 || parcelas === 0) return 0;
    return (preco / parcelas).toFixed(2);
  };

  const formatarPreco = (preco) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(preco);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simular lógica de processamento de pagamento com base no método escolhido
    setConfirmacao(true);
  };

  return (
    <div>
      <h2>Pagamento</h2>
      <form className={styles.form_container} onSubmit={handleSubmit}>
      <select
          className={styles.metodopagamento}
          value={metodoPagamento}
          onChange={(e) => {
            setMetodoPagamento(e.target.value)
            setNumeroParcelasEscolhidas(0); // Reset das parcelas ao mudar o método de pagamento
          }}
        >
          <option value="">Escolha o método de pagamento</option>
          <option value="cartao">Cartão de Crédito</option>
          <option value="pix">Pix</option>
          <option value="boleto">Boleto</option>
          {/* Adicione outros métodos de pagamento fictícios aqui */}
        </select>
        {/* Renderizar campos de acordo com o método de pagamento selecionado */}
        {metodoPagamento === 'cartao' && (
          <div className={styles.cartao}>
            <input
              type="text"
              name="cartao"
              id="cartao"
              placeholder="Número do Cartão"
              value={formCompra.cartao || ''}
              onChange={handleInputChange} 
              required
            />
            <input
              type="text"
              placeholder="Nome completo"
              name="nome"
              id="nome"
              value={formCompra.nome || ''}
              onChange={handleInputChange} 
              required
            />
            <input
              type="text"
              placeholder="Validade"
              name="validade"
              id="validade"
              value={formCompra.validade || ''}
              onChange={handleInputChange} 
              required
            />
            <input
              type="text"
              placeholder="Código de Segurança"
              name="codigo"
              id="codigo"
              value={formCompra.codigo || ''}
              onChange={handleInputChange} 
              required
            />
            <select
              className={styles.metodopagamento}
              value={numeroParcelasEscolhidas}
              onChange={(e) => {
                setNumeroParcelasEscolhidas(parseInt(e.target.value));
                const precoParcela = calcularParcela(parseInt(e.target.value));
                setValorParcelaEscolhida(precoParcela); // Atualize o valor da parcela
              }}
            >
              <option value="">Número de parcelas</option>
              {[...Array(12)].map((_, index) => {
                const parcelas = index + 1;
                const valorParcela = calcularParcela(parcelas);
                return (
                  <option key={parcelas} value={parcelas}>
                    {parcelas}x de {formatarPreco(valorParcela)}
                  </option>
                );
              })}
            </select>
          </div>
        )}
        {metodoPagamento === 'pix' && (
          <div className={styles.pix}>
            <p>Pague com Pix em qualquer dia e a qualquer hora! 
              O pagamento é instantâneo, prático e pode ser feito em poucos segundos. 
              É muito rápido e seguro :)</p>
              <div className={styles.qrcode}>
                  <img alt='Código QR' src={qrcode}></img>
                  <div className={styles.passos}>
                    <p>1. abra o app do seu banco ou instituição financeira e entre no ambiente Pix</p>
                    <p>2. escolha a opção pagar com qr code e escaneie o código ao lado</p>
                    <p>3. confirme as informações e finalize a compra</p>
                  </div>
              </div>
          </div>
        )}
        {metodoPagamento === 'boleto' && (
          <div className={styles.boleto}>
            <p>imprima o boleto e pague no banco</p>
            <p>ou pague pela internet utilizando o código de barras do boleto</p>
            <p>o prazo de validade do boleto é de 1 dia util</p>
          </div>
        )}
      </form>
    </div>
  );
}

