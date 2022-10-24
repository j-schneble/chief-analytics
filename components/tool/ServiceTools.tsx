import { cn } from '../../lib /classNames'

interface ServiceProps {
    name: string
  
    icon?: React.ReactNode
    url: string
  }

  export default function Servicetool({
    name,
  
    icon,
    url,
  }: ServiceProps): JSX.Element {
    return (
        <a
          className={cn(
            'flex  space-betweenitems-center',
            '',
            'rounded-lg ',
            
          )}
          href={url}
          target='_blank'
          rel='noopener noreferrer'
        >
          <div className='w-full h-12 pl-1 mt-4 mb-8 rounded-sm shadow-2xl apic2 bg-amber-500 z-1 '>
            
          
         <div className='flex w-full pt-3 pb-2 mb-8 bg-black border-r-2 border-black rounded-sm shadow-2xl ring-1 ring-black/10 filter-blur z-5'>
          <div className='pl-1 pr-1 text-xl rounded-full text-amber-500'>{icon}</div>
        <div className=''>
          <h2 className='items-center text-center text-white font-regular gradient-name font-sfprodisplayregular '>{name}</h2>
            </div>
          </div>
          </div>
        </a>
      )
    }