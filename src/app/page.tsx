'use client'

export const dynamic = "force-dynamic"

import { MdOutlineWavingHand } from 'react-icons/md'

import Button from '@/components/Button'
import EButton from '@/types/Button'
import Image from 'next/image'
import Service from '@/components/Service'

import { useSuspenseQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { Suspense } from 'react'
import { servicesQuery } from './api/graphql/queries/Service'
import Banner from '@/components/Banner'
import CalendlyPopup from '@/components/CalendlyPopup'

export default function Home() {
  const { data: services } = useSuspenseQuery(servicesQuery)

  return (
    <main className='flex flex-col gap-32 desktop:gap-40'>
      <div className='flex flex-col gap-12 mt-16 desktop:mt-32 desktop:w-10/12'>
        <h1 className='font-semibold leading-tight text-4xl desktop:text-6xl'>Tailored Excel training and specialized solutions for individuals, teams, and companies.</h1>
        <div className='flex flex-col gap-6 desktop:flex-row'>
          {topButtons.map((button, index) => (
            <Button
              key={index}
              button={button}
            />
          ))}
        </div>
      </div>
      <div className='flex flex-col gap-8 desktop:gap-16 desktop:flex-row'>
        <div className='max-w-72 min-w-72' id='about-me'>
          <h2 className='mb-8 text-3xl'>About me</h2>
          <div className='border border-medium-gray inline-block p-2'>
            <Image
              alt='Headshot Sander Vreeken'
              height={174}
              src='/profile.png'
              width={174}
            />
          </div>
        </div>
        <div className='flex flex-col gap-8'>
          <p className='leading-normal text-2xl'>Hey there, I&apos;m Sander! A data analyst with a knack for all things Excel.</p>
          <p className='leading-normal text-2xl'>After graduating from Hotelschool The Hague, my passion for data blossomed, leading me to specialize in the field.</p>
          <p className='leading-normal text-2xl'>Now, I thrive in hotel data analysis roles, continuously expanding my expertise and sharing insights along the way.</p>
        </div>
      </div>
      <div className='flex flex-col gap-8 desktop:gap-16 desktop:flex-row'>
        <div className='max-w-72 min-w-72'>
          <h2 className='mb-8 text-3xl'>Schedule a session</h2>
        </div>
        <div className='flex flex-col gap-8'>
          <p className='leading-normal text-2xl'>Explore the perfect session customized to your requirements and delve into your preferred features of Excel alongside me, your committed Excel professional.</p>
          {/* TODO: Add Excel certificate. */}
        </div>
      </div>
      <div>
        <h2 className='mb-8 text-3xl'>My services</h2>
        <div className='flex flex-col gap-10'>
          <Suspense fallback={<div>Loading...</div>}>
            {services.readServices.map((service, index) => (
              <Service
                key={index}
                service={service}
              />
            ))}
          </Suspense>
        </div>
      </div>
      <Banner />
      <div className='hidden desktop:block'>
        <CalendlyPopup />
      </div>
    </main>
  )
}

const topButtons = [{
  href: 'https://calendly.com/sandervreeken/introduction',
  icon: <MdOutlineWavingHand />,
  title: 'Book an intro',
  type: EButton.PrimaryDark
}, {
  href: '#about-me',
  title: 'Learn more',
  type: EButton.PrimaryLight
}]