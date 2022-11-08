import { Task } from "../Task";
import styles from "./ListTasks.module.css";

export function ListTasks(): JSX.Element {
  return (
    <main className={styles.container}>
      <header>
        <strong>
          Tarefas criadas <div className={styles.counter}>0</div>
        </strong>
        <strong>
          Concluídas <div className={styles.counter}>0</div>
        </strong>
      </header>
      <ul className={styles.list}>
        {/* <div className={styles.listEmpty}>
            <img src={imgClipboard} alt="ícone de uma prancheta" />
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div> */}
        <Task />
        <Task />
        <Task />
        <Task />
        <Task />
      </ul>
    </main>
  );
}
