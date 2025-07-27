import Navbar from './components/Navbar'
import './App.css'
import Managner from './components/Managner'
import Footer from './components/Footer'

function App() {


  return (
    <>
    <Navbar/>
    <div className=" bg-green-50 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
    <Managner/>
    </div>
    <Footer/>
    </>
  )
}

export default App
