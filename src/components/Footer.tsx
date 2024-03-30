import getHeaderFooterChild from '@/helpers/getHeaderFooterChild'

const Footer = () => {
    return (
        <footer className='bg-light-gray flex flex-col gap-12 items-center justify-center p-20 w-full'>
            {getHeaderFooterChild()}
        </footer>
    )
}

export default Footer