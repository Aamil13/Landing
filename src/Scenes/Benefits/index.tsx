import HText from '@/shared/HText';
import { SelectedPage,BenefitType } from '@/shared/types'
import {
    HomeModernIcon,
    UserGroupIcon,
    AcademicCapIcon,
  } from "@heroicons/react/24/solid";
  import roshi from "@/assets/image3.png"
  import { motion } from 'framer-motion';
import Benefit from './Benefit';
import ActionButtom from '@/shared/ActionButtom';

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "Gravity Chamber",
    description:
      "Neque adipiscing amet amet enim. Feugiat dolor enim fermentum in a in lectus pellentesque. Ullamcorper et.",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "Solitude",
    description:
      "Eu ipsum id egestas risus tempus enim semper felis quis. Nec consectetur ac venenatis facilisi est. Eget ac turpis id.",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Senzu Beans",
    description:
      "Fusce vestibulum aliquam ut cras. Nisl lectus egestas sapien nisl. Lacus at mi sit pellentesque. Congue parturient.",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};


type Props = {
    setSelectedPage: (value:SelectedPage)=> void;
}


const index = ({setSelectedPage}: Props) => {
  return (
    <section
    id='benefits'
    className='mx-auto min-h-full  w-5/6 py-20'
    >
        <motion.div
        onViewportEnter={()=>setSelectedPage(SelectedPage.Benefits)}
        initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}>
          {/* Header */}
            <div className="md:my-5 md:w-3/5">
            <HText>Experience the Saiyan Training</HText>
            <p className="my-5 text-sm">
            At Capsule Corp you are provided world class fitness equipment like gravity chambers to
            get you to your ultimate performance. 
          </p>
          </div>

          {/* Benefits  */}
          <motion.div className='className="mt-5 items-center justify-between gap-8 md:flex'
          initial="hidden"
          whileInView="visible"
          viewport={{once:true,amount:0.5}}
          variants={container}
          >
            {benefits.map((item :BenefitType)=>(
              <Benefit
                key={item.title}
                icon={item.icon}
                title={item.title}
                discription={item.description}
                setSelectedPage={setSelectedPage}
              />
            ))}
          </motion.div>

          {/* GRAPHICS AND DESCRIPTION */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* GRAPHIC */}
          <img
            className="mx-auto mb-44 drop-shadow-2xl"
            alt="benefits-page-graphic"
            src={roshi}
          />

          {/* DESCRIPTION */}
          <div>
            {/* TITLE */}
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <HText>
                    MILLIONS OF HAPPY MEMBERS GETTING{" "}
                    <span className="text-primary-500">FIT</span>
                  </HText>
                </motion.div>
              </div>
            </div>

            {/* DESCRIPT */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
                Nascetur aenean massa auctor tincidunt. Iaculis potenti amet
                egestas ultrices consectetur adipiscing ultricies enim. Pulvinar
                fames vitae vitae quis. Quis amet vulputate tincidunt at in
                nulla nec. Consequat sed facilisis dui sit egestas ultrices
                tellus. Ullamcorper arcu id pretium sapien proin integer nisl.
                Felis orci diam odio.
              </p>
              <p className="mb-5">
                Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
                tellus quam porttitor. Mauris velit euismod elementum arcu neque
                facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit
                enim mattis odio in risus nunc.
              </p>
            </motion.div>
            {/* BUTTON */}
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButtom setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButtom>
              </div>
            </div>

</div>
</div>
        </motion.div>
    </section>
  )
}

export default index