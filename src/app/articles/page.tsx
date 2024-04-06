import { promises as fs } from 'fs'

import Article from '@/components/Article'

import IArticle from '@/interfaces/Article'

export default async function Articles() {
    const file = await fs.readFile(process.cwd() + '/src/json/articles.json', 'utf8');
    const articles: [IArticle] = JSON.parse(file)

    return (
        <main className='flex flex-col gap-20 desktop:gap-40'>
            <h1 className='pt-16 text-4xl desktop:pt-32 desktop:text-6xl'>My Articles</h1>
            <div className='flex flex-col gap-10'>
                {articles.map((article, index) => (
                    <Article
                        key={index}
                        article={article}
                    />
                ))}
            </div>
        </main>
    )
}
