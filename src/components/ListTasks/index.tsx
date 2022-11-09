import imgClipboard from "../../assets/clipboard.svg";
import { useTask } from "../../contexts/useTask";
import { Task } from "../Task";
import styles from "./ListTasks.module.css";

export function ListTasks(): JSX.Element {
  const { tasks } = useTask();

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
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <Task
              key={task.id}
              content={task.content}
              id={task.id}
              done={task.done}
            />
          ))
        ) : (
          <div className={styles.listEmpty}>
            <img src={imgClipboard} alt="ícone de uma prancheta" />
            <strong>Você ainda não tem tarefas cadastradas</strong>
            <p>Crie tarefas e organize seus itens a fazer</p>
          </div>
        )}
      </ul>
    </main>
  );
}
