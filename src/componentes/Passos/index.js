import React from 'react'
import styles from './Passos.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faMoneyBill } from '@fortawesome/free-solid-svg-icons'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

export default function Passos({ currentStep }) {
  return (
    <div className={styles.passos}>
      <div className={`${styles.passo} ${styles.active}`}>
        <p><FontAwesomeIcon icon={faLocationDot} className={styles.icon}  />endereço</p>
      </div>
      <div className={`${styles.passo} ${currentStep >= 1 ? styles.active : ""}`}>
        <p><FontAwesomeIcon icon={faMoneyBill} className={styles.icon}  />pagamento</p>
      </div>
      <div className={`${styles.passo} ${currentStep >= 2 ? styles.active : ""}`}>
        <p><FontAwesomeIcon icon={faCheck} className={styles.icon}  />Confirmar compra</p>
      </div>
    </div>
  )
}
