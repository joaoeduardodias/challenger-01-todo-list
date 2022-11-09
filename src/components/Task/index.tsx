import { CheckCircle, Circle, Trash } from "phosphor-react";
import { useState } from "react";
import { useTask } from "../../contexts/useTask";
import styles from "./Task.module.css";

interface TaskProps {
  content: string;
  done: boolean;
  id: string;
}

export function Task({ content, done, id }: TaskProps): JSX.Element {
  const [isMouseHovered, setIsMouseHovered] = useState<boolean>(false);
  const [isTaskDone, setIsTaskDone] = useState<boolean>(done);
  const { updateTaskDone } = useTask();

  function handleCompletedTask(): void {
    setIsTaskDone(true);
    updateTaskDone(id);
  }

  return (
    <li className={isTaskDone ? styles.taskDone : styles.task}>
      {!isTaskDone ? (
        <Circle
          size={24}
          className={styles.unChecked}
          onMouseEnter={() => setIsMouseHovered(true)}
          onMouseLeave={() => setIsMouseHovered(false)}
          onClick={handleCompletedTask}
          weight={isMouseHovered ? "duotone" : "regular"}
        />
      ) : (
        <CheckCircle size={24} className={styles.checked} weight="fill" />
      )}
      <p>{content}</p>
      <button className={styles.trashButton} title="Deletar Tarefa">
        <Trash size={16} />
      </button>
    </li>
  );
}
