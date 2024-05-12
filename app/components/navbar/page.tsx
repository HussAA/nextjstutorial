import React from 'react'

const Navbar = () => {
  return (
    <>
      <div className="bg-gray-700 p-2">
        <div className='text-slate-300 text-center font-bold uppercase'>free shipping on orders over $75</div>
      </div>
      <nav className="bg-gray-800 p-4 px-11">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Search */}
        <div className="flex items-center">
          <div className="mr-4 text-white">Search</div>
          {/* You can replace "Search" with an actual search input field */}
        </div>

        {/* Logo (Centered) */}
        <div className="text-white font-bold text-4xl">Logo</div>

        {/* Profile and Bag Icons (Right) */}
        <div className="flex items-center">
          <div className="mr-4 text-white">Profile</div>
          {/* You can use icons for profile and bag */}
          <div className="text-white">Bag</div>
        </div>
      </div>
      <div className="max-w-6xl items-center p-7">
       
          <ul className='mx-auto flex justify-evenly'>
            <li>
              <a>New Arrivals</a>
            </li>
            <li>
              <a>Bestsellers</a>
            </li>
            <li>
              <a>Exlusives</a>
            </li>
            <li>
              <a>Clothing</a>
            </li>
            <li>
              <a>Dresses</a>
            </li>
            <li>
              <a>Shoes</a>
            </li>
            <li>
              <a>Accessories</a>
            </li>
            <li>
              <a>Sale</a>
            </li>
          </ul>
        
      </div>
    </nav>
    </>
  )
}

export default Navbar