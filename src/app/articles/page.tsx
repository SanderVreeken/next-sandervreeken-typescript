'use client'

import { useSuspenseQuery } from '@apollo/client'
import articlesQuery from '../api/graphql/queries/Articles'
import { Suspense } from 'react'
import Article from '@/components/Article'

export const dynamic = "force-dynamic"

export default function Articles() {
    const { data: articles } = useSuspenseQuery(articlesQuery)

    return (
        <main className='flex flex-col gap-20 desktop:gap-40'>
            <h1 className='pt-16 text-4xl desktop:pt-32 desktop:text-6xl'>My Articles</h1>
            <div className='flex flex-col gap-10'>
                <Suspense fallback={<div>Loading...</div>}>
                    {articles.readArticles.map((article, index) => (
                        <Article
                            key={index}
                            article={article}
                        />
                    ))}
                </Suspense>
            </div>
        </main>
    )
}
