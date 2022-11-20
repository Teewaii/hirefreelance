import Image from "next/image";
import projectlist from './projectList'

function Projects() {
    return (
        <section className="projects w-screen">
            <div className="projects-wrapper ">
                <div className="title flex flex-col items-center mb-12 ">
                    <h1 className='text-2xl sm:text-3xl lg:text-4xl text-heading mb-2 lg:mb-4'>Our Projects</h1>
                    <p className='text-[0.8rem] max-w-[250px] text-center '>We have been providing great flooring solutions service.</p>
                </div>
                <div className="project-categories flex  justify-center gap-2 lg:gap-4  w-[100%]  ">
                    <h1 className='font-normal bg-primary    w-fit px-[15px] py-[6px] lg:px-[28px] lg:py-[4px]  text-[0.6rem] lg:text-[0.8rem] text-white  rounded-full cursor-pointer hover:opacity-80   hover:text-white duration-300 ease-in-out flex items-center justify-center'>All</h1>
                    <h1 className='font-normal bg-[#F1F1F1]  w-fit px-[15px] py-[6px] lg:px-[28px] lg:py-[4px]  text-[0.6rem] lg:text-[0.8rem] text-title rounded-full cursor-pointer hover:bg-primary hover:text-white duration-300 ease-in-out flex items-center justify-center'>Websites</h1>
                    <h1 className='font-normal bg-[#F1F1F1]  w-fit px-[15px] py-[6px] lg:px-[28px] lg:py-[4px]  text-[0.6rem] lg:text-[0.8rem] text-title rounded-full cursor-pointer hover:bg-primary hover:text-white duration-300 ease-in-out flex items-center justify-center'>Social Media</h1>
                    <h1 className='font-normal bg-[#F1F1F1]  w-fit px-[15px] py-[6px] lg:px-[28px] lg:py-[4px]  text-[0.6rem] lg:text-[0.8rem] text-title rounded-full cursor-pointer hover:bg-primary hover:text-white duration-300 ease-in-out flex items-center justify-center'>UI/UX</h1>
                    <h1 className='font-normal bg-[#F1F1F1]  w-fit px-[15px] py-[6px] lg:px-[28px] lg:py-[4px]  text-[0.6rem] lg:text-[0.8rem] text-title rounded-full cursor-pointer hover:bg-primary hover:text-white duration-300 ease-in-out flex items-center justify-center'>Market</h1>
                </div>
                <div className="project-lists mt-8 border w-[100%] h-[250px] overflow-scroll space-x-[30px] py-8">
                    {projectlist.map(proj => (

                        <div key={proj.id} className="project relative w-[250px] h-auto border ">
                            <Image src={proj.pix} className=''
                                alt='project-thumbnail'
                                width={300}
                                height={300}
                            />
                            <div className="desc flex flex-col space-y-[-5px] absolute bottom-0 left-0 right-0 px-4 pb-2  bg-primary ">
                                <p className="text-white font-regular ">Quarter</p>
                                <small className="text-white font-regular">compay website</small>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects