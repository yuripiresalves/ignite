import { Header } from './components/Header';
import { Task } from './components/Task';

import styles from './App.module.css';

import './global.css';
import { AddTaskForm } from './components/AddTaskForm';
import { EmptyTasks } from './components/EmptyTasks';

const tasks = [
  {
    id: 1,
    title:
      'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    isDone: false,
  },
  {
    id: 2,
    title: 'Integer ',
    isDone: false,
  },
  {
    id: 4,
    title:
      'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.',
    isDone: true,
  },
  {
    id: 3,
    title: 'Integer ',
    isDone: true,
  },
  {
    id: 5,
    title: 'Integer ',
    isDone: true,
  },
  {
    id: 6,
    title: 'Integer ',
    isDone: true,
  },
];

function App() {
  return (
    <div className="App">
      <Header />
      <main className={styles.wrapper}>
        <header>
          <AddTaskForm />
          <div className={styles.allTasks}>
            <strong>Tarefas criadas</strong>
            <span>{tasks.length}</span>
          </div>
          <div className={styles.tasksDone}>
            <strong>Concluídas</strong>
            <span>{`0 ${tasks.length > 0 ? `de ${tasks.length}` : ''}`}</span>
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
