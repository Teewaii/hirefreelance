import Image from "next/image";
import projectlist from './projectList'

function Projects() {
    return (
        <section className="projects w-screen">
            <div className="projects-wrapper  ">
                <div className="title flex flex-col items-center mb-12 ">
                    <h1 className='text-2xl sm:text-3xl lg:text-4xl text-heading mb-2 lg:mb-4'>Our Projects</h1>
                    <p className='text-[0.8rem] max-w-[250px] text-center '>We have been providing great flooring solutions service.</p>
                </div>

                <div className="cat-container relative  after:absolute after:bg-gradient-to-l from-white after:top-0 after:bottom-0 after:right-[-1px] after:left-[80%] 
                before:absolute before:bg-gradient-to-r  before:top-0 before:bottom-0 before:left-[-1px] before:right-[92%] 
                "> 
                <div className="project-categories flex  justify-center gap-3 lg:gap-4  w-[100%] overflow-scroll whitespace-nowrap pl-[90px] pr-[23px]  scrollbar-hide ">
                    <h1 className='font-normal bg-primary    w-fit px-[16px] py-[6px] lg:px-[28px] lg:py-[4px]  text-[0.7rem] lg:text-[0.8rem] text-white  rounded-full cursor-pointer hover:opacity-80   hover:text-white duration-300 ease-in-out flex items-center justify-center'>All</h1>
                    <h1 className='font-normal bg-[#F1F1F1]  w-fit px-[16px] py-[6px] lg:px-[28px] lg:py-[4px]  text-[0.7rem] lg:text-[0.8rem] text-title rounded-full cursor-pointer hover:bg-primary hover:text-white duration-300 ease-in-out flex items-center justify-center'>Websites</h1>
                    <h1 className='font-normal bg-[#F1F1F1]  w-fit px-[16px] py-[6px] lg:px-[35px] lg:py-[4px]  text-[0.7rem] lg:text-[0.8rem] text-title rounded-full cursor-pointer hover:bg-primary hover:text-white duration-300 ease-in-out flex items-center justify-center'>Social Media</h1>
                    <h1 className='font-normal bg-[#F1F1F1]  w-fit px-[16px] py-[6px] lg:px-[28px] lg:py-[4px]  text-[0.7rem] lg:text-[0.8rem] text-title rounded-full cursor-pointer hover:bg-primary hover:text-white duration-300 ease-in-out flex items-center justify-center'>UI/UX</h1>
                    <h1 className='font-normal bg-[#F1F1F1]  w-fit px-[16px] py-[6px] lg:px-[28px] lg:py-[4px]  text-[0.7rem] lg:text-[0.8rem] text-title rounded-full cursor-pointer hover:bg-primary hover:text-white duration-300 ease-in-out flex items-center justify-center'>Market</h1>
                </div>
                </div>
             

                <div className="project-lists mt-8 flex  lg:justify-center overflow-scroll whitespace-nowrap scrollbar-hide  border w-[100%] h-[250px] gap-6 py-8 pl-[25px] lg:pl-0 lg:pr-0 last:pr-[20px]">
                    {projectlist.map(proj => (

                        <div key={proj.id} className="project relative overflow-hidden px-[100px]  rounded-md ">
                            <Image src={proj.pix} className=''
                                alt='project-thumbnail'
                                layout='fill'
                                objectFit='cover'
                            />
                            <div className="desc flex flex-col space-y-[2px] absolute bottom-0 left-0 right-0 px-4 py-3 rounded-b-md bg-gray-400">
                                <p className="text-black text-[0.8rem] font-regular ">{proj.title}</p>
                                <a href={proj.live} className="text-white font-bold bg-primary w-fit px-2 py-[3px] rounded-md  ">Live Site</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects