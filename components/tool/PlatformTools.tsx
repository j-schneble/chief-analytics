import { cn } from '../../lib /classNames'

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
            'flex  space-betweenitems-center',
            '',
            'rounded-lg ',
            
          )}
          href={url}
          target='_blank'
          rel='noopener noreferrer'
        >
         <div className='flex w-full mt-2 rounded-sm shadow-2xl mobileback take2 darkpurp filter-blur z-5'>
         <h2 className='w-full p-3 font-bold text-white  mobilepad2 gradient-name font-sfprodisplaybold'>{name}</h2>
        <div className=''>

         
            </div>
          </div>
        </a>
      )
    }