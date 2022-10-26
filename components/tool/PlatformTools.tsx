import { cn } from '../../lib /classNames'
import {

  BsCheckSquareFill

} from 'react-icons/bs'

interface PlatformProps {
    name: string
  
    icon?: React.ReactNode
    url: string
  }

  export default function Platformtool({
    name,
  
    icon,
    url,
  }: PlatformProps): JSX.Element {
    return (
        <a
          className={cn(
            'flex  ',
            '',
            'rounded-lg ',
            
          )}
          href={url}
          target='_blank'
          rel='noopener noreferrer'
        >
         <div className='shadow-2xl nfx3 h-11 mb-7 apam nf z-1 '>
              <div className='grid grid-cols-2 '>
                <div className='flex pl-4 mb-1 ml-1 bg-transparent rounded-sm shadow-2xl ap ring-1 ring-black/10 filter-blur z-5'>

         <div className='px-3 pt-4 gradico2'>        < BsCheckSquareFill /> </div><div className='flex px-2 py-3 pt-3 whitespace-nowrap gradient-name'>{name}</div>
      </div>
     
         </div>
         </div>

        </a>
      )
    }