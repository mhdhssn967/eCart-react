import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Cart = () => {
  const userCart=useSelector(state=>state.cartReducer)
  const [cartTotal,setCartTotal]=useState(0)

  useEffect(()=>{
    if(userCart?.length>0){
      setCartTotal(userCart?.map(item=>item.totalPrice).reduce((a1,a2)=>a1+a2))
    }
  },[userCart])

  return (
    <>
    <Header />
    <div style={{paddingTop:'100px'}} className='px-5'>
    {userCart?.length>0?
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
           {userCart?.map((product,index)=>(
            <tr>
              <td>{index+1}</td>
              <td>{product.title}</td>
              <td><img src={product?.thumbnail} width={'100px'} alt="" /></td>
              <td>
                <div className='flex'>
                  <button className='font-bold pe-1'>-</button>
                  <input style={{width:'40px'}} className='border p-1 rounded' value={product?.quantity} readOnly type="text" />
                  <button className='font-bold ps-1'>+</button>
                </div>
              </td>
              <td>${product.totalPrice}</td>
              <td><button className='text-red-600'><i className='fa-solid fa-trash'></i></button></td>
           </tr>
           ))}
          </tbody>
        </table>
        <div className="float-right mt-5">
          <button className="bg-red-600 rounded p-2 text-white">Empty Cart</button>
          <Link to={'/'} className='bg-blue-600 ms-3 rounded p-2 text-white'>Shop More</Link>
          
        </div>
      </div>
      <div className="col-span-1">
        <div className="border rounded shadow p-5">
          <h2 className='text-2xl font-bold my-4'>Total Amount : <span className='text-red-600'>{cartTotal}</span></h2>
          <hr />
          <button className="bg-green-600 rounded text-2xl font-bold text-white mt-4 w-full" style={{height:'50px',}}>Checkout</button>
        </div>
      </div>
    </div>
    </>:
     <div className="flex flex-col justify-center item-center align-center">
     <img className='w-100 h-1/2' src="https://cdn.dribbble.com/users/887568/screenshots/3172047/media/35159a4a9ba57200e5e17119ffd945e6.gif" alt=""  width={'650px'}/>
     <h1 className='text-4xl text-red-600 mt-3'>Your Cart is empty!!</h1>
   </div>}

    </div>
    </>
  )
}

export default Cart