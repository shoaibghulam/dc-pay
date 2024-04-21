import { Link } from "react-router-dom";
import FeatureCard from "../components/card/FeatureCard";
import { icon1, icon2, icon3, iphonepro } from "../utils/images";

export default function Features() {
  return (
    <>
     <div className="relative py-10 container px-2 md:px-20 m-auto" id="features">
        <div className="w-full md:w-9/12 m-auto text-center">
            <h1 className="text-4xl font-bold text-primary pb-10">Key Features</h1>
            <p className="text-2xl font-monto font-light">More Than A Wallet, Your Decentralized Connection to Your Assets</p>
            <p className="pt-4 text-[#696768] font-light text-xl font-open-sans">
            We understand that you have a wide range of crypto wallets to choose from. But there’s only one wallet with a decentralized on-ramp and access to the features crypto newcomers and veterans want most: Bettatrade. Our wallet also features more user-friendly accessibility options like dark/light mode.

            </p>
        </div>
        <div className="flex flex-col-reverse md:flex-row  items-center justify-between">
            <div className="w-full md:w-1/2 px-5 space-y-5 ">
               <FeatureCard
                image={icon1}
                title="User- Friendly"
                desc="DCpay has several biometric security features to keep your crypto assets safely in your wallet. You can also opt for PIN number access and a private phrase."
                
                />
               <FeatureCard
                image={icon2}
                title="User- Friendly"
                desc="DCpay has several biometric security features to keep your crypto assets safely in your wallet. You can also opt for PIN number access and a private phrase."
                
                />
               <FeatureCard
                image={icon3}
                title="User- Friendly"
                desc="DCpay has several biometric security features to keep your crypto assets safely in your wallet. You can also opt for PIN number access and a private phrase."
                
                />
            </div>
            <div className="p-20 w-full md:w-1/2 text-center">
                <img src={iphonepro} className="w-full" />
            </div>
        </div>
        <div className="text-center py-5">
            <Link to="#" className="py-3 px-20 rounded-md text-center text-white bg-secondary hover:bg-secondary/90">Download</Link>
        </div>

     </div>
    </>
  )
}
