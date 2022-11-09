import NextLink from 'next/link'
import Image from 'next/image'
import React from "react";
import Container from '../components/Container/index'
import { useState } from "react";
import Tools from './tools'

const Focused = () => {
    return (
        
        <Container >
            
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
              
              
             
        </Container>
    
    )

}
export default Focused