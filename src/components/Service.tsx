import Button from './Button'

import IService from '@/interfaces/Service'
import EButton from '@/types/Button'

interface Props {
    service: IService
}

const Service = ({ service }: Props) => {
    const { description, euros, minutes, title } = service

    return (
        <div className='bg-light-gray flex flex-col gap-16 p-6 w-full desktop:flex-row desktop:p-10'>
            <div className='max-w-72 min-w-72'>
                <h2 className='mb-8 text-3xl'>{title}</h2>
                <p className='text-dark-gray text-2xl'>{`€${euros} • ${minutes} minutes`}</p>
            </div>
            <div>
                <p className='leading-normal text-2xl mb-10'>{description}</p>
                <div className='flex flex-col gap-6 desktop:flex-row'>
                    {getButtons(service).map((button, index) => (
                        <Button
                            key={index}
                            button={button}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

/**
   * Returns completed parameters for the Button components.
   * 
   * @param service - Interface with the href for the component.
   * @returns Input for the Button components.
   */
const getButtons = (service: IService) => {
    return [{
        href: `/services/${service._id.$oid}`,
        title: 'Learn more',
        type: EButton.PrimaryDark
    }, {
        href: service.calendlyHref,
        title: 'Schedule',
        type: EButton.PrimaryLight
    }]
}

export default Service