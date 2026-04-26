import React from 'react'

const Navbar = () => {
  return (
    <nav className='shadow-md p-5 bg-sky-500'>
        <div className='container mx-auto flex flex-col md:flex-row justify-between items-center'>
            <div>
                <a href="#">ReactTailwind</a>
            </div>

            <ul className='flex flex-col md:flex-row'>
                <li className='mx-5'><a href="#">Home</a></li>
                <li className='mx-5'><a href="#">About</a></li>
                <li className='mx-5'><a href="#">Service</a></li>
                <li className='mx-5'><a href="#">Contact</a></li>
            </ul>
        </div>
        
    </nav>
  )
}

export default Navbar