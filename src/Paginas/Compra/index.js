import React, {useState} from 'react';
import styles from './Compra.module.css';
import { Link, useLocation } from 'react-router-dom';
import logo from './Logotipo_Loja_Online__1_-removebg-preview.png';
import EnderecoForm from '../../componentes/EnderecoForm';
import CompraForm from '../../componentes/CompraForm';
import EnvioForm from '../../componentes/EnvioForm';
import Passos from '../../componentes/Passos';
import Rodape from '../../componentes/Rodape';

import { useForm } from '../../hooks/useForm';

export default function Compra() {
  const location = useLocation(); // Obtém o objeto location
  const precoTotal = location.state ? location.state.precoTotal : 'R$ 0,00';
  const quantidadeProdutos = location.state ? location.state.quantidadeProdutos : 0; 
  const carrinho = location.state ? location.state.carrinho : [];
  const [formData, setFormData] = useState({
    cep: '',
    estado: '',
    cidade: '',
    bairro: '',
    rua: '',
    numero: '',
    complemento: '',
    pontoref: '',
    nome: '',
    cpf: '',

    // ... outros campos
  });

  const [formCompra, setFormCompra] = useState ({
    numeroCartao: '',
    nome: '',
    validade: '',
    codigo: '',
  })

  const [metodoPagamento, setMetodoPagamento] = useState('');
  const [numeroParcelasEscolhidas, setNumeroParcelasEscolhidas] = useState(0);
  const [valorParcelaEscolhida, setValorParcelaEscolhida] = useState(0);

  const formComponents = [
                          <EnderecoForm />, 
                          <CompraForm precoTotal={precoTotal}  />, 
                          <EnvioForm quantidadeProdutos={quantidadeProdutos} carrinho={carrinho} />
                        ];

  const { currentStep, currentComponent, changeStep, isLastStep, isFirstStep } =
    useForm(formComponents);

  const isCompraFormOrEnvioForm = currentComponent.type === CompraForm || currentComponent.type === EnvioForm;


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
      <div className={styles.container}>
        <h1>Você esta quase concluindo sua compra. Siga os passos abaixo!!</h1>
        <div className={styles.form_container}>
          <Passos currentStep={currentStep} />
          <p><span style={{ color: 'red'}}>*</span>Campos Obrigatórios</p>
          <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
            <div className={styles.inputs_container}>
            {React.cloneElement(currentComponent, {
              formData,
              setFormData,
              formCompra,
              setFormCompra,
              metodoPagamento,
              setMetodoPagamento,
              numeroParcelasEscolhidas,
              setNumeroParcelasEscolhidas,
              valorParcelaEscolhida,
              setValorParcelaEscolhida,
            })}
              {isCompraFormOrEnvioForm && (
              <p className={styles.preco_total}>Preço Total: {precoTotal}</p>
            )}
            </div>
            <div className={styles.actions}>
              <button><Link to='/carrinho'>Voltar para o carrinho</Link></button>
              {!isFirstStep && (
                <button type='button' onClick={() => changeStep(currentStep - 1)}>
                  Voltar para etapa anterior
                </button>
              )}
              {!isLastStep ? (
                <button type='submit'>Avançar</button>
              ) : (
                <button type='button'><Link to='/confirmacompra'>Confirmar compra</Link></button>
              )}
              
            </div>
            
          </form>
        </div>
      </div>
      <Rodape />
    </>
  );
}
