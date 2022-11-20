import React from 'react'

function Projects() {
    return (
        <section className="projects">
            <div className="projects-wrapper ">
                <div className="title flex flex-col items-center mb-12 ">
                    <h1 className='text-2xl sm:text-3xl lg:text-4xl text-heading mb-2 lg:mb-4'>Our Projects</h1>
                    <p className='text-[0.8rem] min-w-[200px] '>We have been providing great flooring solutions service.</p>
                </div>
                <div className="project-categories flex  justify-center gap-2 lg:gap-4  w-[100%]  ">
                    <h1 className='font-normal bg-primary    w-fit px-[15px] py-[6px] lg:px-[28px] lg:py-[4px]  text-[0.6rem] lg:text-[0.8rem] text-white  rounded-full cursor-pointer hover:opacity-80   hover:text-white duration-300 ease-in-out flex items-center justify-center'>All</h1>
                    <h1 className='font-normal bg-[#F1F1F1]  w-fit px-[15px] py-[6px] lg:px-[28px] lg:py-[4px]  text-[0.6rem] lg:text-[0.8rem] text-title rounded-full cursor-pointer hover:bg-primary hover:text-white duration-300 ease-in-out flex items-center justify-center'>Websites</h1>
                    <h1 className='font-normal bg-[#F1F1F1]  w-fit px-[15px] py-[6px] lg:px-[28px] lg:py-[4px]  text-[0.6rem] lg:text-[0.8rem] text-title rounded-full cursor-pointer hover:bg-primary hover:text-white duration-300 ease-in-out flex items-center justify-center'>Social Media</h1>
                    <h1 className='font-normal bg-[#F1F1F1]  w-fit px-[15px] py-[6px] lg:px-[28px] lg:py-[4px]  text-[0.6rem] lg:text-[0.8rem] text-title rounded-full cursor-pointer hover:bg-primary hover:text-white duration-300 ease-in-out flex items-center justify-center'>UI/UX</h1>
                    <h1 className='font-normal bg-[#F1F1F1]  w-fit px-[15px] py-[6px] lg:px-[28px] lg:py-[4px]  text-[0.6rem] lg:text-[0.8rem] text-title rounded-full cursor-pointer hover:bg-primary hover:text-white duration-300 ease-in-out flex items-center justify-center'>Market</h1>
                </div>
            </div>
        </section>
    )
}

export default Projects