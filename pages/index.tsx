import Container from '../components/Container/index'
import type { NextPage } from 'next'
import NextLink from 'next/link'
import Image from 'next/image'
import useInView from 'react-cool-inview'
import {
  Box,
  FormControl,
  FormLabel,
  Button,
  Input,
  Link,
  Heading,
  useToast
} from '@chakra-ui/react';
import React, { useState } from 'react';
   import Tools from './tools'
   import Platforms from './platforms'
   import Checkmark from './checkmarks'
   import {BiPhoneCall } from 'react-icons/bi'
import { FiMessageCircle } from 'react-icons/fi'
   import {HiChartSquareBar} from 'react-icons/hi'
   import { MdOutlineContactPage } from 'react-icons/md'
   import { init } from '@emailjs/browser';
import emailjs from '@emailjs/browser';

  const Home: NextPage = () => {
    const { observe, inView } = useInView({
      unobserveOnEnter: true,
    })
    init("KhAEHk-gFA5ArVOho");
  
    const toast = useToast();
  
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [meetingdate1, setMeetingDate1] = useState('');
    const [meetingdate2, setMeetingDate2] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
  
    const clearInput = () => {
        setName('');
        setEmail('');
        setMeetingDate1('');
        setMeetingDate2('');
        setIsLoading(false);
    }
  
    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
  
        setIsLoading(true);
  
        emailjs.send("service_042wmpe","template_y0wbbdl", {
            from_name: name,
            from_email: email,
            meetingdate1: meetingdate1,
            meetingdate2: meetingdate2,
        }).then((result) => {
            clearInput();
  
            toast({
                title: 'Email sent.',
                description: 'You had successfully sent the email. I will reply your email ASAP. Thank you!',
                status: 'success',
                duration: 9000,
                isClosable: true
            })
  
        }, (error) => {
            clearInput();
  
            toast({
                title: 'Email not sent.',
                description: error.text,
                status: 'error',
                duration: 9000,
                isClosable: true
            })
        });
    }
  

  
    return (
      
  
     
      <Container className='' >
        <div className=''>
          <div className='grid items-center grid-rows-1 gap-1 pb-1 text-center place-content-evenly '>        
           <h1 className='flex items-center text-xl tracking-widest text-center take text-zinc-300 place-content-evenly indent-1 tx hov font-sfprodisplayregular'>
              Take control over your marketing spend  
              </h1>
           <h1 className='flex items-center text-4xl tracking-widest text-center text-white chief place-content-evenly indent-1 tx hov font-sfprodisplayregular'>
              Chief Analytics Dashboard™ 
              </h1>
        </div>
        <div className='grid items-center grid-rows-1 gap-1 pb-1 text-center place-content-evenly '>
          <h1 className='flex items-center text-xl tracking-widest text-center text-white thefirst place-content-evenly indent-1 tx hov font-sfprodisplayregular'> 
               ↓  
               </h1>
        </div>
        <div className='grid items-center grid-rows-1 gap-1 pb-1 text-center place-content-evenly '>
        <h1 className='flex items-center text-xl tracking-widest text-center thefirst text-zinc-400 place-content-evenly indent-1 tx hov font-sfprodisplaylight'>
            The first all-in-one KPI dashboard built for executives 
            </h1>
        </div>

        <Box className='mt-1 '> 
          <div className='grid items-center grid-cols-1 gap-4 p-3 text-center place-content-evenly homecallgc item-center place-items-evenly'>
          <div className="grid items-center grid-rows-1 gap-1 pb-1 mt-4 mb-4 text-center place-content-evenly ">
	<a className="flex items-center gap-4 p-2 text-xl font-bold text-center bg-white rounded-sm ring-1 ring-white text-zinc-800 font-sfprodisplaybold " href="#popup1"><span className='text-xl text-black thefirst dark:hover:text-opacity-75'> Book Your Free Demo</span><p className='text-white dark:hover:text-opacity-75'><HiChartSquareBar className='dark:hover:text-opacity-75' color='black' size={25} /></p></a>
</div>

<div id="popup1" className='overlayup'>   
          
	<div className="inset-0 z-[2] popupup bg-primary filter-blur',
                ' shadow-2xl ',
                'ring-1 ring-black/10 ',
                'flex flex-col overflow-auto max-h-[32vh]'">
  <div className="edge"> </div>

          <div className='pt-6 '>
          <div className=''>
          <div className='grid items-center grid-cols-1 gap-2 mb-2 text-center place-content-evenly contmobgroup place-items-evenly'>

<h1 className='mt-6 mb-12 text-xl font-semibold text-white contmobphrase font-sfprodisplaysemibold'>
Schedule Your Free Demo Report Today
</h1>
</div>






<FormControl className='px-6'  >
            <div className='grid grid-cols-1 gap-2 '>
              <Box >
                 <FormLabel className='mb-1 ml-1 text-lg font-medium text-white/90 font-sfprodisplayregular' key={'name'}> </FormLabel>
                  <Input 
                    className='w-full py-3 pl-2 text-gray-100 bg-transparent rounded-sm shadow-xs contactname'
                    id='name'
                    type={'name'}
                    value={name}
                    placeholder="Your Full Name"
                    onChange={event => setName(event.currentTarget.value)}
                  />
              </Box>
            <Box>
                <FormLabel className='mt-4 mb-1 ml-1 text-lg font-medium text-white/90 font-sfprodisplayregular'  key={'email'}></FormLabel>
                  <Input 
                    className='w-full py-3 pl-2 rounded-sm shadow-xs contactname '
                    id='email'
                    type={'email'}
                    value={email}
                    placeholder='Email Address'
                    onChange={event => setEmail(event.currentTarget.value)}            
                  />
              </Box>
            </div>
      
          <FormLabel className='mt-8 mb-1 ml-1 text-lg font-medium text-white/90 font-sfprodisplayregular'  key={'meetingdate1'}></FormLabel>
                  <Input 
                    className='w-full py-3 pl-2 rounded-sm shadow-xs contactname '
                    id='meetingdate1'
                    type={'meetingdate1'}
                    value={email}
                    placeholder='Preferred Meeting Date: Option 1'
                    onChange={event => setMeetingDate1(event.currentTarget.value)}            
                  />
        
       
          <FormLabel className='mt-8 mb-1 ml-1 text-lg font-medium text-white/90 font-sfprodisplayregular'  key={'meetingdate2'}></FormLabel>
                  <Input 
                    className='w-full py-3 pl-2 mb-6 rounded-sm shadow-xs contactname '
                    id='meetingdate2'
                    type={'meetingdate2'}
                    value={email}
                    placeholder='Preferred Meeting Date: Option 2'
                    onChange={event => setMeetingDate2(event.currentTarget.value)}            
                  />
       
            <Button 
              className='w-full px-2 py-2 mt-12 bg-amber-500 hover:bg-opacity-50'
              marginLeft={'1'}
              marginRight={'1'}
              variant="solid"
              type="submit"
              mt={4}
              isLoading={isLoading}
              loadingText='Sending'                                            
              >
                <p className='w-full font-semibold tracking-wider text-white hover:text-opacity-50 font-sfprodisplayregular'>
                  Send Message 
                </p>
              </Button>
          </FormControl>
       
         


		<a className="closeup" href="#">&times;</a>
    </div>
		</div>
   
	</div>
</div>
                
                
             
             

          </div>
          
        </Box>









        
       

        <div className='grid items-center grid-cols-2 gap-2 mt-8 text-center '>  
         <div className='relative '>
           <Image
             src="/images/blkchiefrepo.png"
             objectFit='cover'
             layout='responsive'
              width="79.375rem"
              height="48.313rem"        
             className='rounded-t-md'
             alt='Summary image'
           />
         </div>
         <div className='grid items-center grid-cols-1 p-4 mb-6 ring-1 ring-black/10 filter-blur w-fit'>
          <div className=''>
          <h1 className='pt-3 pl-3 text-xl font-semibold text-left thefirst font-sfprodisplaysemibold text-amber-500'>
             Focused on the KPIs that matter
              </h1>
              <h1 className='p-3 text-lg text-left text-gray-200 take font-sfprodisplayregular'> 
              Monitor the profitability behind your marketing efforts. Track sales, leads, cost, and returns with a single click.
              </h1>
          </div>
        

          </div>
       
      
         </div>
         <div className=''>
          <Tools />
          </div>
       
         <div className='grid items-center grid-rows-1 gap-1 pb-1 mt-4 text-center mb-7 place-content-evenly '>
         <div className='grid items-center grid-rows-1 gap-1 pb-1 mt-4 mb-4 text-center place-content-evenly '>
        <a className="flex items-center gap-4 p-2 text-xl font-bold text-center bg-white rounded-sm ring-1 ring-white text-zinc-800 font-sfprodisplaybold ">
          <span className='text-xl text-black thefirst dark:hover:text-opacity-75'> Book Your Free Demo
          </span><p className='text-black dark:hover:text-opacity-75'><HiChartSquareBar className='dark:hover:text-opacity-75' color='black' size={25} /></p></a>
        </div>
        
        <h1 className='flex items-center mb-6 text-xl tracking-widest text-center text-gray-300 thefirst place-content-evenly indent-1 tx font-sfprodisplaylight'>
            An experience youd expect from a professional tool. </h1>
        </div>

        <h1 className='text-xl font-semibold text-left integrates font-sfprodisplaysemibold text-amber-500'> 
        Integrates with the platforms that drive your business
              </h1>
        <h1 className='w-7/12 mt-4 text-lg text-left text-gray-200 mobilewidth take font-sfprodisplayregular'> 
        Our dashboard pulls real-time data from the webs most prominent platforms to deliver key metrics in one central location. Replace your weekly or monthly reports with on-demand marketing insights.
              </h1>
          
        <div className='grid items-center grid-cols-2 gap-16 text-center'>
           <div className='grid items-center grid-cols-1 mobilepad '>
          <Platforms />
            </div>
            <div className='relative mobilepad'>
           <Image
             src="/images/phonlog.png"
             objectFit='cover'
             layout='responsive'
             width='0.625rem'
             height='0.8rem'
           
             className='rounded-t-md'
             alt='Summary image'
           />
           </div>








        
       </div>
       </div>
</Container>


    )
  }
  
  export default Home