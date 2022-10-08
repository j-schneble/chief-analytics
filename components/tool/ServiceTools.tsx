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
         <div className='flex w-full pt-3 mt-2 mb-8 border-r-2 rounded-sm shadow-2xl border-amber-600 ring-1 ring-black/10 filter-blur z-5'>
          <div className='pl-1 pr-1 text-xl rounded-full text-amber-500'>{icon}</div>
        <div className=''>
          <h2 className='items-center pl-1 text-center text-white font-regular gradient-name font-sfprodisplayregular '>{name}</h2>
            </div>
          </div>
        </a>
      )
    }