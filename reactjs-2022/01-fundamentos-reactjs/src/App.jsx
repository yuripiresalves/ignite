import { Header } from './components/Header'
import { Post } from './Post'
import './global.css'

function App() {

  return (
    <div className="App">
      <Header />
      <Post author="Yuri" content="lorem ipsum " />
    </div>
  )
}

export default App
