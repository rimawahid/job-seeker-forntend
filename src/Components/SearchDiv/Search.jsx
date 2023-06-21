import {AiOutlineSearch, AiOutlineCloseCircle} from 'react-icons/ai'
import {BsHouseDoor} from 'react-icons/bs'
import {CiLocationOn} from 'react-icons/ci'
const Search = () => {
    return (
        <div className='searchDiv grid gp-10 bg-greyIsh rounded-[10px] p-[3rem]'>
           <form action="">
            
            <div className="firstDiv flex justify-between items-center rounded-[8px] 
            gap-[10px] bg-white p-5 shadow-lg shadow-greyIsh-700">
                
                <div className="flex gap-2 items-center">
                    <AiOutlineSearch className='icon text-[25px]'/>
                    <input type="text" className='bg-transparent text-blue-500
                    focus:outline-none w-[100%]' placeholder='Search Job Here...' />
                    <AiOutlineCloseCircle className='text-[30px] text-#a5a6a6
                    hover:text-textColor'/>
                </div>

                <div className="flex gap-2 items-center">
                    <BsHouseDoor className='icon text-[25px]'/>
                    <input type="text" className='bg-transparent text-blue-500
                    focus:outline-none w-[100%]' placeholder='Search by company...' />
                    <AiOutlineCloseCircle className='text-[30px] text-#a5a6a6
                    hover:text-textColor'/>
                </div>

                <div className="flex gap-2 items-center">
                    <CiLocationOn className='icon text-[25px]'/>
                    <input type="text" className='bg-transparent text-blue-500
                    focus:outline-none w-[100%]' placeholder='Search by location...' />
                    <AiOutlineCloseCircle className='text-[30px] text-#a5a6a6
                    hover:text-textColor'/>
                </div>

            </div>

           </form>
        </div>
    );
};

export default Search;