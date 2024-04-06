'use client'

import React, { useEffect } from 'react'

interface Props {
    url: string
}

const CalendlyEmbed = ({ url }: Props) => {
    useEffect(() => {
        const head = document.querySelector('head')
        const script = document.createElement('script')
        script.setAttribute(
            'src',
            'https://assets.calendly.com/assets/external/widget.js'
        )
        head?.appendChild(script)
    }, [])

    return (
        <div
            className='calendly-inline-widget'
            data-url={url}
            style={{ minHeight: '700px', width: '100%' }}
        ></div>
    )
}

export default CalendlyEmbed