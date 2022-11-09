import { Header } from "./components/Header";
import { ListTasks } from "./components/ListTasks";
import { NewTask } from "./components/NewTask";
import { TaskProvider } from "./contexts/useTask";
import "./global.css";

export function App() {
  return (
    <>
      <Header />
      <TaskProvider>
        <div>
          <NewTask />
          <ListTasks />
        </div>
      </TaskProvider>
    </>
  );
}
