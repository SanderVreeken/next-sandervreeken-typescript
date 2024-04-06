import Logo from './Logo'

import getHeaderFooterChild from '@/helpers/getHeaderFooterChild'

const Header = () => {
    return (
        // Only show logo on mobile.
        // TODO: Implement foldable menu for other pages.
        <header className='flex flex-col desktop:flex-row'>
            <div className='flex desktop:hidden'>
                <Logo />
            </div>
            <div className='hidden justify-between w-full desktop:flex'>
                {getHeaderFooterChild()}
            </div>
        </header>
    )
}

export default Header
