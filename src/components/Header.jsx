import React from 'react'
import { Link } from 'react-router-dom'


const Header = ({insideHome}) => {
  return (
    <nav className='flex bg-violet-600 fixed w-full p-5 text-white'>
        <Link className='text-2xl font-bold' to={'/'}><i className="fa-solid fa-truck me-2"></i>Daily Cart</Link>
        <ul className='flex-1 text-right'>
            { insideHome &&
              <li className='list-none inline-block px-5'><input style={{width:'300px',padding:'5px',borderRadius:'10px', fontWeight:'400'}} type="text" placeholder='Search Products Here!' /></li>
            }
            <li className='list-none inline-block px-5'><Link to={'/wishlist'}><p><i className="fa-solid fa-heart text-red-600 me-1"></i>Wishlist <span className='bg-black text-white rounded p-1'>20</span></p></Link></li>
            <li className='list-none inline-block px-5'><Link to={'/cart'}><i class="fa-solid fa-cart-shopping text-white-600 me-1"></i>Cart <span className='bg-black text-white rounded p-1'>10</span></Link></li>
        </ul>
    </nav>
  )
}

export default Header