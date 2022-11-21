import sass from '../../public/projects/sass.jpg';
import easy from '../../public/projects/easy.jpg';
import crowd from '../../public/projects/crowdfunding.jpg';
import freelance from '../../public/projects/freelance.jpg';
import time_tracking from '../../public/projects/time-tracking.jpg';


const Images = [
    {
        id: 1,
        title: "Hire freelance Landing Page ",
         pix: freelance,
         git: 'https://github.com/Teewaii/hirefreelance.git',
        live: 'https://hirefreelance.vercel.app/',
       },
    {
        id: 2,
        title: "Sass Landing Page ",
         pix: sass,
         git: 'https://github.com/Teewaii/Digital-Marketing.git',
        live: 'https://teewaii.github.io/Digital-Marketing',
       },

    {
        id: 3,
        title: "Easybank LP ",
        pix: easy,
        git: 'https://github.com/Teewaii/easybank-landing-page.git',
        live: 'https://teewaii.github.io/easybank-landing-page',
        tools: [
            "React.js", "TailwindCSS"
        ]
    },
    {
        id: 4,
        title: "Crowdfunding ",
        pix: crowd,
        git: 'https://github.com/Teewaii/crowdfunding-product-page.git',
        live: 'https://teewaii.github.io/crowdfunding-product-page/',
        tools: [
            "React.js", "SCSS"
        ]
    },

    {
        id: 5,
        title: "Time tracking ",
        pix: time_tracking,
        git: 'https://github.com/Teewaii/Time-tracking-dashboard-repo.git',
        live: ' https://teewaii.github.io/Time-tracking-dashboard-repo/',
        tools: [
            "CSS", "Javascript"
        ]
    },
   

]

export default Images;