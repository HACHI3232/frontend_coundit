import { CustomHead } from "../components/CustomHead"
import { Header } from '../components/Header';
import { Homepage } from '../components/Homepage';


export default function Home() {
  return (
    <div>
      <CustomHead />
      <Header/>
      <Homepage />
    </div>
  )
}
