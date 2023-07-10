import React, { useState, useEffect } from 'react'
import styles from './Categorias.module.css'
import Tags from '../Tags'
import Cards from './Cards'
import fotos from './fotos'

export default function Categorias( {termoBusca} ) {
  const [itens, setItens] = useState(fotos)
  const tags = [...new Set(fotos.map((valor) => valor.tag))]

  const filtraFotos = (tag) => {
    const novasFotos = fotos.filter((foto) => {
      return foto.tag === tag
    })

    setItens(novasFotos)
  }

  useEffect(() => {
    const itensFiltrados = fotos.filter((foto) => {
      return foto.titulo.toLowerCase().includes(termoBusca.toLowerCase());
    });

    setItens(itensFiltrados);
  }, [termoBusca]);

  return (
    <section>
        <div className={styles.categorias}>
            <h1 className={styles.titulo}>Busque por Categorias:</h1>
            <Tags tags={tags} filtraFotos={filtraFotos} setItens={setItens}/>
        </div>
        <h2>Produtos em destaque</h2>
        <Cards itens={itens} termoBusca={termoBusca}/>
    </section> 
  )
}
