import { notFound } from "next/navigation"
import { allPosts } from "contentlayer/generated"
import Image from 'next/image'
import { Metadata } from "next"
import { Mdx } from "@/components/mdx-components"
import { formatDate } from "@/functions/formatting"

interface PostProps {
  params: {
    slug: string[]
  }
}

async function getPostFromParams(params: PostProps["params"]) {
  const slug = params?.slug?.join("/")
  const post = allPosts.find((post) => post.slugAsParams === slug)

  if (!post) {
    null
  }

  return post
}

export async function generateMetadata({
  params,
}: PostProps): Promise<Metadata> {
  const post = await getPostFromParams(params)

  if (!post) {
    return {}
  }

  return {
    title: post.title,
    description: post.description,
  }
}

export async function generateStaticParams(): Promise<PostProps["params"][]> {
  return allPosts.map((post) => ({
    slug: post.slugAsParams.split("/"),
  }))
}

export default async function PostPage({ params }: PostProps) {
  const post = await getPostFromParams(params)

  if (!post) {
    notFound()
  }

  return (
    <article className="py-6 prose dark:prose-invert">
      {
        post.headerImage &&
          <Image
            alt={post.title}
            src={post.headerImage!}
            width={1000}
            height={1000}
            className="mt-8 rounded-xl border-transparent dark:border-lilac-900 border-1"
          />}
      <h1 className={"mb-2 page-title " + (post.headerImage ? "mt-10" : "mt-16")}>{post.title}</h1>
      {(post.description && post.showDescriptionOnPost) && (
        <p className="text-lg mt-0 text-lilac-700 dark:text-lilac-prose-400">
          {post.description}
        </p>
      )}
      <div className="flex flex-row flex-wrap items-center">
          <time className="text-md text-lilac-700 dark:text-lilac-600 mt-1" dateTime={post.date}>
            {formatDate(post.date)}
          </time>
            {post.contentType == 'note' && <div className="align-middle mt-1 ml-2 px-2 rounded-full gradient-subtle-violet-with-border border-1 text-sm text-lilac-500 dark:text-lilac-700">Note</div>}
        </div>
      <hr className="my-4 border-t-lilac-prose-100 dark:border-t-lilac-prose-800" />
      <Mdx code={post.body.code} />
    </article>
  )
}
