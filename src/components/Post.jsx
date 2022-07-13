import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post(){
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://github.com/LeonardRodri.png" alt="" />
          <div className={styles.authorInfo}>
            <strong>Leonardo Rodrigues</strong>
            <span>Web Developer</span>
          </div>
        </div>

        <time title='Publicado no dia 11 de Janeiro de 2022 as 00:00' dateTime="2022-01-11 00:00:00">Publiciado há 1h</time>
      </header>
      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀</p>
        <p> 👉 <a href=""> jane.design/doctorcare</a></p>
        <p> 
            <a href="">#novoprojeto</a>{' '}  
            <a href="">#nlw</a>{' '} 
            <a href="">#rocketseat</a>{' '}
        </p>
      </div>


      <form className={styles.commentForm}>
        <strong>Deixa seu cometario</strong>
        <textarea
          placeholder='Deixa seu Comentario'
        />
        <footer>
          <button type='submit'>Publicar</button>
        </footer>
      </form>
      <div className={styles.commentList}>
        <Comment/>
        <Comment/>
        <Comment/>
      </div>
    </article>
  )
}

