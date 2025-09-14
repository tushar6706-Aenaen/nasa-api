import React from 'react'

const Footer = (props) => {
  const {handleToggleModal,data} = props;
  return (
    <footer>
        <div className='bg-gradient'></div>
        <div className='footer-content'> 
            <h2>{data?.title}</h2>
            <h1>APOD PROJECT</h1>
            <p className='footer-date'>{data?.date}</p>
        </div>
        <button onClick={handleToggleModal} className='info-button'>
            <i className="fa-solid fa-circle-info"></i>
        </button>
    </footer>
  )
}

export default Footer
