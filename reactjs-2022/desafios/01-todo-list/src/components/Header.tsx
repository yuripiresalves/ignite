import toDoLogo from '../assets/todo-logo.svg';

import styles from './Header.module.css';

export function Header() {
  return (
    <header className={styles.header}>
      <img src={toDoLogo} alt="Logo ToDO" />
    </header>
  );
}
