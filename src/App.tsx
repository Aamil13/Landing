import Navbar from "@/Component/Navbar" 
import { useEffect, useState } from "react"
import { SelectedPage } from "@/shared/types"
import Home from "./Scenes/Home/Home"
import Benefits from "@/Scenes/Benefits/index"
import Ourclass from "@/Scenes/Class/index"
import Contact from "@/Scenes/Contact/index"
import Footer from "@/Scenes/Footer/index"



function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home)
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true)

  useEffect(() => {
    const handleScroll=()=>{
      if(window.scrollY === 0){
        setIsTopOfPage(true)
        setSelectedPage(SelectedPage.Home)
      }
      else{
        setIsTopOfPage(false)
      }
    }
    

    window.addEventListener("scroll",handleScroll)
    return()=> window.removeEventListener("scroll",handleScroll)
    
  }, [])
  
  
  return (
    
      <div  className="app bg-gray-20">
           <Navbar isTopOfPage={isTopOfPage} selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>

           <Home setSelectedPage={setSelectedPage} />
           <Benefits setSelectedPage={setSelectedPage} />
            <Ourclass setSelectedPage={setSelectedPage} />
            <Contact setSelectedPage={setSelectedPage} />
            <Footer/>
      </div>
        
   
  )
}

export default App
