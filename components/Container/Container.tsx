import React from 'react'
import { useState } from 'react'
import Image from 'next/image'
import { Transition } from '@headlessui/react'
import splitbee from '@splitbee/web'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { RiInstagramLine} from 'react-icons/ri'
import NavMenu from '../NavMenu/index'
import { cn } from '../../lib /classNames'
import { IoLogoFacebook, IoLogoInstagram } from 'react-icons/io'
import Footer from '../Footer/index'
import { GrFacebook, GrInstagram } from 'react-icons/gr'
import { BsInstagram } from 'react-icons/bs'
import { FaFacebookF } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'

interface IContainerProps {
  back?: {
    href: string
    label: string
  }
  footer?: boolean
  showNav?: boolean
  projectsNav?: string
  children?: React.ReactNode
  title?: string
  description?: string
  image?: string

  [key: string]: any

  date?: any
}

export default function Container({
  footer = true,
  back,
  projectsNav = '',
  showNav = true,
  children,
  title = 'Prime Services.',
  description = 'Prime Services.',
  image = '',
  date,
  ...props
}: IContainerProps): JSX.Element {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  const meta = {
    title,
    description,
    image,
    type: 'website',
    date,
    props,
  }
  splitbee.init()



  return (
    <>
      <NavMenu opened={isOpen} setOpened={setIsOpen} />
      <div
        className={cn(
          projectsNav ? 'bg-dots' : '',
          'text-primary',
          'relative h-full min-h-screen w-full',
          'flex flex-col',
          'motion-reduce:transition-none motion-reduce:transform-none'
        )}
      >
        <Head>
         
          <meta name='robots' content='follow, index' />
          <meta property='og:type' content={meta.type} />
          <meta property='og:site_name' content='Prime Services' />
          <meta property='og:description' content={meta.description} />
          <meta name='ogdescription' content={meta.description} />
          <meta name='og:image' content={meta.image} />
        
        </Head>

        <Transition
          as={React.Fragment}
          show={showNav}
          enter='transition duration-100 ease-in-out'
          enterFrom='opacity-0 scale-90'
          enterTo='opacity-100 scale-100'
          leave='transition ease-in-out'
          leaveFrom='opacity-100 scale-100'
          leaveTo='opacity-0 scale-95'
        >
          <nav className='sticky w-full  bg-stickyy dark:bg-stickyy  z-[1] top-2 md:top-4 max-w-2xl px-4 py-2 rounded-md mx-auto flex justify-between items-center'>
            <button
              className='text-2xl button-primary-y '
              onClick={() => setIsOpen(!isOpen)}
            >
              
              <Image
                          layout='fixed'
                         width='48px'
                         height='51px'
                          className=''
                           
                            src="/images/ch.png"
                          alt='prime'
                           
                        />
            </button>
            {projectsNav && (
              <div className='flex flex-row gap-1 text-tertiary'>
                <Link href='/'>
                  <a className='transition-all cursor-pointer hover:text-primary'>
                    index
                  </a>
                </Link>
                <span></span>
                <Link href='/contact'>
                  <a className='transition-all cursor-pointer hover:text-primary'>
                    Contact
                  </a>
                </Link>
                <span>/</span>
                <Link href='/gallery'>
                  <a className='transition-all cursor-pointer hover:text-primary'>
                    Gallery
                  </a>
                </Link>
                <span>/</span>
                <Link href={`/gallery/${projectsNav}`}>
                  <a className='transition-all cursor-pointer hover:text-primary'>
                    {projectsNav}
                  </a>
                </Link>
              </div>
            )}
            {!projectsNav && (
              <div className='flex flex-row mr-1 space-x-4 item-center '>
                 
              </div>
            )}
            
          </nav>
        </Transition>
        <LazyMotion features={domAnimation}>
          <m.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
          >
            <main
              className={cn(
                'px-4 mt-20',
                'max-w-3xl',
                'mx-auto my-auto',
                'flex flex-col justify-center gap-12',
                'divide-y divide-gray-300 dark:divide-gray-700',
                'rounded-lg',
                projectsNav ? 'shadow-2xl dark:shadow-gray-800/90 pt-6' : ''
              )}
            >
              <div className='flex flex-col gap-2'>
                {back && (
                  <Link href={back.href}>
                    <a
                      className={cn(
                        'text-tertiary hover:text-secondary transition duration-200 ease-in-out cursor-pointer group mb-4'
                      )}
                    >
                      <span
                        aria-hidden='true'
                        className='inline-block transition-transform duration-200 ease-in-out translate-x-0 group-hover:-translate-x-1'
                      >
                        ⇤
                      </span>{' '}
                      {back.label}
                    </a>
                  </Link>
                )}
                {children}
              </div>
              {footer && (
                <Footer />
              )}
            </main>
          </m.div>
        </LazyMotion>
      </div>
    </>
  )
}
