import { useState } from 'react';
import { AddTaskForm } from './components/AddTaskForm';
import { EmptyTasks } from './components/EmptyTasks';
import { Header } from './components/Header';
import { Task } from './components/Task';

import styles from './App.module.css';

import './global.css';

interface Task {
  id: string;
  title: string;
  isDone: boolean;
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const tasksDone = tasks.filter((task) => task.isDone === true);

  function handleToggleTaskDone(id: string) {
    const newTask = tasks.map((task) =>
      task.id === id
        ? {
            ...task,
            isDone: !task.isDone,
          }
        : task
    );

    setTasks(newTask);
  }

  function handleDeleteTask(id: string) {
    const tasksWithoutDeletedOne = tasks.filter((task) => task.id !== id);

    setTasks(tasksWithoutDeletedOne);
  }

  return (
    <div className="App">
      <Header />
      <main className={styles.wrapper}>
        <header>
          <AddTaskForm tasks={tasks} setTasks={setTasks} />
          <div className={styles.allTasks}>
            <strong>Tarefas criadas</strong>
            <span>{tasks.length}</span>
          </div>
          <div className={styles.tasksDone}>
            <strong>Concluídas</strong>
            <span>{`${tasksDone.length} ${
              tasks.length > 0 ? `de ${tasks.length}` : ''
            }`}</span>
          </div>
        </header>
        {tasks.length > 0 ? (
          tasks.map((task) => {
            return (
              <Task
                key={task.id}
                id={task.id}
                title={task.title}
                isDone={task.isDone}
                handleToggleTaskDone={handleToggleTaskDone}
                handleDeleteTask={handleDeleteTask}
              />
            );
          })
        ) : (
          <EmptyTasks />
        )}
      </main>
    </div>
  );
}

export default App;
