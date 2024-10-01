import Bill from "../bill/bill-mahoney";
import Saba from "../saba-cabrera/saba";
import GriffDesktop from "../griff-desktop-tablet/griff-desktop";
import Shae from "../shae/shae-le";
import SkylahDesktop from "../Skylah-desktop/Skylah-desktop";
import StanDesktop from "../stan-desktop/Stan-desktop";

export default function DesktopDessign(){
    return(
    <section className='hidden lg:flex lg:flex-col xl:flex xl:flex-col 2xl:flex 2xl:flex-col   mt-10  justify-between'>
          <div className='flex gap-x-48'>
            <h1 className='font-bold text-4xl mb-4 '>The creative crew</h1>
            <div className="flex flex-col">
            <h2 className='font-bold text-lg'>Who we are</h2>
            <p>We are team of creatively diverse. Driven <br />innovative individuals working in various <br />locations from the world.</p>
            </div>
          </div>
          <div className='flex gap-x-16'>
            <Bill />
            <Saba />
            <Shae />
          </div>
          <div className='flex gap-x-16'>
            <SkylahDesktop/>
            <GriffDesktop />
            <StanDesktop />
          </div>
        </section>
    )
}