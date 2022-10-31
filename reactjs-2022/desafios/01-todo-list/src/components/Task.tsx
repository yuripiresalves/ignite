import * as Checkbox from '@radix-ui/react-checkbox';
import { Check, Trash } from 'phosphor-react';

import styles from './Task.module.css';

interface TaskProps {
  id: number;
  title: string;
  isDone: boolean;
}

export function Task({ id, title, isDone }: TaskProps) {
  return (
    <>
      <div className={`${styles.task}  ${isDone && styles.taskDone}`}>
        <div className={styles.group}>
          <Checkbox.Root
            checked={isDone}
            className={styles.checkbox}
            id={id.toString()}
          >
            <Checkbox.Indicator>
              <Check weight="bold" size={12} />
            </Checkbox.Indicator>
          </Checkbox.Root>
          <label htmlFor={id.toString()} title={title}>
            {title}
          </label>
        </div>
        <button title="Deletar tarefa">
          <Trash />
        </button>
      </div>
    </>
  );
}
