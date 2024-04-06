import { promises as fs } from 'fs'

import Banner from '@/components/Banner'
import Service from '@/components/Service'

import IService from '@/interfaces/Service'

export default async function Services() {
    const file = await fs.readFile(process.cwd() + '/src/json/services.json', 'utf8');
    const services: [IService] = JSON.parse(file)

    return (
        <main className='flex flex-col gap-20 desktop:gap-40'>
            <h1 className='pt-16 text-4xl desktop:pt-32 desktop:text-6xl'>My Services</h1>
            <div className='flex flex-col gap-10'>
                {services.map((service, index) => (
                    <Service
                        key={index}
                        service={service}
                    />
                ))}
            </div>
            <Banner />
        </main>
    )
}
