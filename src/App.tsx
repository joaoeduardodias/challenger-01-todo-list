import { Header } from './components/Header'
import { ListTasks } from './components/ListTasks'
import { NewTask } from './components/NewTask'
import './global.css'

export function App() {
  return (
    <>
      <Header />
      <div>
        <NewTask />
        <ListTasks />
      </div>
    </>
    )
}
