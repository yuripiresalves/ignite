import * as Checkbox from '@radix-ui/react-checkbox';
import { Check, Trash } from 'phosphor-react';

import styles from './Task.module.css';

interface TaskProps {
  id: string;
  title: string;
  isDone: boolean;
  handleToggleTaskDone: (id: string) => void;
  handleDeleteTask: (id: string) => void;
}

export function Task({
  id,
  title,
  isDone,
  handleToggleTaskDone,
  handleDeleteTask,
}: TaskProps) {
  return (
    <>
      <div className={`${styles.task}  ${isDone && styles.taskDone}`}>
        <div className={styles.group} onClick={() => handleToggleTaskDone(id)}>
          <Checkbox.Root checked={isDone} className={styles.checkbox}>
            <Checkbox.Indicator>
              <Check weight="bold" size={12} />
            </Checkbox.Indicator>
          </Checkbox.Root>
          <label title={title} onClick={() => handleToggleTaskDone(id)}>
            {title}
          </label>
        </div>
        <button title="Deletar tarefa" onClick={() => handleDeleteTask(id)}>
          <Trash />
        </button>
      </div>
    </>
  );
}
