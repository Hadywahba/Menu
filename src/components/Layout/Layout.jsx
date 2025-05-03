
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'

export default function Layout({setquery , query}) {
  
  return (
    <div className='flex flex-col justify-between min-h-screen  bg-white   dark:bg-slate-800 dark:text-white'>
    <Navbar setquery ={setquery} query={query}/>
   <div className='flex-grow'>
   <Outlet/>
   </div>

 <Footer/>
 
    
    </div>
  )
}
