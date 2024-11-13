import React from 'react'
import Header from '../components/Header'

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
        </table>
      </div>
    </div>
    </>

    </div>
    </>
  )
}

export default Cart