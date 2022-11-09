import type { NextPage } from 'next'
import Container from '../components/Container/index'
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
import Focus from './focus';
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
      
  
     
      <Container className='bg-gray-100' >
      
        
        <div className='grid items-center grid-rows-1 gap-1 pt-10 pb-1 mt-16 text-center place-content-evenly '>        
           <h1 className='flex items-center pb-1 text-5xl font-light tracking-widest text-center text-amber-500 take place-content-evenly indent-1 tx hov font-sfprodisplayregular'>
              Take control over your marketing spend with
              </h1>
              <div className='flex items-center pt-2 text-center justify-evenly'>
              <h1 className='pl-2 text-5xl font-light tracking-widest text-white font-sfprodisplayregular'>the
           <span className='pl-2 text-5xl font-semibold tracking-widest text-white font-sfprodisplayregular'>
               Chief Analytics Dashboard™ 
              </span>
              </h1>
              </div>
        </div>
        <div className='grid items-center grid-rows-1 gap-1 pb-1 text-center place-content-evenly '>
          <h1 className='flex items-center pt-1 pb-2 text-3xl tracking-widest text-center text-white font-heavy thefirst place-content-evenly indent-1 tx hov font-sfprodisplayheavy'> 
               ↓  
               </h1>
        </div>
        <div className='grid items-center grid-rows-1 gap-1 pb-1 text-center place-content-evenly '>
        <h1 className='flex items-center text-3xl tracking-widest text-center text-white thefirst place-content-evenly indent-1 tx hov font-sfprodisplaylight'>
            The first all-in-one KPI dashboard built for executives 
            </h1>
        </div>

        <Box className='mt-3 mb-16 '> 
          <div className='grid items-center grid-cols-1 gap-4 p-3 text-center place-content-evenly homecallgc item-center place-items-evenly'>
          <div className="grid items-center grid-rows-1 gap-1 pb-1 text-center place-content-evenly ">
  <div className='rounded-sm bgdark ring-4 ring-amber-500'>
  <a className="flex items-center gap-4 px-4 py-4 text-xl text-center rounded-sm font-sfprodisplayregular " href="#popup1"><span className='text-xl text-white txtsh thefirst dark:hover:text-opacity-75'> Book Your Free Demo</span><p className='text-white dark:hover:text-opacity-75'><HiChartSquareBar className='dark:hover:text-opacity-75' color='white' size={25} /></p></a></div>
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
        <div className='grid grid-cols-2 gap-20 mt-20 text-center '> 
        <div className=''>
         <div className='relative apic '>
        
           <Image
             src="/images/chhief.png"
             objectFit='cover'
             layout='responsive'
             width="91.25rem"
             height="60.813rem"        
             className='apic'
             alt='Summary image'
           />
      
         </div>
         </div> 
       
       <div className='p-10 '>
      <div className=''>
      <h1 className='font-semibold text-left text-white whitespace-nowrap btwi thefirst font-sfprodisplayregular'>
             Focused on the KPIs that matter
              </h1>
              
             
            
              <h1 className='pt-2 pb-1 mb-4 text-left text-gray-200 whitespace-pre-wrap monitor take font-sfprodisplaylight'> 
              Monitor the profitability behind your marketing efforts. Track sales, leads, cost, and returns with a single click.
              </h1>   
            
              <div className='flex items-center pt-6 pb-6 mt-2'>
              <Tools />
              </div>
       
     
            
            
      </div>
      
              </div>
          
              </div>
              
              
        
              <div className='w-full h-24 mt-20 mb-20 '>
     <div className='grid items-center h-24 grid-rows-1 text-center justify-evenly justify-items-center nblur'>
     <h1 className='text-xl text-gray-200 thefirst2 txtsh font-sfprodisplaylight'>
            An experience you would expect from a professional tool. </h1>
     </div>
       
        </div>

        <h1 className='text-4xl font-semibold integrates font-sfprodisplaysemibold text-amber-500'> 
        Integrates with the platforms that drive your business
              </h1>
        <h1 className='w-full mt-4 tracking-wider text-left text-gray-200 monitor take font-sfprodisplaylight mobilewidth '> 
        Our dashboard pulls real-time data from the most prominent platforms on the web to deliver key metrics in one central location. Replace your weekly or monthly reports with on-demand marketing insights.
              </h1>
              
          
        
      
         
              <div className='grid grid-cols-2 py-4 mt-6 '>
        <div className='mt-10 '>
          <Platforms />
            </div>
            <div className='relative alticsde '>
        
        <Image
          src="/images/inpic.png"
          objectFit='cover'
          layout='responsive'
          width="94.813"
          height="83.75"        
          className='apic'
          alt='Summary image'
        />
   
      </div>
</div>
         
      <div className='grid items-center grid-cols-1 py-4 mt-10 text-center justify-items-center justify-evenly '>
       <div className='p-6 px-2 pt-2 bg-amber-500 apap2'>
            <div className='grid grid-cols-2 z-2'>
              <div className='rounded-sm bgdark apap'>
                <div className='flex p-2 mt-3'>
                  <h1 className='flex items-center ml-3 text-lg text-center text-amber-500 font-sfprodisplayregular '>
                    Ready to learn more?
                  </h1>
                  
                  </div>
                  <div className='grid grid-cols-1 p-2 mt-8 mb-5'>

                  <h1 className='flex items-center text-3xl font-light text-center text-white justify-evenly justify-items-center font-sfprodisplayregular'>
                  We would love to show you the Chief Analytics Dashboard™ and answer any of your questions.
                  </h1>
                </div>
                <Box className='mt-10'>
                  <FormControl >
                    <div className='grid grid-cols-1 gap-2'>

               
                  <Box>
                <FormLabel className='mt-4 mb-1 ml-1 text-lg font-medium text-white font-sfprodisplayregular'  key={'email'}></FormLabel>
                  <Input 
                    className='w-3/12 py-3 pl-2 text-white rounded-sm shadow-xs bg-zinc-800 ring-1 ring-gray-800'
                    id='email'
                    type={'email'}
                    value={email}
                  
                    placeholder='Email Address'
                    onChange={event => setEmail(event.currentTarget.value)}            
                  />
              </Box>
              </div>
                  </FormControl>
                </Box>
                
                <div className='grid grid-cols-1 gap-2 mt-4 mb-2 place-content-evenly contmobgroup place-items-evenly'>
<div className='flex px-6 py-2 mt-6 bgdark justify-evenly justify-items-center'>
<div className='flex px-3 bg-white rounded-sm ring-1 ring-gray-900 start'>
<h1 className='flex items-center pr-2 text-lg font-semibold text-center text-black nblur justify-items-center justify-evenly whitespace-nowrap contmobphrase font-sfprodisplaysemibold'>
LETS GET STARTED
</h1>

<Image
                          layout='fixed'
                         width='40.938rem'
                         height='44.688rem'
                          className='flex px-1 '
                           
                            src="/images/cd.png"
                          alt='prime'
                           
                        />
                   
            </div>            
</div>

</div>

              </div>
</div>
        





       

        
       </div>
      
       </div>
  

</Container>


    )
  }
  
  export default Home

