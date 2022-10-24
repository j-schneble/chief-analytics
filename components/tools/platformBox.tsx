import { 
    GiCargoCrane, 
    GiDigDug, 
    GiDigHole, 
    GiBrokenWall, 
    GiOBrick, 
    GiStumpRegrowth,
    GiStonePath,
    GiHighGrass,
    Gi3DHammer,
    GiHammerBreak,
    GiBulldozer
} from 'react-icons/gi'

import {
    MdPool,
    MdOutlineGrass,
    MdWater,
    MdDynamicFeed
} from 'react-icons/md'

import {
    FaSwimmingPool,
    FaWater,
    FaUserCheck,
    FaUsersCog
} from 'react-icons/fa'

import {

    BsCheckSquareFill

} from 'react-icons/bs'



interface Platforms {
    name: string
    url: string
    icon?: React.ReactNode
}

interface Checkmark {
    icon?: React.ReactNode
}

export const PlatformBox: Platforms[] = [
    {
        name: '☑  Google Analytics',
        icon: <  BsCheckSquareFill/>,
        url: "https://primeservicespa.com",
    },

    {
        name : '☑  Google Ads',
        icon: <  BsCheckSquareFill/>,
        url: "https://primeservicespa.com",
    },
    {
        name: '☑  Custom Platforms',
        icon: <  BsCheckSquareFill/>,
        url: "https://primeservicespa.com",
    },
    {
        name: '☑  Google My Business ',
        icon: <  BsCheckSquareFill/>,
        url: "https://primeservicespa.com",
    },
    {
        name: '☑  Facebook Ads ',
        icon: <  BsCheckSquareFill/>,
        url: "https://primeservicespa.com",
    },
    {
        name: '☑ Complete compatibility',
        icon: <  BsCheckSquareFill/>,
        url: "https://primeservicespa.com",
    },
 
    
]



