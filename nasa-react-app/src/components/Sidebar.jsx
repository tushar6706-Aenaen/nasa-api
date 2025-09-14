import React from 'react'

const Sidebar = (props) => {
    const {handleToggleModal,data} = props;
    return (
        <aside className='sidebar'>
            <div onClick={handleToggleModal} className='bg-overlay'> </div>
            <div className='sidebar-contents'>

                <h2>{data?.title}</h2>
                <div className='explanation'>

                    <p className='description'>{data?.date}</p>
                    <p>{data?.explanation}</p>
                </div>
                <button onClick={handleToggleModal}><i className="fa-solid fa-arrow-right"></i></button>
            </div>
        </aside>
    )
}

export default Sidebar
