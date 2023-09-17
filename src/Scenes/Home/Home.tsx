import { SelectedPage } from "@/shared/types"
import useMediaQuery from "@/hooks/useMediaQuery"
import ActionButtom from "@/shared/ActionButtom"
import homepagetext from "@/assets/HomePageText.png"
import dragonball from "@/assets/dragon-ball-png-five-star-dragon-ball-png-306.png"
import goku from "@/assets/goku.png"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { motion } from "framer-motion"
import "./home.css"


type Props = {
    setSelectedPage: (value:SelectedPage)=> void;
}


const Home = ({setSelectedPage}: Props) => {

    const isAboveMediumScreen = useMediaQuery("(min-width:1060px)")

  return <section
            id="home"
            className="gap-16 bg-gray-20 max-md:py-1 py-10 md:h-full md:pb-0"
            >
                {/* image and header */}
                <motion.div
                 className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
                 onViewportEnter={()=>setSelectedPage(SelectedPage.Home)}
                 >

                        {/* main header */}
                        <div className="z-10 mt-32 md:basis-3/5">
                    {/* header */}
                    <motion.div className="md:-mt-20"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{once:true,amount:0.5}}
                      transition={{duration:1}}
                      variants={{
                        hidden: {opacity:0, x:-50},
                        visible: {opacity:1,x:0}
                      }}
                    >
                        <div className="relative">
                            <div className="before:absolute text-9xl font-extrabold opacity-5 before:-top-20 before:-left-20 before:z-[-1] md:before:content-['KAKAROT']"> 
                            </div>
                            <p className="text-8xl max-xs:text-7xl font-extrabold">SUPER SAIYAN</p>
                        </div>

                        <p className="mt-8 text-sm">
                        Join Goku the un-called savior of humankind in an journey to save the planet earth from the intergalactic threat of freeza who aims fore nothing
                        other than absolute dominance over the universe
            </p>
                    </motion.div>
                      {/* ACTIONS */}
          <motion.div
            className="mt-8 max-md:mb-4 flex items-center gap-8"
            initial="hidden"
                      whileInView="visible"
                      viewport={{once:true,amount:0.5}}
                      transition={{delay:0.2,duration:1}}
                      variants={{
                        hidden: {opacity:0, x:-50},
                        visible: {opacity:1,x:0}
                      }}
          >
            <ActionButtom setSelectedPage={setSelectedPage}>
              Join Now
            </ActionButtom>
            <AnchorLink
              className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
              onClick={() => setSelectedPage(SelectedPage.Contact)}
              href={`#${SelectedPage.Contact}`}
            >
              <p>Learn More</p>
            </AnchorLink>
          </motion.div>
                    </div>
                    {/* image */}
                    <div className="flex h-5/6 basis-1/2 justify-center md:z-10
              md:ml-40 md:mt-16 md:justify-items-end relative">
                <img className="w-10 h-10 z-10 absolute top-1/2 spin-horizontal max-md:hidden " src={dragonball} alt="" />
                        <img className="drop-shadow-xl"  src={goku} alt="master roshi" />
                    </div>


                </motion.div>
                {/* SPONSORS */}
      {isAboveMediumScreen && (
        <div className="h-[100px] w-full bg-primary-100 py-10">
          <div className="mx-auto w-5/6">
            <div className="flex w-3/5 items-center justify-between gap-8 font-montserrat font-extrabold text-xl ">
              {/* <img alt="redbull-sponsor" src={SponsorRedBull} />
              <img alt="forbes-sponsor" src={SponsorForbes} />
              <img alt="fortune-sponsor" src={SponsorFortune} /> */}
              <p>King Kai</p>
              <p>Lord Beerus</p>
              <p>Future Trunkz</p>
            </div>
          </div>
        </div>
      )}

  </section>
}

export default Home