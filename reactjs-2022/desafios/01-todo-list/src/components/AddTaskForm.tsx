import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';
import { PlusCircle } from 'phosphor-react';
import { v4 as uuidv4 } from 'uuid';

import styles from './AddTaskForm.module.css';

interface Task {
  id: string;
  title: string;
  isDone: boolean;
}
interface AddTaskFormProps {
  tasks: Task[];
  setTasks: (tasks: Task[]) => void;
}

export function AddTaskForm({ setTasks, tasks }: AddTaskFormProps) {
  const [taskTitle, setTaskTitle] = useState('');

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('');

    setTaskTitle(event.target.value);
  }

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();

    const newTask = {
      id: uuidv4(),
      title: taskTitle,
      isDone: false,
    };

    setTasks([...tasks, newTask]);
    setTaskTitle('');
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Digite a tarefa!');
  }

  const isTaskTitleEmpty = taskTitle.length === 0;

  return (
    <form className={styles.addTaskForm}>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        value={taskTitle}
        onChange={handleNewTaskChange}
        onInvalid={handleNewTaskInvalid}
        required
      />
      <button
        type="submit"
        onClick={handleCreateNewTask}
        disabled={isTaskTitleEmpty}
      >
        Criar
        <PlusCircle size={16} weight="bold" />
      </button>
    </form>
  );
}
