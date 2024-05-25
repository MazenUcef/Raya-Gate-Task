import React from 'react'

const Header = () => {
  return (
    <nav className='navSection'>
        <div className='nav-container'>
            <div className='nav-brand'>RayaGate Task</div>
            <div className='searchBar'>
                <form>
                    <input type='text' name='search' placeholder='search posts.....'/>
                </form>
            </div>
        </div>
    </nav>
  )
}

export default Header