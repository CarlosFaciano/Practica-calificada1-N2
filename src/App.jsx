import TabletDessign from './components/TabletDessign/TabletDessign'
import MobileDesign from './components/mobileDesign/mobileDesign'
import DesktopDessign from './components/Desktop-Dessign/Desktop-dessign'
import './App.css'

function App() {


  return (
    <>

      <main className='flex justify-center md:flex-row'>
       <MobileDesign />
       <TabletDessign />
      <DesktopDessign/>
      </main>
    </>
  )
}

export default App
