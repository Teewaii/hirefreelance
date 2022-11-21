import Image from "next/legacy/image";
import { useRef } from "react";
import projectlist from './projectList';
import { ChevronLeftIcon } from '@heroicons/react/24/solid'
import { ChevronRightIcon } from '@heroicons/react/24/solid'

//Functions to initiate scroll events via button click when overflow occurrs
function Projects() {
    const scrol =useRef(null);
    function scrollLeft (){
        scrol.current.scrollLeft -=200;
    }
    function scrollRight (){
        scrol.current.scrollLeft +=200;
    }
    

    return (
        <section id="projects" className="projects w-screen py-10 lg:py-[80px]">
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
             
                <div  className="caret  mt-11 gap-4 flex justify-end container w-[90%] lg:w-[75%]  ">
                        <ChevronLeftIcon onClick={scrollLeft} className="w-8 border  rounded-full p-2 cursor-pointer"/>
                        <ChevronRightIcon onClick={scrollRight} className="w-8 border rounded-full p-2  cursor-pointer"/>
                    </div>
                    
                <div  ref={scrol} className="project-lists  flex lg:justify-center overflow-scroll whitespace-nowrap scrollbar-hide   w-[100%] h-[250px] gap-6 py-8 pl-[25px] lg:pl-[270px] lg:pr-0 last:pr-[20px] lg:last:pr-[50px] snap-x snap-mandatory">
                    
                    {projectlist.map(proj => (

                        <div key={proj.id} className="project snap-center relative overflow-hidden px-[100px]  rounded-md block  border-4 border-gray-300  ">
                            <Image src={proj.pix} className=''
                                alt='project-thumbnail'
                                layout='fill'
                                objectFit='cover'
                                priority
                            />
                            <div className="desc flex flex-col space-y-[2px] absolute bottom-0 left-0 right-0 px-4 py-3  bg-gray-200">
                                <p className="text-black text-[0.8rem] font-regular ">{proj.title}</p>
                                <a href={proj.live} target='blank' className="text-white font-medium bg-primary w-fit px-3 py-[3px] rounded-md  ">View</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects