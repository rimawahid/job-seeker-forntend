import simple from '../../Asstes/1.png'
import logo2 from '../../Asstes/2.png'
import logo3 from '../../Asstes/3.png'
import logo4 from '../../Asstes/4.jpg'
import logo5 from '../../Asstes/5.png'


const Value = () => {
    return (
        <div className='mb-[4rem] mt-[6rem]'>
          <h1 className='text-textColor text-[25px] py-[2rem] font-bold w-[400px block]'>The value that holds us true and to account</h1>  
        
          <div className="grid gap-[10rem] grid-cols-3 items-center">
            <div className="singleGrid rounded-[10px] hover:bg-[#eeedf7] p-[1.5rem]">
              <div className="flex items-center gap-3">
                <div className="imgDiv p-[4px] rounded-[.8rem] bg-[#dedef8]
                h-[40px] w-[40px] flex items-center justify-center">
                 <img src={simple} alt=""  className='w-[70%]'/>
                </div>

                <span className='font-semibold text-text-textColor text-[18px]'>
                  Simplicity
                </span>

              </div>

              <p className='text-[13px] text-textColor opacity-[.7] py-[1rem]'>
                Things beinf made beautiful simple are at the heart of everything we do.
              </p>
            </div>

            <div className="singleGrid rounded-[10px] hover:bg-[#f7edf5] p-[1.5rem]">
              <div className="flex items-center gap-3">
                <div className="imgDiv p-[4px] rounded-[.8rem] bg-[#f7d1e1]
                h-[40px] w-[40px] flex items-center justify-center">
                 <img src={simple} alt=""  className='w-[70%]'/>
                </div>

                <span className='font-semibold text-text-textColor text-[18px]'>
                  Simplicity
                </span>

              </div>

              <p className='text-[13px] text-textColor opacity-[.7] py-[1rem]'>
                Things beinf made beautiful simple are at the heart of everything we do.
              </p>
            </div>

            <div className="singleGrid rounded-[10px] hover:bg-[#fcfae3] p-[1.5rem]">
              <div className="flex items-center gap-3">
                <div className="imgDiv p-[4px] rounded-[.8rem] bg-[#f3f2ad]
                h-[40px] w-[40px] flex items-center justify-center">
                 <img src={simple} alt=""  className='w-[70%]'/>
                </div>

                <span className='font-semibold text-text-textColor text-[18px]'>
                  Simplicity
                </span>

              </div>

              <p className='text-[13px] text-textColor opacity-[.7] py-[1rem]'>
                We work on the basis of creating trust which can be nurtured thought auathencicity an dtransparency
              </p>
            </div>
          </div>

          
        </div>


    );
};

export default Value;