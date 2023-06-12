import { notFound } from "next/navigation"
import { allProjects } from "contentlayer/generated"

import { Metadata } from "next"
import Image from "next/image"
import { Mdx } from "@/components/mdx-components"
import { formatDate } from "@/functions/formatting"

interface ProjectProps {
  params: {
    slug: string[]
  }
}

async function getprojectFromParams(params: ProjectProps["params"]) {
  const slug = params?.slug?.join("/")
  const project = allProjects.find((project) => project.slugAsParams === slug)

  if (!project) {
    null
  }

  return project
}

export async function generateMetadata({
  params,
}: ProjectProps): Promise<Metadata> {
  const project = await getprojectFromParams(params)

  if (!project) {
    return {}
  }

  return {
    title: project.name,
    description: project.description,
  }
}

export async function generateStaticParams(): Promise<ProjectProps["params"][]> {
  return allProjects.map((project) => ({
    slug: project.slugAsParams.split("/"),
  }))
}

export default async function ProjectPage({ params }: ProjectProps) {
  const project = await getprojectFromParams(params)

  if (!project) {
    notFound()
  }

  return (
    <article className="py-6 prose dark:prose-invert">
      {
        project.headerImage &&
          <Image
            alt={project.name}
            src={project.headerImage!}
            width={1000}
            height={1000}
            className="mt-8 rounded-xl border-transparent dark:border-lilac-900 border-1"
          />}
      <h1 className={"mb-2 page-title " + (project.headerImage ? "mt-10" : "mt-16")}>{project.name}</h1>
      {project.dateRange && (
        <p className="text-lg mt-0 text-lilac-700 dark:text-lilac-prose-400">
          {project.dateRange}
        </p>
      )}
      {/* <hr className="my-4 border-t-lilac-prose-100 dark:border-t-lilac-prose-800" /> */}
      <Mdx code={project.body.code} />
    </article>
  )
}
