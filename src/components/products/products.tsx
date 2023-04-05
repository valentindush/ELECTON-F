import { useSelector, useDispatch } from "react-redux"
import { AppDispatch, RootState } from "../../utils/redux/store"

const Products = () => {


    const products =  useSelector((state: RootState)=>state.productReducer.value);
    const dispatch = useDispatch<AppDispatch>();

    

  return (
    <div className='flex'>
        
    </div>
  )
}

export default Products