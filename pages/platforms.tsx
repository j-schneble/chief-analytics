import Container from '../components/Container/index'
import Platforms from '../components/tool/PlatformTools'
import { PlatformBox } from '../components/tools/platformBox'
import { Box, Flex, Heading } from "@chakra-ui/react"

const Tools = () => {
  return (

   
   <div>
           <div className='flex justify-between'>      
                   
                 
                   
                   </div>
                   <div
                   className='rounded '
                  >
   <div className='flex items-center text-center '>
            <div className='grid w-full grid-cols-3 gap-6 whitespace-nowrap mobexp'>
                    {/* Lazy */}
          {PlatformBox.sort((a, b) => {
            if (a.name < b.name) {
              return -1
            }
            if (a.name > b.name) {
              return 1
            }
            return 0
          }).map(platforms => (
            <Platforms          
            key={platforms.name}
            name={platforms.name}            
            url={platforms.url}
            icon={platforms.icon}
            />
          ))}
         </div>
                    </div>
                    </div>
            </div>

  )
}

export default Tools