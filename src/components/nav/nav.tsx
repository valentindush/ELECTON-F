import {useState} from 'react'


const categories:string[] = [
    "Electonics",
    "Furniture",
    "Food & drinks",
    "Clothing",
    "Beauty and cosmetics"
]

const Nav = () => {

    const [activeCategory, setActiveCategory] = useState<string>(categories[0])

  return (
    <div className='px-16 py-1 flex items-center justify-between'>
        <div className="flex items-center">
            <div className="bg-yellow w-fit p-3 rounded-md">
                <button className='text-white text-md font-medium'>All categories</button>
            </div>
            <div className="flex items-center gap-2 px-3 text-darkBlue text-sm">
                {categories.map((cat,index)=>(
                    <button onClick={()=>setActiveCategory(cat)} className={`p-2 px-4 rounded-xl border-2 active:scale-[.99] ${activeCategory === cat ? " border-yellow bg-yellow bg-opacity-25": "border-transparent"}`}>{cat}</button>
                ))}
            </div>
        </div>
        <div >
            <p className='text-md font-bold text-darkBlue'>30 Days Free Return</p>
        </div>
    </div>
  )
}

export default Nav