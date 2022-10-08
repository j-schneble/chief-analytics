import Container from '../components/Container/index'
import type { NextPage } from 'next'
import NextLink from 'next/link'
import React from 'react'
import Image from 'next/image'
import { 
  Grid, 
  Text, 
  Link, 
  Box,
  Flex,
  Divider
  

   } from '@chakra-ui/react'
   import Tools from './tools'
   import Platforms from './platforms'
   import Checkmark from './checkmarks'
   import {BiPhoneCall } from 'react-icons/bi'
import { FiMessageCircle } from 'react-icons/fi'
   import {HiChartSquareBar} from 'react-icons/hi'

  const Home: NextPage = () => {


  
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
       <div className='grid items-center grid-rows-1 gap-1 pb-1 mt-4 mb-4 text-center place-content-evenly '>
        <a className="flex items-center gap-4 p-2 text-xl font-bold text-center bg-white rounded-sm ring-1 ring-white text-zinc-800 font-sfprodisplaybold ">
          <span className='text-xl text-black thefirst dark:hover:text-opacity-75'> Book Your Free Demo
          </span><p className='text-black dark:hover:text-opacity-75'><HiChartSquareBar className='dark:hover:text-opacity-75' color='black' size={25} /></p></a>
        </div>

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
         <div className='grid items-center grid-cols-1 p-4 mb-6 ring-1 ring-black/10 filter-blur z-5 w-fit'>
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