import React from 'react'
import Header from '../../components/header/header'
import Nav from '../../components/nav/nav'
import Slider from '../../components/slider/slider'
import { useSelector, useDispatch } from 'react-redux'
import { RootState, AppDispatch } from '../../utils/redux/store'
const Home = () => {

  
  const products =  useSelector((state: RootState)=>state.productReducer.value);
  const dispatch = useDispatch<AppDispatch>();



  return (
    <div className=''>
      <Header />
      <Nav />

      {/* products */}
      <Slider items = {products.slice(5)} />
    </div>
  )
}

export default Home