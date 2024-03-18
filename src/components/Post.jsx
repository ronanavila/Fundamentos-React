import { Commnet } from "./Comment";
import styles from "./Post.module.css";
export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img
            className={styles.avatar}
            src="https://avatars.githubusercontent.com/u/46966269?v=4"
          />
          <div className={styles.authorInfo}>
            <strong>Batman da Silva</strong>
            <span>Web Morcego</span>
          </div>
        </div>
        <time title="11 de maio ás 08:13" dateTime="2022-05-11 08:13:30">
          Publicado há 1hr
        </time>
      </header>
      <div className={styles.content}>
        <p> Fala pessoal 👋</p>
        <p></p>
        <p>
          Finalmente finalizei meu novo site/portfólio. Foi um baita desafio
          criar todo o design e codar na unha, mas consegui 💪🏻
        </p>
        <p></p>
        <p>Acesse e deixe seu feedback </p>
        <p>
          👉 <a href="#"> devonlane.design</a>
        </p>
        <p></p>
        <p>
          <a href="#">#uiux</a> <a href="#"> #userexperience</a>
        </p>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea placeholder="Deixe um comentário" />
        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>
      <div className={styles.commnetList}>
        <Commnet />
        <Commnet />
        <Commnet />
      </div>
    </article>
  );
}
