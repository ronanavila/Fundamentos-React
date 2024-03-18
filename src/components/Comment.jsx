import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";
export function Commnet() {
  return (
    <div className={styles.comment}>
      <img src="https://avatars.githubusercontent.com/u/46966269?v=4"></img>
      <div className={styles.commentBox}>
        <div className={styles.commnetContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Batman Silva</strong>
              <time title="11 de maio ás 08:13" dateTime="2022-05-11 08:13:30">
                Cerca há 1hr atrás
              </time>
            </div>
            <button title="Deletar comentário">
              <Trash size={20} />
            </button>
          </header>
          <p>ADSASFAFSAGGSGSDG</p>
        </div>
        <footer>
          <button title="Deletar comentário">
            <ThumbsUp size={20} />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
