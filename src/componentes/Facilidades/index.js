import React from 'react'
import styles from './Facilidades.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPix } from '@fortawesome/free-brands-svg-icons';
import { faArrowsRotate } from '@fortawesome/free-solid-svg-icons';
import { faTruckMoving } from '@fortawesome/free-solid-svg-icons';

export default function Facilidades() {
  return (
    <div className={styles.container}>
        <h3>Conheça todas as nossas facilidades</h3>
        <div className={styles.facilidades}>
            <div className={styles.facilidade}>
                <FontAwesomeIcon icon={faPix} size="2xl" style={{color: "#ffffff",}} />
                <p>Pague pelo Pix</p>
            </div>
            <div className={styles.facilidade}>
                <FontAwesomeIcon icon={faArrowsRotate} size="2xl" style={{color: "#ffffff",}} />
                <p>Troca grátis em até 30 dias</p>
            </div>
            <div className={styles.facilidade}>
                <FontAwesomeIcon icon={faTruckMoving} size="2xl" style={{color: "#ffffff",}} />
                <p>Frete grátis para todo Brasil</p>
            </div>
            
        </div>
    </div>
  )
}
