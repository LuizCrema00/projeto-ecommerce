import React from 'react'
import BannerLoja from './Get The Best Technology Course.png'
import styles from './Banner.module.css'

export default function Banner() {
  return (
    <img src={BannerLoja} className={styles.banner} alt='Banner que diz Frete grátis para todo Brasil'></img>
  )
}
