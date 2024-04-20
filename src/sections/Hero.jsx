import { Link } from 'react-router-dom';
import { btcimg, ethimg, iphonestoreimg,  mobilesimg, playstoreimg, solimg } from '../utils/images';
import { NavbarMenu } from '../components/menu/NavbarMenu';

export default function Hero() {
  return (
    <>
        <div className="relative ">
      <div className="container px-2 md:px-20 m-auto">
        {/* ellipse start */}
      
        <div className="hidden md:block m-auto w-[700px] h-[700px] bg-[#a290b03e] absolute  left-0 right-0 bottom-0 -z-10 rounded-full">
        <div className="m-auto w-[600px] h-[600px] bg-[#a290b015] absolute  left-0 right-0 bottom-10 -z-[9] flex items-center justify-center rounded-full">
        <div className="m-auto w-[400px] h-[400px] bg-[#a290b015] absolute  left-0 right-0 bottom-15 -z-[9] flex items-center justify-center rounded-full"></div>

        </div>
        </div>
          {/* ellipse end */}
        {/* menu start */}
       <NavbarMenu />
    {/* menu end */}
     <div className="relative text-center text-primary  mt-5 md:mt-5 w-full md:w-2/3 m-auto">
        <h1 className="text-3xl md:text-5xl leading-[40px] md:leading-[60px] font-bold ">The Most Easiest, Fast & Secure Cryptocurrency Wallet</h1>
        <p className="text-lg font-normal">Stay connected to your crypto with our fully secure and decentralized Wallet</p>
      <img src={btcimg} className='w-20 absolute -left-1 md:-left-[20%] top-1/2' alt="" />
      <img src={ethimg} className='w-20 absolute -right-2 md:-right-[20%] top-1/2' alt="" />
      <div className='flex items-center justify-center gap-x-5 mt-10'>
        <Link to="#">
        <img src={playstoreimg} className='w-[200px] hover:opacity-85' alt="" />
        </Link>
        <Link to="#">
        <img src={iphonestoreimg} className='w-[200px] hover:opacity-85' alt="" />
        </Link>
      </div>
     </div>
     <div className="relative w-full md:w-9/12 m-auto flex items-center justify-center pb-10">
        <img src={mobilesimg} className='w-full h-full' alt="" />
        <img src={solimg} className='w-10 md:w-20 z-30 absolute -left-2 md:-left-[20%] top-1/2' alt="" />
     </div>

      </div>
    </div>
    </>
  )
}
