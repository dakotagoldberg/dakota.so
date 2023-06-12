import { notFound } from "next/navigation"
import { Metadata } from "next"
import { allPages } from "contentlayer/generated"
import Image from 'next/image'
import { Mdx } from "@/components/mdx-components"

interface PageProps {
  params: {
    slug: string[]
  }
}

async function getPageFromParams(params: PageProps["params"]) {
  const slug = params?.slug?.join("/")
  const page = allPages.find((page) => page.slugAsParams === slug)

  if (!page) {
    null
  }

  return page
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const page = await getPageFromParams(params)

  if (!page) {
    return {}
  }

  return {
    title: page.title,
    description: page.description,
  }
}

export async function generateStaticParams(): Promise<PageProps["params"][]> {
  return allPages.map((page) => ({
    slug: page.slugAsParams.split("/"),
  }))
}

export default async function PagePage({ params }: PageProps) {
  const page = await getPageFromParams(params)

  if (!page) {
    notFound()
  }

  return (
    <article className="py-6 prose dark:prose-invert">
      {
        page.headerImage &&
          <Image
            alt={page.title}
            src={page.headerImage!}
            width={1000}
            height={1000}
            className="mt-8 rounded-xl border-transparent dark:border-lilac-900 border-1"
          />}
      <h1 className={"mb-2 page-title " + (page.headerImage ? "mt-10" : "mt-16")}>{page.title}</h1>
      {(page.description) && (
        <p className="text-lg mt-4 text-lilac-700 dark:text-lilac-prose-400">
          {page.description}
        </p>
      )}
      {page.contents && (
                <div className="flex flex-row flex-wrap items-center mt-4">
                  <div className="mr-2">Jump to:</div>
                  {page.contents.map((item) => (
                    <a
                      className="no-underline mx-1 my-1 rounded-lg px-3 py-[0.145rem] gradient-subtle-violet-with-border border-1 hover:brightness-[0.975] dark:hover:brightness-[1.25]"
                      href={item.url}
                      key={item.title}
                    >
                      <div className="text-[0.9rem] font-medium text-lilac-prose-700 dark:text-lilac-600">{item.title}</div>
                    </a>
                  ))}
                </div>
              )}
      <Mdx code={page.body.code} />
    </article>
  )
}
