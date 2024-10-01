import Bill from "../bill/bill-mahoney";
import Saba from "../saba-cabrera/saba";
import GriffDesktop from "../griff-desktop-tablet/griff-desktop";
import Shae from "../shae/shae-le";
import SkylahDesktop from "../Skylah-desktop/Skylah-desktop";
import StanDesktop from "../stan-desktop/Stan-desktop";

export default function TabletDessign(){
    return(
    <section className='hidden md:flex md:flex-col overflow-x-auto mt-10 lg:hidden xl:hidden 2xl:hidden'>
          <div className='flex gap-x-6'>
            <h1 className='font-bold text-4xl mb-4 '>The creative crew</h1>
            <div className="flex flex-col">
            <h2 className='font-bold text-lg'>Who we are</h2>
            <p>We are team of creatively diverse. Driven <br />innovative individuals working in various <br />locations from the world.</p>
            </div>
          </div>
          <div className='flex '>
            <Bill />
            <Saba />
            <Shae />
          </div>
          <div className='flex'>
            <SkylahDesktop/>
            <GriffDesktop />
            <StanDesktop />
          </div>
        </section>
    )
}