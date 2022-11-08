import { CheckCircle, Circle, Trash } from "phosphor-react";
import { useState } from "react";
import styles from "./Task.module.css";

export function Task(): JSX.Element {
  const [isMouseHovered, setIsMouseHovered] = useState<boolean>(false);
  const [isTaskDone, setIsTaskDone] = useState<boolean>(false);

  function handleCompletedTask(): void {
    setIsTaskDone(true);
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
      <p>
        Integer urna interdum massa libero auctors neque trupis trupis semper.
        Dius vel sed fames integer.
      </p>
      <button className={styles.trashButton} title="Deletar Tarefa">
        <Trash size={16} />
      </button>
    </li>
  );
}
