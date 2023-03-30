import { CartIcon, HeartIcon, LocationIcon, ProfileIcon, TrackLocationIcon } from "../../assets/icons"
import {Link} from 'react-router-dom'
import { Banner } from "./banner"
const Header = () => {
  return (
    <div className=''>
        <div className="px-16 py-4 flex justify-between text-sm  text-blackish md:px-6 md:flex-wrap md:gap-2">
            <div className="">
                <p>Need help? Call us: (+250) 788 401 749</p>
            </div>
            <div className="flex items-center gap-6">
                <button className='flex items-center gap-4'>
                    {LocationIcon}
                    <span>Our store</span>
                </button>
                <button className='flex items-center gap-4'>
                    {TrackLocationIcon}
                    <span>Track your order</span>
                </button>
            </div>
        </div>
        <div className="bg-darkBlue py-6 px-16 flex items-center gap-4 justify-between md:flex-wrap md:px-4 ">
            {/* Logo */}
            <div className="flex items-center  gap-24 lg:gap-6 sm:flex-col sm:items-start sm:gap-2 sm:w-full">
                <div className="">
                    <img src="/images/logo.svg" alt="Logo" />
                </div>
                {/* Search */}
                <div className="w-[438px] flex sm:w-full">
                    <input className="h-[50px] px-4 rounded-l-xl bg-white text-blackish outline-none w-full placeholder:text-darkBlue placeholder:text-sm" type="text" placeholder="Search products here" />
                    <button className="bg-yellow text-white rounded-xl w-[132px] -ml-3">Search</button>
                </div>
            </div>
            <div className="flex items-center text-white text-sm gap-6">
                <Link to={'/auth/signin'}>
                    <div className="flex items-center gap-2 min-w-[80px]">
                        {ProfileIcon}
                        <span>Sign in</span>
                    </div>
                </Link>
                <Link to={'/auth/signin'}>
                    <div className="flex items-center gap-1">
                        {HeartIcon}
                        <Banner n={5} />
                        <span>Saved</span>                       
                    </div>
                </Link>
                <Link to={'/auth/signin'}>
                    <div className="flex items-center gap-2">
                        {CartIcon}
                        <Banner n={20} />
                        <span>Cart</span>
                    </div>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Header