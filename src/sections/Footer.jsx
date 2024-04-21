import { Link } from "react-router-dom";
import { facebookicon, logoimg, telegramicon, xicon } from "../utils/images";
import ScrollItem from "../components/menu/ScrollItem";

export default function Footer() {
  return (
    <>
     <div className="relative  container px-2 md:px-20 m-auto">
        <div className="flex flex-col md:flex-row items-center pt-5 justify-center">
            <div className="w-full md:w-3/12">
            <img src={logoimg} className="m-auto w-1/2 md:w-full"/>
            </div>
            <div className="w-full flex flex-col justify-center items-center md:w-9/12">
                <div className="flex flex-col md:flex-row space-y-10">

                    <div className="flex flex-wrap just-center gap-x-5 text-md font-open-sans text-primary">
                    <ScrollItem id="home" title="Home" lassName="hover:font-semibold ease-in hover:ease-out duration-500"/>
        <ScrollItem id="features" title="Features" lassName="hover:font-semibold ease-in hover:ease-out duration-500"/>
        <ScrollItem id="about" title="About" lassName="hover:font-semibold ease-in hover:ease-out duration-500"/>
                     
                        <Link to="#" className="hover:font-semibold ease-in hover:ease-out duration-500">Terms & Condition</Link>
                        <Link to="#" className="hover:font-semibold ease-in hover:ease-out duration-500">Privacy Policy</Link>
                    



                    </div>
                    <div className="flex justify-center flex-row gap-x-3 ">
                        <a href="#">
                        <img src={facebookicon} alt="facebook" className="w-[44px]" />
                        </a>
                        <a href="#">
                        <img src={xicon} alt="x icon" className="w-[40px]" />
                        </a>
                        <a href="#">
                        <img src={telegramicon} alt="telegram icon" className="w-[40px]" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
     </div>
    </>
  )
}
