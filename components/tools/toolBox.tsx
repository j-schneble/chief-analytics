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

TbBulldozer

} from 'react-icons/tb'


interface Tool {
    name: string
    url: string
    icon?: React.ReactNode
}

interface Platforms {
    name: string
    url: string
    icon?: React.ReactNode
}

export const ToolBox: Tool[] = [
    {
        name: 'Dynamic comparison arrows',
        icon : < MdDynamicFeed />,
        url: "https://getchiefanalytics.com/",
    },

    {
        name : 'Customized for your business',
        icon: <FaUserCheck />,
        url: "https://getchiefanalytics.com/",
    },
    {
        name: 'Data range, User type, & Data filters ',
        icon: < FaUsersCog />,
        url: "https://getchiefanalytics.com/",
    },
    
]















