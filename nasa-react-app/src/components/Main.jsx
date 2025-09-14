import React from 'react'

const Main = (props) => {
    const { data } = props;
  return (
    <main className='image-container'>
        {data?.media_type === 'video' ? (
            <iframe 
                src={data.url} 
                title={data?.title}
                className='bgImage'
                frameBorder="0"
                allowFullScreen
            />
        ) : (
            <img src={data.url} alt={data?.title} className='bgImage'/> 
        )}
    </main>
  )
}

export default Main
