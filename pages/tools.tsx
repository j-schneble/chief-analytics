import Container from '../components/Container/index'
import Tool from '../components/tool/ServiceTools'
import { ToolBox } from '../components/tools/toolBox'
import { Box, Flex, Heading } from "@chakra-ui/react"

const Tools = () => {
  return (

   
   <div>
       
   <div className='flex '>
            <div className='grid w-full grid-cols-3 expmob gap-3 p-2 '>
                    {/* Lazy */}
          {ToolBox.sort((a, b) => {
            if (a.name < b.name) {
              return -1
            }
            if (a.name > b.name) {
              return 1
            }
            return 0
          }).map(tool => (
            <Tool
            icon={tool.icon}
            key={tool.name}
            name={tool.name}            
            url={tool.url}
            />
          ))}
         </div>
                    </div>
                    </div>
    

  )
}

export default Tools