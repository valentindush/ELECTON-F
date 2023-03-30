
interface propsType{
    n: number
}

export const Banner = ({n}: propsType) => {
  return (
    <div className="bg-yellow text-white text-[10px] flex items-center justify-center w-[20px] h-[20px] rounded-full scale-90">
        {n <= 9? n : "9+"}
    </div>
  )
}
