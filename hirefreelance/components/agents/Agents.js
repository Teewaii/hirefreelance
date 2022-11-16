
import Image from 'next/image';
import alison from '../../public/img/alison.svg';
import diane from '../../public/img/diane.svg';
import shawn from '../../public/img/shawn.svg';
import {StarIcon } from '@heroicons/react/24/outline';
import {EllipsisVerticalIcon } from '@heroicons/react/24/solid';


function Agents() {
  return (
    <section className="agent h-fit py-[95px] bg-gradient-to-b from-grad overflow-hidden">
        <div className="agents-wrapper flex flex-col items-center  ">
        <div className="heading flex flex-col items-center ">
            <h1 className='text-heading text-2xl mb-2 '>Our Featured Agents</h1>
            <p className='text-[0.8rem] text-body'>Meet our amazing team members</p>
            </div>
      
        <div className="agents-card flex justify-center gap-[20px] mt-6 border overflow-auto w-[100%] ">
           
            <div  className="alison pb-6 shadow-xl rounded-md min-w-[250px]">
                <div className="icons flex pt-4 justify-between">
                  <StarIcon className='w-5 '/>
                    <EllipsisVerticalIcon  className='w-6 '/>
                </div>
                <div className="info flex flex-col items-center px-[25px] mb-[30px] ">               
                    <Image className='w-[125px]'
                    src={alison}
                    alt="alison"/>
                    <h1 className='text-heading text-[0.9rem]'>Alison Kiara</h1>
                    <small className='text-location text-[0.7rem]'>Michigan, TX</small>
                </div>
                <div className="contact text-center ">
                    <p className='text-[0.7rem] mb-2 text-heading'>989-653-2986</p>
                    <p className='text-[0.7rem] text-primary'>alisonkiara@hommy.com</p>
                </div>
            </div>

            <div  className="diane pb-6 px-[8px] shadow-xl rounded-md min-w-[250px]">
                <div className="icons flex pt-4 justify-between">
                  <StarIcon className='w-5 '/>
                    <EllipsisVerticalIcon  className='w-6 '/>
                </div>
                <div className="info flex flex-col items-center px-[25px] mb-[30px] ">               
                    <Image className='w-[125px]'
                    src={diane}
                    alt="alison"/>
                    <h1 className='text-heading text-[0.9rem]'>Alison Kiara</h1>
                    <small className='text-location text-[0.7rem]'>Michigan, TX</small>
                </div>
                <div className="contact text-center ">
                    <p className='text-[0.7rem] mb-2 text-heading'>989-653-2986</p>
                    <p className='text-[0.7rem] text-primary'>alisonkiara@hommy.com</p>
                </div>
            </div>

            <div  className="shawn pb-6 px-[8px] shadow-xl rounded-md min-w-[250px]">
                <div className="icons flex pt-4 justify-between">
                  <StarIcon className='w-5 '/>
                    <EllipsisVerticalIcon  className='w-6 '/>
                </div>
                <div className="info flex flex-col items-center px-[25px] mb-[30px] ">               
                    <Image className='w-[125px]'
                    src={shawn}
                    alt="alison"/>
                    <h1 className='text-heading text-[0.9rem]'>Alison Kiara</h1>
                    <small className='text-location text-[0.7rem]'>Michigan, TX</small>
                </div>
                <div className="contact text-center ">
                    <p className='text-[0.7rem] mb-2 text-heading'>989-653-2986</p>
                    <p className='text-[0.7rem] text-primary'>alisonkiara@hommy.com</p>
                </div>
            </div>

            </div>
           
        </div>
    </section>
  )
}

export default Agents