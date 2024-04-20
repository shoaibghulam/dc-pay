/* eslint-disable react/prop-types */
export default function FeatureCard({image,title,desc}) {
  return (
    <div className="bg-[#2B0846] text-white p-4  gap-x-5 py-5 flex flex-col md:flex-row justify-between items-center rounded-md text-center md:text-left">
     <div className="w-full  md:w-3/12">
        <img src={image} className=" m-auto"/>
     </div>
     <div className="w-full md:w-9/12">
        <h1 className="text-2xl font-monto font-semibold">{title}</h1>
        <p className="text-md font-monto text-white/60 font-normal pt-3">{desc}</p>
     </div>
    </div>
  )
}
