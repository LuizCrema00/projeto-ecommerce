import React from 'react'
import styles from './Newsletter.module.css'

export default function Newslleter() {
  return (
    <div className={styles.container}>
        <div className={styles.newsletter}>
            <p>Quer receber nossas novidades, promoções exclusivas e 10% OFF na primeira compra? Cadastre-se!</p>
            <div className={styles.input}>
                <input
                    placeholder='Digite seu e-mail'
                />
                <button className={styles.btn_enviar}>Enviar</button>
            </div>
        </div>
    </div>
  )
}
