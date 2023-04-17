import { useState } from "react"
import { Product } from "../../types"
import CTAButton from "./CTAButton"
import {FaArrowLeft} from 'react-icons/fa'

interface propsType{
    items: Product[]
}

const Slider = ({items}: propsType) => {

    const [activeItem, setActiveItem] = useState<Product>(items[0])
    const [activeItemIndex, setActiveItemIndex] = useState(0)
    const MAX_ITEMS = items.length - 1

    const showNext = ()=>{
        if(activeItemIndex === MAX_ITEMS){
            setActiveItem(items[0])
            setActiveItemIndex(0)
            return
        }
        setActiveItem(items[activeItemIndex + 1])
        setActiveItemIndex((i)=>i + 1)
        console.log(activeItemIndex)
    }

    const showPrev = ()=>{
        if(activeItemIndex === 0){
            setActiveItem(items[MAX_ITEMS])
            setActiveItemIndex(MAX_ITEMS)
            return
        }
        setActiveItem(items[activeItemIndex - 1])
        setActiveItemIndex((i)=>i - 1)
    }
  return (
    <div className='w-full px-24 pt-12'>
        <div className="flex justify-between">
            <div className="">
                <div className="">
                    <p className="text-[40px] font-bold text-darkBlue">{activeItem.name}</p>
                </div>
                <div className="flex items-center gap-5 mt-16">
                    <CTAButton text={"Shop now"} to={"/product/"+activeItem.id} type={"filled"}  />
                    <CTAButton text={"View more"} to={"/product/"+activeItem.id} type={"outlined"}  />
                </div>
                <div className="">
                    {Array(3).map((v, i)=>(
                        <div className="rounded-full ">
                            
                        </div>
                    ))}
                </div>
            </div>
            <img className=" h-[350px] object-cover" src={activeItem.imageUrl[0] ==='default'? "/images/cam1.png": ""} alt="product image" />
        </div>
        <div className="mt-3 flex items-center gap-8">
            <button onClick={showPrev} className="p-2 text-sm text-yellow border border-yellow px-3 rounded-lg flex items-center gap-3">
                <FaArrowLeft className="inline-block ml-2" />
                Prev
            </button>
            <button onClick={showNext} className="p-2 text-sm text-yellow border border-yellow px-3 rounded-lg flex items-center gap-3">
                Next
                <FaArrowLeft className="inline-block ml-2 rotate-180" />   
            </button>
        </div>
    </div>
  )
}

export default Slider