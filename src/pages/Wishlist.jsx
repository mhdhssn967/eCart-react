import React from 'react'
import Header from '../components/Header'
import { useDispatch, useSelector } from 'react-redux'
import { removeItem } from '../redux/slices/wishListSlice'

const Wishlist = () => {
  const dispatch = useDispatch()
  const userWishlist = useSelector(state=>state.wishlistReducer)
  return (
    <>
       <Header/>
       <div style={{paddingTop:'100px'}} className='px-5'>
       {
        userWishlist?.length>0?
        <>
        <h1 className='text-4xl font-bold text-red-600'>My Wishlist</h1>
        <div className="grid grid-cols-4 gap-4">
       {
        userWishlist?.map(product=>(
          <div key={product?.id} className="rounded border p-2 shadow">
          <img width={'100%'} height={'200px'} src={product?.thumbnail} alt="" />
          <div className="text-center">
            <h3 className='text-xl font-bold'>{product?.title}</h3>
            <div className="flex justify-evenly mt-3">
              <button onClick={()=>dispatch(removeItem(product?.id))} className='text-xl'><i className='fa-solid fa-heart-circle-xmark text-red-600'></i></button>
              <button className='text-xl'><i className='fa-solid fa-cart-plus text-green-700'></i></button>

            </div>
          </div>
        </div>
        ))
       }
      </div>
        </>
        :
        <div className="flex flex-col justify-center item-center align-center">
          <img className='w-100 h-1/2' src="https://cdn.dribbble.com/users/887568/screenshots/3172047/media/35159a4a9ba57200e5e17119ffd945e6.gif" alt=""  width={'650px'}/>
          <h1 className='text-4xl text-red-600 mt-3'>Your Wishlist is empty!!</h1>
        </div>
      }
       </div>
    </>
  )
}

export default Wishlist