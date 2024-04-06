import { MdOutlineWavingHand } from 'react-icons/md'

import Button from './Button'

import EButton from '@/types/Button'

const Banner = () => {
    return (
        <div className='bg-light-black flex flex-col gap-6 p-10'>
            <p className='text-2xl text-center text-highlight desktop:text-start'>Not sure what is best for you?</p>
            <p className='leading-normal text-3xl text-center text-white desktop:text-start'>Let&apos;s collaborate to discover the most suitable options for your preferences!</p>
            <Button
                button={{
                    href: 'https://calendly.com/sandervreeken/introduction',
                    icon: <MdOutlineWavingHand />,
                    title: 'Book an intro',
                    type: EButton.PrimaryLight
                }}
            />
        </div>
    )
}

export default Banner