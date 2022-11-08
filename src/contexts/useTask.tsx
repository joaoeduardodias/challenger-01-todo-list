import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useRef,
  useState
} from "react";

export type Task = {
  content: string;
  done: boolean;
  id: string;
};
interface TaskContentData {
  task: Task[];
  createdTask: ({ content, done }: Task) => void;
  deletedTask: (taskId: string) => void;
  completedTask: (taskId: string) => void;
}

export const TaskContext = createContext<TaskContentData>(
  {} as TaskContentData
);

interface TaskProviderProps {
  children: ReactNode;
}

export function TaskContextProvider({ children }: TaskProviderProps) {
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

  useEffect(()=>{
    if(taskPreviousValue !== tasks){
      localStorage.setItem('@todolist:tasks', JSON.stringify(tasks))
    }
  }, [tasks, taskPreviousValue])

  const CreateNewTask = ({content,done}:Task) => {
    try {
      const updatedTask = [...tasks];
      const tasksCompleted = updatedTask.find(task => task.done === true)
    
      

        const newProduct = {
          ...updatedTask,
          content,
          done: false,
          id: 
        }
        updatedCart.push(newProduct)

      }
      setCart(updatedCart)
    } catch {
      toast.error('Erro na adição do produto')
    }
  };

  return <TaskContext.Provider value={tasks}>{children}</TaskContext.Provider>;
}

export const useTask = () => useContext(TaskContext);
