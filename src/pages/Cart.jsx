import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'

const Cart = () => {
  return (
    <>
    <Header />
    <div style={{paddingTop:'100px'}} className='px-5'>
    <>
    <h1 className='text-5xl font-bold text-blue-600'>Cart Summary</h1>
    <div className='grid grid-cols-3 gap-4 mt-5'>
      <div className="col-span-2 border rounded p-5 shadow">
        <table className='table auto w-full'>
          <thead>
            <tr>
              <td className='font font-semibold'>#</td>
              <td className='font font-semibold'>Name</td>
              <td className='font font-semibold'>Image</td>
              <td className='font font-semibold'>Quantity</td>
              <td className='font font-semibold'>Price</td>
              <td className='font font-semibold'>...</td>
            </tr>
          </thead>
          <tbody>
            <td>1</td>
            <td>Product Name</td>
            <td><img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MQTQ3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1687660671363" width={'100px'} alt="" /></td>
            <td>
              <div className='flex'>
                <button className='font-bold pe-1'>-</button>
                <input style={{width:'40px'}} className='border p-1 rounded' value={12} readOnly type="text" />
                <button className='font-bold ps-1'>+</button>
              </div>
            </td>
            <td>$250</td>
            <td><button className='text-red-600'><i className='fa-solid'></i></button></td>
          </tbody>
        </table>
        <div className="float-right mt-5">
          <button className="bg-red-600 rounded p-2 text-white">Empty Cart</button>
          <Link to={'/'} className='bg-blue-600 ms-3 rounded p-2 text-white'>Shop More</Link>
          
        </div>
      </div>
      <div className="col-span-1">
        <div className="border rounded shadow p-5">
          <h2 className='text-2xl font-bold my-4'>Total Amount : <span className='text-red-600'>$250</span></h2>
          <hr />
          <button className="bg-green-600 rounded text-2xl font-bold text-white mt-4 w-full" style={{height:'50px',}}>Checkout</button>
        </div>
      </div>
    </div>
    </>

    </div>
    </>
  )
}

export default Cart