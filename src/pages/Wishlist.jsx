import React from 'react'
import Header from '../components/Header'


const Wishlist = () => {
  return (
    <>
    <Header />
   <div style={{paddingTop:'100px'}} className='px-5'>
      <>
        <h1 className="text-4xl font-bold text-red-600">My Wishlist</h1>
        <div className="grid grid-cols-4 gap-4 pt-5">
            <div className="rounded border p-2 shadow">
                <img width={'100%'} height={'200px'} src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MQTQ3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1687660671363" alt="" />
                <div className="text-center">
                    <h3 className="text-xl font-bold mb-3">Beats Studio Pro</h3>
                  <div className='flex justify-evenly mt-3'>
                      <button className='text-xl'><i className='fa-solid fa-heart-circle-xmark text-red-500'></i></button>
                      <button className='text-xl'><i className='fa-solid fa-cart-plus text-green-500'></i></button>
                  </div>
                </div>
            </div>
        </div>
      </>
   </div>
    </>
  )
}

export default Wishlist