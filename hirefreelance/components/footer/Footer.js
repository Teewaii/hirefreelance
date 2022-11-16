import React from 'react'
import Appointment from '../btn/Appointment';
import Image from 'next/image'
import logoW from '../../public/img/LogoWhite.svg'

function Footer() {
    return (
        <section className="h-[fit]    flex flex-col justify-between footer bg-primary py-6  lg:py-[50px]  relative  after:absolute after:bg-right-top after:bg-fit after:bg-no-repeat after:bg-footer_wmk after:top-0 after:bottom-0 after:left-0 after:right-0 ">
            {/* footer bg-footer_wmk bg-right-top bg-fit bg-no-repeat  py-[50px]  relative  after:absolute after:bg-primary after:top-0 after:bottom-0 after:left-0 after:right-0 after:z-[-1] h-[75vh] */}
            <div className='footer-wrapper container flex flex-col  items-center py-8 space-y-16 lg:space-y-[90px] relative z-[4] mb-10   '>
                <h1 className='text-white text-2xl lg:text-4xl lg:max-w-[450px] text-center font-normal'> People who are
                    ready took these courses!</h1>
                <Appointment />

                <div className="footer_links space-y-8 md:space-y-0 md:flex justify-between w-[100%]  gap-x-4 gap-y-6 container  ">
                
                <div className="logo flex flex-col  items-start space-y-4  ">
                        <Image
                            src={logoW}
                            alt='logo'
                        />
                        <p className='text-white text-[0.8rem] text-left md:w-[70%] '>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
                    </div>
                    <div className="links  grid grid-cols-2 space-y-6 md:space-y-0 md:flex items-start md:gap-[100px] lg:gap-[180px] ">                        
                        <ul className='links space-y-[1px] md:space-y-4'>
                        <h1 className='text-white text-md font-bold mb-2'>Links</h1>
                            <li className='text-white text-sm'>Overons</li>
                            <li className='text-white text-sm'>Social Media</li>
                            <li className='text-white text-sm'>Counters</li>
                            <li className='text-white text-sm'>Contact</li>
                        </ul>
                               
                        
                        <ul className="company space-y-[1px] lg:space-y-4">
                        <h1 className='text-white text-md font-bold mb-2'>Company</h1>
                            <li className='text-white text-sm'>Terms & Conditions</li>
                            <li className='text-white text-sm'>Privacy Policy</li>
                            <li className='text-white text-sm'>Contact</li>
                        </ul>
                   
                        <ul className="intouch space-y-[1px] lg:space-y-4">
                        <h1 className='text-white text-md font-bold mb-2'>Get in touch</h1>
                            <li className='text-white text-sm'>Terms & Conditions</li>
                            <li className='text-white text-sm'>Privacy Policy</li>
                            <li className='text-white text-sm'>Contact</li>
                        </ul>
                        </div>  
                </div>
                
            </div>
            <p className='text-white text-[0.7rem] text-center'>© 2021 Developed by <a className='cursor-pointer underline' href="https://github.com/Teewaii/hirefreelance.git" target='blank'>Taiye Ajimati</a> & <br />Designed by ar-shakir. All rights reserved</p>
        </section>
    )
}

export default Footer