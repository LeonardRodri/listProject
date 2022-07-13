import { Header } from './components/Header';
import {Post} from './components/Post';
import styles from './App.module.css';
import './global.css';
import { Sidebar } from './components/Sidebar';

export function App() {

  return (
    <div>
    <Header/>
    
    <div className={styles.wrapper}>
      <Sidebar /> 
      <main>
        <Post 
          author="Leonardo Rodrigues"
          content="Ad culpa cupidatat nulla do sint minim do laboris. Elit elit commodo eiusmod est commodo et ipsum Lorem occaecat et dolore nisi aliqua. Anim eu ea esse occaecat labore aliquip ex ea quis aliquip veniam irure dolor cillum. Sit non minim dolor nisi ut minim in."
        />
        <Post 
          author="Leonardo Rodrigues"
          content="Proident enim fugiat et consectetur excepteur in duis non id elit cillum commodo. "
        />
      </main>
    </div>
    </div> 
  )
}
