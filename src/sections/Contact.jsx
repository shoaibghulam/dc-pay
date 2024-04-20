import { rectangleimg } from "../utils/images";

export default function Contact() {
  return (
    <>
     <div className="overflow-hidden bg-[#F9F9FA] relative py-10 container px-2 md:px-20 m-auto bg-no-repeat bg-cover " style={{
         backgroundImage:`url(${rectangleimg})`
     }}>
        <div className="bg-white p-10">
            <h1 className="text-2xl text-primary font-bold">Have any question? <br/>Contact Us</h1>
 </div>
 {/* <img src={rectangleimg} className="w-full absolute -z-3 top-1/2" /> */}
 <div className=" mt-20 m-auto bg-white p-2 md:p-4 rounded-md">

 <div className="flex flex-col md:flex-row gap-x-0 md:gap-x-5  py-20 ">
    <div className="w-full px-10 md:w-1/2 space-y-10">
        {/* call us start */}
      
        <div>
            <h1 className="pb-2 text-xl font-semibold text-info font-monto">CALL US</h1>
            <ul className="flex flex-col md:flex-row font-monto gap-x-10  text-left md:items-center font-normal text-[#3D3838] text-lg">
                <li>1 (234) 447 - 897</li>
                <li>1 (234) 447 - 897</li>
            </ul>
        </div>
          {/* call us end */}
        {/* address start */}
      
        <div>
            <h1 className="pb-2 text-xl font-semibold text-info font-monto">LOCATION</h1>
            <ul className="flex font-monto gap-x-10 items-center font-normal text-[#3D3838] text-lg">
              <li>121 Rock Street, 21 Avenue , New York, NY -92103-9000</li>
            </ul>
        </div>
          {/* address end */}
        {/* timing start */}
      
        <div>
            <h1 className="pb-2 text-xl font-semibold text-info font-monto">BUSINESS HOURS</h1>
            <ul className="flex font-monto gap-x-10 items-center font-normal text-[#3D3838] text-lg">
              <li>Mon - Friday</li>
            </ul>
        </div>
          {/* timing end */}
    </div>
    <div className="w-full md:w-1/2 py-10 bg-[#F5F4F7]">
    <h1 className="text-center text-xl font-monto font-semibold text-primary">Send A Message</h1>

    <form className="p-4 flex flex-col space-y-5">
        <div>
            <input type="text" name="name" className="bg-white py-5 px-2 w-full border-none focus:outline-none focus:ring-0 font-monto font-medium text-md placeholder-secondary text-secondary  rounded-md" placeholder="Enter your name " />
        </div>
        <div>
            <input type="email" name="email" className="bg-white py-5 px-2 w-full border-none focus:outline-none focus:ring-0 font-monto font-medium text-md placeholder-secondary text-secondary  rounded-md" placeholder="Enter a valid Email address " />
        </div>
        <div>
           <textarea name="message" placeholder="Type a message......" id="" cols="30" rows="10" className="placeholder-[#6E6C70] font-monto w-full focus:outline-none focus:ring-0"></textarea>
        </div>
        <div className="px-20">
          <button type="submit" className="block w-full  text-center text-white bg-[#ED2935] py-3 rounded-md font-monto hover:bg-[#ED2935]/80">Send message</button>
        </div>
    </form>
    </div>
 </div>
 </div>
     </div>
    </>
  )
}
