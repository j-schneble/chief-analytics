import Container from '../components/Container/index'
import Checkmark from '../components/tool/CheckmarkTool'
import { CheckmarkBox } from '../components/tools/checkmarkBox'
import { Box, Flex, Heading } from "@chakra-ui/react"

const Checks = () => {
  return (

   
   <div>
           <div className='flex items-center justify-between'>      
                   
                 
                   
                   </div>
                   <div
                   className='rounded-sm '
                  >
   <div className=''>
            <div className='ml-8'>
                    {/* Lazy */}
          {CheckmarkBox.sort((a, b) => {
            if (a.name < b.name) {
              return -1
            }
            if (a.name > b.name) {
              return 1
            }
            return 0
          }).map(checkmark => (
            <Checkmark
            key={checkmark.name}
            name={checkmark.name}            
            url={checkmark.url}
            icon={checkmark.icon}
            />
          ))}
         </div>
                    </div>
                    </div>
            </div>

  )
}
export default Checks