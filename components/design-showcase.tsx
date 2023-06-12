"use client"
import { ReactNode, useState } from 'react'
import Image from 'next/image'

interface GalleryItem {
  tags: Array<string>
  image: any
  title: string
}

interface Props {
  children: ReactNode
  tags: Array<string>
  content: Array<GalleryItem>
}

export default function DesignShowcase({ children, tags, content }: Props) {
  const [filter, setFilter] = useState('')

  return (
    <div>
      <div className="flex flex-row flex-wrap items-center mt-4">
        <div className="mr-2">Filter:</div>
        {tags.map((item) =>
          item === filter ? (
            <button
              className={`mx-1 my-1 rounded-lg px-3 py-[0.145rem] gradient-indigo-violet-background-with-border border-1  hover:brightness-[0.975] dark:hover:brightness-[1.25]`}
              key={item}
              onClick={() => (filter == item ? setFilter('') : setFilter(item))}
            >
              <div className='text-[0.9rem] font-medium text-transparent bg-clip-text gradient-indigo-violet'>{item}</div>
            </button>
          ) : (
            <button
              className={`mx-1 my-1 rounded-lg px-3 py-[0.145rem] gradient-subtle-violet-with-border border-1 hover:brightness-[0.975] dark:hover:brightness-[1.25]`}
              key={item}
              onClick={() => (filter == item ? setFilter('') : setFilter(item))}
            >
              <div className="text-[0.9rem] font-medium text-lilac-prose-700 dark:text-lilac-600">{item}</div>
            </button>
          )
        )}
      </div>
      <div>
        {content
          .filter((item) => (filter ? item.tags.includes(filter) : true))
          .map((item) => (
            <div className="w-full" id={item.title} key={item.title}>
              {item.image}
            </div>
          ))}
      </div>
    </div>
  )
}
