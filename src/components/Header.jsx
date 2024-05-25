import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

const Header = () => {
    const {search,setSearch} = useContext(GlobalContext)

    const handleSearch = (e)=>{
        setSearch(e.target.value)
    }
    console.log(search);
  return (
    <nav className='navSection'>
        <div className='nav-container'>
            <div className='nav-brand'>RayaGate Task</div>
            <div className='searchBar'>
                <form>
                    <input value={search} onChange={handleSearch} type='text' name='search' placeholder='search posts.....'/>
                </form>
            </div>
        </div>
    </nav>
  )
}

export default Header