import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { v4 as uuidv4 } from "uuid";

export type Task = {
  content: string;
  done: boolean;
  id: string;
};
interface TaskContentData {
  tasks: Task[];
  createNewTask: (content: string) => void;
  deleteTask: (taskId: string) => void;
  updateTaskDone: (taskId: string) => void;
  counterTasksDone: () => number;
}

export const TaskContext = createContext<TaskContentData>(
  {} as TaskContentData
);

interface TaskProviderProps {
  children: ReactNode;
}

export function TaskProvider({ children }: TaskProviderProps) {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const storageTasks = localStorage.getItem("@todolist:tasks");

    if (storageTasks) {
      return JSON.parse(storageTasks);
    }

    return [];
  });

  const prevTaskRef = useRef<Task[]>();
  useEffect(() => {
    prevTaskRef.current = tasks;
  });

  const taskPreviousValue = prevTaskRef.current ?? tasks;

  useEffect(() => {
    if (taskPreviousValue !== tasks) {
      localStorage.setItem("@todolist:tasks", JSON.stringify(tasks));
    }
  }, [tasks, taskPreviousValue]);

  const createNewTask = (content: string) => {
    try {
      const updatedTask = [...tasks];

      const newTask = {
        content,
        done: false,
        id: uuidv4(),
      };
      updatedTask.push(newTask);

      setTasks(updatedTask);
    } catch {
      alert("Erro ao criar nova task!");
    }
  };

  const deleteTask = (taskId: string) => {
    try {
      const updatedTask = [...tasks];
      const taskIndex = updatedTask.findIndex((task) => task.id === taskId);
      if (taskIndex >= 0) {
        updatedTask.splice(taskIndex, 1);
        setTasks(updatedTask);
      } else {
        throw Error();
      }
    } catch {
      alert("Erro na remoção da task");
    }
  };
  const updateTaskDone = (taskId: string) => {
    try {
      const updateTask = tasks.map((task) => {
        if (task.id === taskId) {
          task.done = true;
        }

        return task;
      });

      setTasks(updateTask);
    } catch {
      alert("Erro ao concluir tarefa!");
    }
  };
  const counterTasksDone = () => {
    const TasksDone = tasks.reduce((acc, task) => {
      if (task.done === true) {
        return acc + 1;
      }
      return acc;
    }, 0);
    return TasksDone;
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        createNewTask,
        deleteTask,
        updateTaskDone,
        counterTasksDone,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}

export const useTask = () => useContext(TaskContext);
