
import Main from './components/Main'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import { useState } from 'react'

const App = () => {
  const [showModel,setShowModel] = useState(false);


  return (
    <>
        <Main/>
        {showModel && (<Sidebar/>) }
        <Footer/>
    </>
  )
}

export default App
