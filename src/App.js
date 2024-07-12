import NavRounded from "../src/components/Navbar/Nav"
import Intro from "../src/components/Intro/Intro"
import ProductCards from "./components/ProductCards/ProductCards"
import 'bootstrap/dist/css/bootstrap.css'
import '../src/styles/colors.css'
import './styles/Global.css'


function App() {
  return (
    <>
      <NavRounded />
      <main>
        <Intro /> 
        <ProductCards />
      </main>
    </>
  )
}

export default App;
