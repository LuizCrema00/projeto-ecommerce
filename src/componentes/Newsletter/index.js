import React from 'react'
import styles from './Newsletter.module.css'

export default function Newslleter() {
  return (
    <div className={styles.container}>
        <div className={styles.newsletter}>
            <p>Quer receber nossas novidades, promoções exclusivas e 10% OFF na primeira compra? Cadastre-se!</p>
            <label htmlFor="email" style={{ display: 'none' }}>
                    Digite o produto que deseja encontrar:
            </label>
            <div className={styles.input}>
                <input
                    id='email'
                    placeholder='Digite seu e-mail'
                />
                <button className={styles.btn_enviar}>Enviar</button>
            </div>
        </div>
    </div>
  )
}
