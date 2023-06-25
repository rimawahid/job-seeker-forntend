import {BiTimeFive} from 'react-icons/bi'

import logo1 from '../../Asstes/1.png'
import logo2 from '../../Asstes/2.png'
import logo3 from '../../Asstes/3.png'
import logo4 from '../../Asstes/4.jpg'
import logo5 from '../../Asstes/5.png'

const Data= [
    {
        id:1,
        image:logo1,
        title:'Web Developer',
        time:'Now',
        location:'Canada',
        desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim corporis natus distinctio quos',
        company:'Novac Linus Co.'
    },
    {
        id:2,
        image:logo2,
        title:'UI Designer',
        time:'12Hrs',
        location:'Manchester',
        desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim corporis natus distinctio quos',
        company:'Liquid Accessments'
    },
    {
        id:3,
        image:logo3,
        title:'Software Eng',
        time:'10Hrs',
        location:'Austria',
        desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim corporis natus distinctio quos',
        company:'Web Tech Agency'
    },
    {
        id:4,
        image:logo4,
        title:'Ui/Ux Designer',
        time:'10Hrs',
        location:'Germany',
        desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim corporis natus distinctio quos',
        company:'Government'
    },
    {
        id:5,
        image:logo5,
        title:'Product Designer',
        time:'Now',
        location:'Monchester',
        desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim corporis natus distinctio quos',
        company:'Newcastle'
    },
    {
        id:6,
        image:logo2,
        title:'Researcher',
        time:'12Hrs',
        location:'Norway',
        desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim corporis natus distinctio quos',
        company:'Nin Co.'
    },
    {
        id:7,
        image:logo3,
        title:'Lead Developer',
        time:'10Hrs',
        location:'Leeds',
        desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim corporis natus distinctio quos',
        company:'Nimeloi - UK'
    },
    {
        id:8,
        image:logo4,
        title:'Data Scientist',
        time:'10Hrs',
        location:'Turky',
        desc:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim corporis natus distinctio quos',
        company:'Nome And Sons'
    },
]

const Jobs = () => {
    return (
        <div>
            <div className="jobContainer flex gap-10 justify-center flex-wrap items-center py-10">
                
                {
                    Data.map((job)=>{
                        return(
                            <div key={job.id} className="group group/item singleJob w-[250px] p-[20px] bg-white rounded-[10px] 
                            hover:bg-blueColor shadow-lg shadow-greyIsh-400/700 hover:shadow-lg">
                                <span className="flex justify-between items-center gap-4">
                                    <h1 className='text-[16px] front-semibold text-textColor
                                    group-hover:text-white'>{job.title}</h1>
                                    <span className='flex items-center text-[#ccc] gap-1'>
                                        <BiTimeFive />{job.time}
                                    </span>
                                </span>
                                <h6 className='text-[#ccc]'>{job.location}</h6>
                                <p className='text-[13px] text-[#959595] pt-[20px] border-t[2px] mt-20px] 
                                    group-hover:text-white'>{job.desc}</p>
            
                                <div className='company flex items-center gap-2'>
                                    <img src={job.image} alt="company logo" className='w-[10%]'/>
                                    <span className="text-[14px] py-[1rem] block group-hover:text-white">{job.company}</span>
                                </div>
            
                                <button className='border-[2px] rounded-[10px] block p-[10px] w-full text-[14px] 
                                font-semibold text-textColor hover:bg-white group-hover/item:text-textColor group-hover:text-white'>
                                    Apply Now 
                                </button>
                            </div>
                        )
                    })
                }
                

            </div>
        </div>
    );
};

export default Jobs;