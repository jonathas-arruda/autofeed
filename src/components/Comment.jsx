import { ThumbsUp, Trash } from "phosphor-react";
import { Avatar } from "./Avatar";
import styles from "./Comment.module.css";

export function Comment() {
  return (
    <header className={styles.comment}>
      <Avatar hasBorder ={false} src="https://github.com/jonathas-arruda.png" alt="" />
      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Fulano de Tal</strong>
              <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:00">
                1h atrás
              </time>
            </div>
            <button title="Deletar comentário.">
              <Trash size={24}/>
            </button>
          </header>
          <p>Muito bom Fulano, parabéns!</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>3</span>
          </button>
        </footer>
      </div>
    </header>
  );
}
