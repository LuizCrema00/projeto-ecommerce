import React, {useState} from 'react';
import styles from './Compra.module.css';
import { Link, useLocation } from 'react-router-dom';
import logo from './Logotipo_Loja_Online__1_-removebg-preview.png';
import EnderecoForm from '../../componentes/EnderecoForm';
import CompraForm from '../../componentes/CompraForm';
import EnvioForm from '../../componentes/EnvioForm';
import Passos from '../../componentes/Passos';

import { useForm } from '../../hooks/useForm'

export default function Compra() {
  const location = useLocation(); // Obtém o objeto location
  const precoTotal = location.state ? location.state.precoTotal : 'R$ 0,00'; 
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

  const formComponents = [<EnderecoForm />, <CompraForm precoTotal={precoTotal} />, <EnvioForm />,];

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
      <div>
        <h2>Fechar pedido</h2>
        <div className={styles.form_container}>
          <Passos currentStep={currentStep} />
          <form onSubmit={(e) => changeStep(currentStep + 1, e)}>
            <div className={styles.inputs_container}>
            {React.cloneElement(currentComponent, { formData, setFormData })}
              {isCompraFormOrEnvioForm && (
              <p className={styles.preco_total}>Preço Total: {precoTotal}</p>
            )}
            </div>
            <div className={styles.actions}>
              {!isFirstStep && (
                <button type='button' onClick={() => changeStep(currentStep - 1)}>
                  Voltar
                </button>
              )}
              {!isLastStep ? (
                <button type='submit'>Avançar</button>
              ) : (
                <button type='button'>Confirmar compra</button>
              )}
              
            </div>
            
          </form>
        </div>
      </div>
    </>
  );
}
