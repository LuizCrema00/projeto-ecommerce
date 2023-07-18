import React from 'react'
import styles from './Tags.module.css'
import fotos from '../Categorias/fotos.json'
import categorias from './categorias.json'
import todas from './Todas.png'


export default function Tags({tags, filtraFotos, setItens}) {

  return (
    <div className={styles.container}>
        <ul className={styles.produto__cards}>
              {tags.map((tag)=>{ 
                return (
                  <li key={tag} onClick={()=>filtraFotos(tag)} className={styles.produtos__card}>
                    {categorias.map((categoria) => {
                        if (categoria.titulo === tag) { 
                          return (
                            <img key={categoria.id} src={categoria.imagem} alt={categoria.titulo} className={styles.categoria__imagem} />
                          );
                        }
                      return null;
                    })}
                    {tag}
                    </li>
                )
              })}
              <li className={styles.produtos__card} onClick={() => setItens(fotos)}>
                <img src={todas} alt='Todas as categorias' className={styles.categoria__imagem}></img>
                Todas
                </li>
          </ul>
    </div>

  )
}
