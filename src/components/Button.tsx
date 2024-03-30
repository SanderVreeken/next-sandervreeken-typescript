import Link from 'next/link'

import IButton from '@/interfaces/Button'
import EButton from '@/types/Button'

interface Props {
    button: IButton
}

const Button = ({ button }: Props) => {
    // Add Tailwind classes to update style if box is true.
    const className = getClassName(button.type)

    return (
        <Link
            className={`${className} inline-flex font-medium gap-2 items-start justify-center`}
            href={button.href}
        >
            {button.icon && button.icon}
            {button.title}
        </Link>
    )
}

/**
   * Returns className for the component.
   *
   * @param type - Type indicating the styling.
   * @returns String with Tailwind classes.
   */
const getClassName = (type: EButton | undefined) => {

    const defaultFontSize = 'text-lg'

    // Check whether type is defined.
    if (!type) return defaultFontSize

    // Split type to get attributes of the type.
    const split = (`${type}`).match(/[A-Z][a-z]+/g)

    // Check whether type was split.
    if (split?.length !== 2) return ''

    const darkLight = split[1] === 'Dark' ? 'bg-light-black border-light-black text-white' : 'bg-white'
    const primarySecondary = split[0] === 'Primary' ? 'px-8 py-6 text-2xl' : `${defaultFontSize} px-4 py-2`

    return `${darkLight} ${primarySecondary} border`
}

export default Button