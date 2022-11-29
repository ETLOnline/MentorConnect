import Link from 'next/link';
import React from 'react'
  const index = () => {
  return (
     <>
        <div className='flex'>
            <div className='w-[50%] h-[764px]'>
                <img src="./img/Image (15).png"/>
            </div>
            <div className='flex flex-col w-[50%]'>
              <div className='ml-[auto] mr-[6.198%]'>
              <img src='./img/X.png'/>
              </div>

               <h1 className='font-semibold text-[36px] text-[#357A7B] mx-auto font-[Raleway] leading-[38px]'>Sign Up</h1>

               <h1 className='leading-[19px] font-medium mx-auto text-[16px] text-[#1C2D56] mt-[16px] mb-[19px]'>For All Your Mentoring Needs</h1>

                <div className='w-[63.88%] mx-auto h-[26%] flex flex-col justify-between'>
                  <div className='flex justify-between '>
                     <div className='w-[46.52%] group '>
                     
                     <input type='text'  className='border-[1px] rounded-[8px] w-full  h-[48px] border-[#1C2D56] placeholder:pl-[10px] ' placeholder='First Name'/>
                     
                     </div>
                     
                     <div className='w-[46.52%]'>
                     <input type='text' placeholder='LastName'  className=' placeholder:pl-[10px] border-[1px]  rounded-[8px] w-full h-[48px] border-[#1C2D56]'/>
                    

                     </div>
                     
                    
                  </div>
                  <input type='text' placeholder='Enter your Email'  className='border-[1px] placeholder:pl-[10px] border-[#1C2D56] h-[48px] rounded-[8px] w-full '/>

                  <div className='flex justify-between'>
                     <input type='Password' placeholder='Password'  className='border-[1px]  placeholder:pl-[10px] rounded-[8px]  w-[46.52%] h-[48px] border-[#1C2D56]'/>
                     <input type='password' placeholder='Password'  className='border-[1px] placeholder:pl-[10px] rounded-[8px]  w-[46.52%] h-[48px] border-[#1C2D56]'/>
                  </div>
                </div> 


                <div className='mx-auto w-[13.88%] bg-[#1C2D56] h-[36px] rounded-[4px] py-[5px] px-[18px] mt-[32px]'>
                    <Link className='bg-[#1C2D56] text-[white]' href='/signupPage/1'>Sign Up</Link>
                </div>

                <div className='mt-[16px]'>
                    <h1 className='leading-[28px] text-[16px] font-medium text-center'>Already have an account?<a>Log In</a></h1>
                </div>

                <div className='w-[32.22%] flex justify-between mx-auto mb-[15.57%] mt-[64px]'>
                <img src="./img/Frame 77.png"/>
                <img src="./img/Frame 78.png"/>
                <img src="./img/Frame 79.png"/>

                </div>

               
                
                
                

                
                
            </div>
        </div>
     </>
  )
}
export default index;




