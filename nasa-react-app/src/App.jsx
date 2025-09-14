
import Main from './components/Main'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import { useState } from 'react'

const App = () => {
  const [showModal,setShowModal] = useState(false);
  const handleToggleModal = () => {
    setShowModal(!showModal)
  }

  return (
    <>
        <Main/>
        {showModal && (<Sidebar handleToggleModal={handleToggleModal} />) }
        <Footer  handleToggleModal={handleToggleModal}/>
    </>
  )
}

export default App
