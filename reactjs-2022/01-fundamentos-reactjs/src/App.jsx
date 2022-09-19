import { Header } from './components/Header'
import { Post } from './Post'
import { Sidebar } from './components/Sidebar'

import styles from './App.module.css'

import './global.css'

function App() {

  return (
    <div className="App">
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post author="Yuri" content="lorem ipsum " />
          <Post author="Yuri" content="lorem ipsum " />
        </main>
      </div>
    </div>
  )
}

export default App
