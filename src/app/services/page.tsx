'use client'

import { useSuspenseQuery } from '@apollo/client'
import { Suspense } from 'react'
import { servicesQuery } from '../api/graphql/queries/Service'
import Service from '@/components/Service'
import Banner from '@/components/Banner'

export const dynamic = "force-dynamic"

export default function Services() {
    const { data: services } = useSuspenseQuery(servicesQuery)

    return (
        <main className='flex flex-col gap-20 desktop:gap-40'>
            <h1 className='pt-16 text-4xl desktop:pt-32 desktop:text-6xl'>My Services</h1>
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
            <Banner />
        </main>
    )
}
