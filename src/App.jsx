import Navbar from './components/Navbar'
import './App.css'
import Managner from './components/Managner'
import Footer from './components/Footer'

function App() {


  return (
    <>
    <Navbar/>
   
   <div className='min-h-[81.7vh]'>
      <Managner/>
   </div>
   <Footer/>
    </>
  )
}

export default App
