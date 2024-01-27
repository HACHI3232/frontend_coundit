import styles from '../styles/Home.module.css'
import { CustomHead } from "../components/CustomHead"
import { Header } from '../components/Header';

export default function Home() {
  return (
    <div className={styles.container}>
      <CustomHead />
      <Header/>
    </div>
  )
}
