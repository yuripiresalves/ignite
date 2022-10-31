import TasksImage from '../assets/tasks.svg';

import styles from './EmptyTasks.module.css';

export function EmptyTasks() {
  return (
    <div className={styles.emptyTasks}>
      <img src={TasksImage} alt="" />
      <strong>Você ainda não tem tarefas cadastradas</strong>
      <span>Crie tarefas e organize seus itens a fazer</span>
    </div>
  );
}
