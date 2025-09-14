
import Main from './components/Main'
import Sidebar from './components/Sidebar'
import Footer from './components/Footer'
import { useEffect, useState } from 'react'

const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const NASA_API_KEY = import.meta.env.VITE_NASA_API_KEY;
  const [showModal, setShowModal] = useState(false);

  const handleToggleModal = () => {
    setShowModal(!showModal)
  }

  useEffect(() => {
    async function fetchData() {
      const url = `https://api.nasa.gov/planetary/apod` + `?api_key=${NASA_API_KEY}`


      const today = (new Date()).toDateString();
      const localKey = `NASA-${today}`

      if (localStorage.getItem(localKey)) {
        const apiDate = JSON.parse(localStorage.getItem(localKey));
        setData(apiDate);
        console.log("Fetched from cache Today");
        return;
      }
      localStorage.clear();

      try {
        const res = await fetch(url);
        const apiData = await res.json();
        localStorage.setItem(localKey,JSON.stringify(apiData));
        setData(apiData);
        console.log("Fetched from API Today");
      } catch (err) {
        console.error(err.message);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      {data ? (<Main data={data} />) : <div className='loading'>
        <i class="fa-solid fa-gear"></i>
      </div>}
      {showModal &&
        (<Sidebar data={data} handleToggleModal={handleToggleModal} />)
      }
      {data &&
        (<Footer data={data} handleToggleModal={handleToggleModal} />)
      }
    </>
  )
}

export default App
