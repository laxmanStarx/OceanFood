import landingImage from "../assets/landing.png"
import appDownload from "../assets/appDownload.png"

const HomePage=()=> {
  return (
    <>
 
   <div className="flex flex-col gap-12">
   
    <div className="bg-white rounded-lg shadow-md flex flex-col gap-5 text-center -mt-16">
        <h1 className="text-5xl font-bold tracking-tight text-orange-500">
            Tuck into a takeway today
        </h1>
        <span className="text-xl">Food is just a click a way</span>
   
    <div className="grid md:grid-cols-2 gap-5"></div>
    <img src={landingImage}/>

    <div className="flex flex-col items-center justify-center gap-4 text-center">

        <span className = "font-bold text-3xl tracking-tighter">
            Download the MernOceanEats for faster ordering and persionalised recommendation
        </span>
        <img  src ={appDownload}/>

    </div>
    </div>
    
   </div>
  
   
   </>
  )
}

export default HomePage