import { PlusCircle } from 'phosphor-react'
import styles from './NewTask.module.css'

export function NewTask():JSX.Element {
  return (
    <form className={styles.container}>
      <input type="text" name='newTask' placeholder='Adicione uma nova tarefa'/>
      <button type='submit'>
        Criar
        <PlusCircle size={18} />
      </button>
    </form>
  )
}