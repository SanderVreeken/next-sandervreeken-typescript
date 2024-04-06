import Button from '@/components/Button'
import Logo from '@/components/Logo'

import { headerFooterButtons } from '@/elements/buttons'

/**
   * Returns child for Header and Footer component since they share the same elements.
   *
   * @returns ReactNode to be used as child for Header and Footer component.
   */
const getHeaderFooterChild = () => {
    return (
        <>
            <Logo />
            <div className='flex flex-col gap-6 items-center desktop:flex-row'>
                {headerFooterButtons.map((button, index) => (
                    <Button
                        key={index}
                        button={button}
                    />
                ))}
            </div>
        </>
    )
}

export default getHeaderFooterChild