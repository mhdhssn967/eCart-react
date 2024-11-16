import React, { useEffect } from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { fetchProducts } from '../redux/slices/productSlice'


const Home = () => {
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(fetchProducts())
  },[])
  return (
    <>
    <Header insideHome={true}/>
    <div style={{paddingTop:'100px'}} className='container px-4 mx-auto'>
        <div className="grid grid-cols-4 gap-4">
            <div className="rounded border p-2 shadow">
                <img width={'100%'} height={'200px'} src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MQTQ3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1687660671363" alt="" />
                <div className="text-center">
                    <h3 className="text-xl font-bold mb-3">Beats Studio Pro</h3>
                    <Link to={'/id/view'} className='bg-violet-600 rounded p-2 mt-5 text-white'>View More</Link>
                </div>
            </div>
        </div>
    </div>
    
    </>
  )
}

export default Home