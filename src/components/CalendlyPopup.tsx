'use client'

import Script from 'next/script';
import { MdCalendarMonth } from 'react-icons/md';

const CalendlyPopup = () => {
    function handleClick() {
        // @ts-ignore
        window.Calendly.initPopupWidget({
            url: 'https://calendly.com/sandervreeken/introduction?hide_gdpr_banner=1',
        });
        return false;
    }

    return (
        <div className='bg-highlight bottom-10 cursor-pointer font-32 fixed p-4 right-10 rounded-full shadow-lg text-2xl' onClick={handleClick}>
            <Script
                src='https://assets.calendly.com/assets/external/widget.js'
                type='text/javascript'
                async
            />
            <link
                href='https://assets.calendly.com/assets/external/widget.css'
                rel='stylesheet'
            />

            <MdCalendarMonth />
        </div>

    );
}

export default CalendlyPopup