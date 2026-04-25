import React from 'react'

const Navbar = () => {
  return (
    <nav className='shadow-md'>
        <div className='container mx-auto'>
            <div>
                <a href="#">ReactTailwind</a>
            </div>

            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Service</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>
        
    </nav>
  )
}

export default Navbar