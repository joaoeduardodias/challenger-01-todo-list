import { PlusCircle } from "phosphor-react";
import { FormEvent, useState } from "react";
import { useTask } from "../../contexts/useTask";
import styles from "./NewTask.module.css";

export function NewTask(): JSX.Element {
  const { createNewTask } = useTask();
  const [newTask, setNewTask] = useState<string>("");

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();
    createNewTask(newTask);
    setNewTask("");
  }

  return (
    <form className={styles.container} onSubmit={handleCreateNewTask}>
      <input
        type="text"
        name="newTask"
        placeholder="Adicione uma nova tarefa"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <button type="submit">
        Criar
        <PlusCircle size={18} />
      </button>
    </form>
  );
}
