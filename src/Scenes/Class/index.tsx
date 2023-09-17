import { SelectedPage, ClassType } from "@/shared/types";
// import image1 from "@/assets/image1.png";
// import image2 from "@/assets/image2.png";
// import image3 from "@/assets/image3.png";
// import image4 from "@/assets/image4.png";
import shenron from "@/assets/shenron-dragon-ball.960x540.mp4";
// import image5 from "@/assets/image5.png";
// import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";

// const classes: Array<ClassType> = [
//     {
//       name: "Weight Training Classes",
//       description:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
//       image: image1,
//     },
//     {
//       name: "Yoga Classes",
//       image: image2,
//     },
//     {
//       name: "Ab Core Classes",
//       description:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
//       image: image3,
//     },
//     {
//       name: "Adventure Classes",
//       description:
//         "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
//       image: image4,
//     },
    // {
    //   name: "Fitness Classes",
    //   image: image5,
    // },
    // {
    //   name: "Training Classes",
    //   description:
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    //   image: image6,
    // },
  ];
  
  type Props = {
    setSelectedPage: (value: SelectedPage) => void;
  };

const index = ({setSelectedPage}: Props) => {
  return (
    <section id="defender" className="w-full  ">
    <motion.div
      onViewportEnter={() => setSelectedPage(SelectedPage.OurClients)}
    >
      <motion.div
        className="mx-auto w-5/6 absolute "
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <div className="md:w-3/5 px-6 py-6">
          <p className=" text-white font-montserrat text-3xl font-bold" >SHENRON</p>
          <p className="max-xs:hidden py-5 text-white capitalize">
           Earth's Dragon Summoned by collecting seven dragon balls,
           doing so will will allow the summoner to make a wish going as far as reviving the dead.
          </p>
        </div>
      </motion.div>
      <video className="w-full " src={shenron}  loop autoPlay muted >

      </video>
      {/* <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
        <ul className="w-[1800px] whitespace-nowrap">
          {classes.map((item: ClassType, index) => (
            <Class
              key={`${item.name}-${index}`}
              name={item.name}
              description={item.description}
              image={item.image}
            />
          ))}
        </ul>
      </div> */}
    </motion.div>
  </section>
  )
}

export default index