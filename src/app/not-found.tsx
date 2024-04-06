import Link from 'next/link'

import Button from '@/components/Button'

import EButton from '@/types/Button'

export default function NotFound() {
    return (
        <div className='flex flex-col gap-16 min-h-[60vh] items-center py-20'>
            <h2 className='leading-tight text-4xl'>Woops, this page does not exist yet.</h2>
            <div>
                <Button button={{
                    href: '/',
                    title: 'Take me back to recognized land!',
                    type: EButton.PrimaryDark
                }} />
            </div>
        </div>
    )
}