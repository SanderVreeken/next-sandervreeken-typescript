"use client"

import { serviceQuery } from '@/app/api/graphql/queries/Service'
import Banner from '@/components/Banner'
import Button from '@/components/Button'
import CalendlyEmbed from '@/components/CalendlyEmbed'
import EButton from '@/types/Button'
import { useSuspenseQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import Script from 'next/script'
import { Suspense } from 'react'

export const dynamic = "force-dynamic"

interface Props {
    params: { id: string }
}

export default function Services({ params }: Props) {
    const { data: service } = useSuspenseQuery(serviceQuery, {
        variables: { readServiceId: params.id }
    })

    const { calendlyHref, description, euros, minutes, title, topics } = service.readService


    return (
        <main className='flex flex-col gap-20 desktop:gap-40'>
            <Suspense fallback={<div>Loading...</div>}>
                <div className='flex flex-col gap-12'>
                    <h1 className='pt-16 text-4xl desktop:pt-32 desktop:text-6xl'>{title}</h1>
                    <p className='text-dark-gray text-2xl'>{`€${euros} • ${minutes} minutes`}</p>
                    <div className='max-w-40'>
                        <Button
                            button={{
                                href: calendlyHref,
                                title: 'Schedule',
                                type: EButton.PrimaryDark
                            }}
                        />
                    </div>
                </div>
                <div className='flex flex-col gap-10 desktop:flex-row desktop:gap-16'>
                    <div className='max-w-72 min-w-72'>
                        <h2 className='mb-8 text-3xl'>About</h2>
                    </div>
                    <div className='flex flex-col gap-8'>
                        <p className='leading-normal text-2xl'>{description}</p>
                    </div>
                </div>
                <div className='flex flex-col gap-10 desktop:flex-row desktop:gap-16'>
                    <div className='max-w-72 min-w-72'>
                        <h2 className='mb-8 text-3xl'>Topics include</h2>
                    </div>
                    <ul className='flex flex-col gap-2'>
                        {topics.map((topic, index) => (
                            <li
                                key={index}
                                className='text-2xl'
                            >{topic}</li>
                        ))}
                    </ul>
                </div>
                <div className='hidden flex-col gap-10 desktop:flex-row desktop:gap-16'>
                    <div className='max-w-72 min-w-72'>
                        <h2 className='mb-8 text-3xl'>Schedule session</h2>
                    </div>
                    <CalendlyEmbed url={`${calendlyHref}?hide_event_type_details=1&hide_gdpr_banner=1`} />
                </div>
            </Suspense>
            <Banner />
        </main>
    )
}
