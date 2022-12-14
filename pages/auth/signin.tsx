import { NextPage } from "next";
import { signIn } from "next-auth/react";
import { FormEventHandler, useState } from "react";
import { Box, FormLabel, FormControl } from '@chakra-ui/react';
import Image from 'next/image'

interface Props {}

const SignIn: NextPage = (props): JSX.Element => {
  const [userInfo, setUserInfo] = useState({ email: "", password: "" });
  const handleSubmit: FormEventHandler<HTMLFormElement> = async (e) => {
    // validate userinfo
    e.preventDefault();

    const res = await signIn("credentials", {
      email: userInfo.email,
      password: userInfo.password,
      redirect: false,
    });

    console.log(res);
  };
  return (
    <div >
      <form onSubmit={handleSubmit}>
      <div className='  z-[1] top-2 md:top-4 max-w-8xl px-4 rounded-md mx-auto flex '>
      <div className='mt-2'>
        <Image
                          layout='fixed'
                         width='48px'
                         height='51px'
                          className=''
                           
                            src="/images/ch.png"
                          alt='prime'
                           
                        />
                        </div>
                  
                            <div className='grid items-center grid-rows-1 gap-1 px-2 pt-3 mb-6 text-center place-content-evenly'>
              <h1 className='text-3xl font-semibold tracking-widest text-white font-sfprodisplayregular'>CHIEF ANALYTICS</h1>
              <h1 className='pr-1 text-sm font-light tracking-wider text-gray-200 font-sfprodisplaylight'>BUSINESS INTELLIGENCE FOR EXECUTIVES</h1>
              </div>
      
    
        </div>
        <div className='w-1/5 px-1 pl-6 mb-5 ml-10 text-xl text-white bg-amber-500 font-sfprodisplayregular mt-7'>
            <h1 className=''>Log in to view your dashboard</h1>
        </div>
        <FormControl className='px-6 ml-12'  >
        <div className='grid grid-cols-1 gap-2 '>
        <Box>
        <FormLabel className='mb-1 ml-1 text-lg font-medium text-white/90 font-sfprodisplayregular' > </FormLabel>
        <input className='px-12 py-3 pl-2 text-gray-100 bg-transparent rounded-sm shadow-xs contactname'
          value={userInfo.email}
          onChange={({ target }) =>
            setUserInfo({ ...userInfo, email: target.value })
          }
          type="email"
          placeholder="Username"
        />
        </Box>
        <Box>
        <FormLabel className='mb-1 ml-1 text-lg font-medium text-white/90 font-sfprodisplayregular' > </FormLabel>
        <input className='px-12 py-3 pl-2 text-gray-100 bg-transparent rounded-sm shadow-xs contactname'
          value={userInfo.password}
          onChange={({ target }) =>
            setUserInfo({ ...userInfo, password: target.value })
          }
          type="password"
          placeholder="********"
        />
        </Box>
        </div>
        
        <div className='pl-24 mt-2 text-4xl ml-28 text-amber-500'>
        <input type="submit" value="→" />
        </div>
        </FormControl>
      </form>
    </div>
  );
};

export default SignIn;
