import Image from 'next/image'
import Link from 'next/link'

import IArticle from '@/interfaces/Article'

interface Props {
    article: IArticle
}

const Article = ({ article }: Props) => {
    const { description, href, imageHref, title } = article

    return (
        <Link
            className='bg-light-gray flex flex-col gap-16 p-6 w-full desktop:flex-row desktop:p-10'
            href={href}
        >
            <div className='max-w-72 min-w-72'>
                <h2 className='mb-8 text-3xl'>{title}</h2>
            </div>
            <div>
                <p className='leading-normal text-xl mb-10'>{description}</p>
                <div className='border border-medium-gray inline-block p-2'>
                    <Image
                        alt={`Image Article ${title}`}
                        height={300}
                        src={imageHref}
                        width={500}
                    />
                </div>
            </div>
        </Link>
    )
}

export default Article