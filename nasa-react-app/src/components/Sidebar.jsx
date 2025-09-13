import React from 'react'

const Sidebar = () => {
    return (
        <aside className='sidebar'>
            <div className='bg-overlay'> </div>
            <div className='sidebar-contents'>

                <h2>The Brutal Martian Landscape</h2>
                <div>

                    <p>Description</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, enim laborum eius pariatur quaerat temporibus itaque aperiam expedita, ipsa repellat quas alias illum quisquam rerum nesciunt praesentium perspiciatis numquam! Dolorem!</p>
                </div>
                <button><i className="fa-solid fa-arrow-right"></i></button>
            </div>
        </aside>
    )
}

export default Sidebar
