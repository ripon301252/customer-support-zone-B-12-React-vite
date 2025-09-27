
import { Suspense, useState } from 'react'
import './App.css'
import Footer from './Components/Footer'
import Manages from './Components/Manages'
import Navbar from './Components/Navbar'
import { ToastContainer } from 'react-toastify';



const fetchPromise = fetch('../data.json').then(res => res.json())


function App() {
  const [resolved, setResolved] = useState([])
  console.log(resolved)

  return (
    <>

      <Navbar></Navbar>
      <Suspense fallback={<div className='flex justify-center items-center'><span className="loading loading-bars loading-xl"></span></div>}>
        <Manages resolved={resolved} setResolved={setResolved} fetchPromise={fetchPromise}></Manages>
      </Suspense>
      <Footer></Footer>


      <ToastContainer />

    </>
  )
}

export default App
