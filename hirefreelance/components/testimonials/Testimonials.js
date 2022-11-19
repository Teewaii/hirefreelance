// import Swiper core and required modules
import Image from 'next/image';
import { Navigation, Mousewheel, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

import shot from '../../public/img/shot.svg'
import testimonies from './testimonies'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Testimonials() {
    return (
        <section className="testimonials h-fit py-11 border">
            <div className="testimonials-wrapper container flex flex-col items-center text-center border">
                <div className="title mb-12">
                    <h1 className='text-2xl text-heading'>What our Customers say</h1>
                    <p className='text-[0.8rem] max-w-[300px]'>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks.</p>
                </div>

                {/* <div className="testimonial-container flex flex-col items-center text-center w-fit border px-[50px] py-4 rounded-md">
                    <Image className='w-16 mb-4'
                        src={shot} />
                    <h1 className='text-lg'>Stephan Louis</h1>
                    <p className='text-sm mb-3 text-title'>Developer</p>
                    <p className='text-[0.8rem] text-title lg:max-w-[380px] '>“Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.”</p>
                </div> */}


            </div>
            <Swiper className=''
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={10}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                // scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                <SwiperSlide> <div className="testimonial-container flex flex-col items-center text-center w-fit border px-[50px] py-4 rounded-md">
                    <Image className='w-16 mb-4'
                        src={shot} />
                    <h1 className='text-lg'>Stephan Louis</h1>
                    <p className='text-sm mb-3 text-title'>Developer</p>
                    <p className='text-[0.8rem] text-title lg:max-w-[380px] '>“Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.”</p>
                </div>
                </SwiperSlide>
                <SwiperSlide> <div className="testimonial-container flex flex-col items-center text-center w-fit border px-[50px] py-4 rounded-md">
                    <Image className='w-16 mb-4'
                        src={shot} />
                    <h1 className='text-lg'>Stephan Louis</h1>
                    <p className='text-sm mb-3 text-title'>Developer</p>
                    <p className='text-[0.8rem] text-title lg:max-w-[380px] '>“Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.”</p>
                </div>
                </SwiperSlide>
                <SwiperSlide> <div className="testimonial-container flex flex-col items-center text-center w-fit border px-[50px] py-4 rounded-md">
                    <Image className='w-16 mb-4'
                        src={shot} />
                    <h1 className='text-lg'>Stephan Louis</h1>
                    <p className='text-sm mb-3 text-title'>Developer</p>
                    <p className='text-[0.8rem] text-title lg:max-w-[380px] '>“Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.”</p>
                </div>
                </SwiperSlide>
                <SwiperSlide> <div className="testimonial-container flex flex-col items-center text-center w-fit border px-[50px] py-4 rounded-md">
                    <Image className='w-16 mb-4'
                        src={shot} />
                    <h1 className='text-lg'>Stephan Louis</h1>
                    <p className='text-sm mb-3 text-title'>Developer</p>
                    <p className='text-[0.8rem] text-title lg:max-w-[380px] '>“Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.”</p>
                </div>
                </SwiperSlide>
                ...
            </Swiper>
        </section>
    )
}

export default Testimonials







 // <Swiper
        //     // install Swiper modules
        //     modules={[Navigation, Pagination, Scrollbar, A11y]}
        //     spaceBetween={50}
        //     slidesPerView={3}
        //     navigation
        //     pagination={{ clickable: true }}
        //     // scrollbar={{ draggable: true }}
        //     onSwiper={(swiper) => console.log(swiper)}
        //     onSlideChange={() => console.log('slide change')}
        // >
        //     <SwiperSlide>Slide 1</SwiperSlide>
        //     <SwiperSlide>Slide 2</SwiperSlide>
        //     <SwiperSlide>Slide 3</SwiperSlide>
        //     <SwiperSlide>Slide 4</SwiperSlide>
        //     ...
        // </Swiper>