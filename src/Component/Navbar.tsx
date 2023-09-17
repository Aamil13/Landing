import { Bars3Icon,XMarkIcon } from "@heroicons/react/24/solid"
import logo from "@/assets/Logo.png"
import Link from "./Link"
import { SelectedPage } from "@/shared/types"
import useMediaQuery from "@/hooks/useMediaQuery"
import {useState} from "react"
import ActionButtom from "@/shared/ActionButtom"
import HText from "@/shared/HText"



type Props = {
    selectedPage: SelectedPage;
    isTopOfPage: boolean;
    setSelectedPage: (value: SelectedPage) => void;
}

const Navbar = ({isTopOfPage,selectedPage,setSelectedPage}: Props) => {
    
    const flexbetween = "flex items-center justify-between"
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)")
    const [isMenuToggled, setIsMenuToggled] = useState<Boolean>(false)
    const navbarBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow";
  return <nav >
    <div className={`${navbarBackground} ${flexbetween} fixed top-0 px-0 py-6 z-30 w-full`}>

    <div className={`${flexbetween} mx-auto w-5/6 `}>
        <div className={`${flexbetween} gap-16 w-full `}>
            {/* <img src={logo} alt="" /> */}
            <HText>SAIYAN GYM</HText>

            {/* Right Side */}
            {
                isAboveMediumScreens ?
            
            <div className={`${flexbetween} w-full  `}>
                <div className={`${flexbetween} gap-8 text-sm `}>
                    <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                    <Link page="Benefits" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                    <Link page="Defender" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                    <Link page="Contact" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                </div>
                <div className={`${flexbetween} gap-8 `}>
                    <p>Sign-In</p>
                    <ActionButtom setSelectedPage={setSelectedPage}>Become a member</ActionButtom>
                </div>
            </div>
            :
            (
                <button
                    className="bg-secondary-500 p-2 rounded-full"
                    onClick={()=> setIsMenuToggled(!isMenuToggled)}
                >
                    <Bars3Icon className="h-6 w-6 text-white" />
                </button>
            )
            }
        </div>
    </div>
    </div>

            {/* Mobile menu//// */}
           {!isAboveMediumScreens && isMenuToggled && (
            <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">

                <div className="flex justify-end p-12 ">
                    <button onClick={()=> setIsMenuToggled(!isMenuToggled)}>
                    <XMarkIcon className="h-6 w-6 text-gray-400" />
                    </button>
                    </div>
                    {/* Menu items //// */}
                    <div className="ml-[33%] flex flex-col text-2xl gap-10">
                    <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                    <Link page="Benefits" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                    <Link page="Defender" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                    <Link page="Contact" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                </div>
                
            </div>
           )}


  </nav>
    
  
}

export default Navbar