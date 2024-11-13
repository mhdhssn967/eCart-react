import React from 'react'
import Header from '../components/Header'


const View = () => {
  return (
    <>
    <Header/>
    <div className='mx-5 flex'>
      <div style={{marginTop:'150px', display:'flex',alignItems:'center',height:'50vh'}}>
        <div className="grid grid-cols-2 items-center">
          <img className='ms-40' width={'650px'} height={'650px'} src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MQTQ3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1687660671363" alt="" />
        </div>
        <div>
          <h3 className='font-bold'>PID:3</h3>
          <h1 className='text-5xl font-bold'>Title</h1>
          <h4 className='font-bold text-red-600'>$600</h4>
          <h4>Brand : brand</h4>
          <h4>Category : category</h4>
          <p>
            <span className='font-bold'>Description</span>: Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda mollitia impedit corrupti fuga, vel laborum officia magnam eum minima ipsa quis, fugiat rerum iste magni? Eaque sapiente unde maiores incidunt.
            Aperiam iusto id possimus. Quia, a veritatis! Aliquam quo rerum, perspiciatis iste similique nobis quis eius soluta dolorum excepturi, beatae id reiciendis ipsa debitis sed quibusdam neque quia doloribus et?
          </p>
          <div className='flex justify-between mt-5'>
            <button className='bg-blue-600 rounded text-white p-2'>Add to Wishlist</button>
            <button className='bg-green-600 rounded text-white p-2'>Add to Cart</button>
  
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default View