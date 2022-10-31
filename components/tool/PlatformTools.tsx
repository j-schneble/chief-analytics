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
   
              <div className='grid grid-cols-1 ml-16 rounded-sm apam bg-zinc-100/90'>
             

<div className='flex px-2 py-2 pt-3 text-lg font-semibold text-black font-sfprodisplayregular whitespace-nowrap'>{name}</div>
      </div>
     
     
        

        </a>
      )
    }