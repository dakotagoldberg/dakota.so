import Link from "next/link"
import Image from "next/image"
import artsData from "../arts-data"

export default function Home() {
  return (
    <div className="prose dark:prose-invert mt-16">
      <div className="page-title mb-6">Visual Arts</div>
      <div className="flex flex-row flex-wrap justify-start gap-6">
      {!artsData.length && 'No posts found.'}
          {artsData.map((post) => {
            const { path, title, description, imgSrc } = post
            return (
                <Link key={post.path} href={post.path} className="no-underline w-full sm:w-[48%] lg:w-[30.75%] mb-0">
                <article className="" >
                  <Image src={post.imgSrc!} alt={post.title} width={1000} height={1000} className="object-cover rounded-lg h-60 sm:h-56 lg:h-36 mb-2 border-lilac-200 dark:border-lilac-900 border-1" />
                  <div className="font-medium tracking-tight text-xl sm:text-lg text-lilac-950 dark:text-lilac-100">{post.title}</div>
                  {/* {post.dateRange && <div className="font-medium text-md sm:text-sm md:text-[0.825rem] leading-snug text-lilac-prose-700 dark:text-lilac-prose-300">{post.dateRange}</div>} */}
                  {post.description && <div className="font-normal text-md sm:text-sm md:text-[0.825rem] leading-snug text-lilac-prose-600 dark:text-lilac-prose-400">{post.description}</div>}
                </article>
              </Link>
            )
          })}
        {/* {allposts.sort((a, b) => new Date(b.date).valueOf() - new Date(a.date).valueOf()).map((post) => (
          <Link key={post._id} href={post.slug} className="no-underline w-full sm:w-[48%] lg:w-[30.75%] mb-0">
            <article className="" >
              <Image src={post.thumbnail!} alt={post.name} width={1000} height={1000} className="object-cover rounded-lg h-60 sm:h-56 lg:h-36 mb-2 border-lilac-200 dark:border-lilac-900 border-1" />
              <div className="font-medium tracking-tight text-xl sm:text-lg text-lilac-950 dark:text-lilac-100">{post.name}</div>
              {post.dateRange && <div className="font-medium text-md sm:text-sm md:text-[0.825rem] leading-snug text-lilac-prose-700 dark:text-lilac-prose-300">{post.dateRange}</div>}
              {post.description && <div className="font-normal text-md sm:text-sm md:text-[0.825rem] leading-snug text-lilac-prose-600 dark:text-lilac-prose-400">{post.description}</div>}
            </article>
          </Link>
        ))} */}
      </div>
    </div>
  )
}
