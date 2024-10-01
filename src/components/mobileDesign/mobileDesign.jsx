import Bill from "../bill/bill-mahoney"
import Saba from "../saba-cabrera/saba"
import Shae from "../shae/shae-le"
import Skylah from "../Skylah/Skylah-Lu"
import Griff from "../Griff/Griff-Richards"
import Stan from "../Stanh/Stanh-John"
export default function MobileDesign(){
    return(
        <>
    <section className='ms-5 mt-5 h-lvh flex flex-col md:hidden overflow-x-auto'>
    <h1 className='font-bold text-4xl mb-4'>The creative crew</h1>
    <h2 className='font-bold text-lg'>Who we are</h2>
    <p>We are team of creatively diverse. Driven <br />innovative individuals working in various <br />locations from the world.</p>
    <div className='flex '>
      <Bill />
      <Saba/> 
    </div>
    <div className='flex '>
      <Shae />
      <Skylah /> 
    </div>
    <div className='flex '>
      <Griff />
      <Stan /> 
    </div>
  </section>
  </>
    )
}