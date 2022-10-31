import { PlusCircle } from 'phosphor-react';

import styles from './AddTaskForm.module.css';

export function AddTaskForm() {
  return (
    <form className={styles.addTaskForm}>
      <input type="text" placeholder="Adicione uma nova tarefa" required />
      <button type="submit">
        Criar
        <PlusCircle size={16} weight="bold" />
      </button>
    </form>
  );
}
