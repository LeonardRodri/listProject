import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';

export function Comment(){
  return(
    <div className={styles.comment}>
      <img src="https://github.com/LeonardRodri.png" alt="" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Leonardo Rodrigues</strong>
              <time title='Publicado no dia 11 de Janeiro de 2022 as 00:00' dateTime="2022-01-11 00:00:00">Publiciado há 2h</time>
            </div>
            <button title='Deletar Comentario'>
              <Trash size={20}></Trash>
            </button>
          </header>

          <p>Muito bom Devon, parabéns!! 👏👏</p>
        </div>

        <footer>
          <button>
            <ThumbsUp></ThumbsUp>
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>

    </div>
  )
}