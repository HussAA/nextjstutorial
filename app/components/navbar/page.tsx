import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
const Navbar = () => {
  return (
    <>
        {/* Above Navbar */}
      <div className="bg-slate-700 p-2">
        <div className='text-slate-100 text-center font-medium uppercase text-sm'>free shipping on orders over $75</div>
      </div>
      <nav className="bg-slate-100 py-5 px-8">
      <div className="flex justify-between items-center text-center">
        {/* Search */}
        <div className="items-center">
          <SearchIcon className=" text-black"/>
          {/* You can replace "Search" with an actual search input field */}
        </div>

        {/* Logo (Centered) */}
        <div className="text-black font-medium text-4xl ms-6">[Business Name]</div>

        {/* Profile and Bag Icons (Right) */}
        <div className="items-center">
          <PermIdentityOutlinedIcon className="text-black"/>
          {/* You can use icons for profile and bag */}
          <ShoppingBagOutlinedIcon className="text-black"/>
        </div>
      </div>
      <div className="items-center py-7">
       
          <ul className='text-black flex justify-evenly'>
            <li >
              <a href='#'>New Arrivals</a>
            </li>
            <li>
              <a href='#'>Bestsellers</a>
            </li>
            <li>
              <a href='#'>DU Exlusives</a>
            </li>
            <li>
              <a href='#'>Clothing</a>
            </li>
            <li>
              <a href='#'>Dresses</a>
            </li>
            <li>
              <a href='#'>Shoes</a>
            </li>
            <li>
              <a href='#'>Accessories</a>
            </li>
            <li>
              <a href='#'>Sale</a>
            </li>
          </ul>
        
      </div>
    </nav>
    </>
  )
}

export default Navbar