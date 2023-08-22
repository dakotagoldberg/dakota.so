import { allProjects } from "@/.contentlayer/generated";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="prose dark:prose-invert mt-16 w-full">
      <div className="page-title mb-6">Projects</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
        {allProjects
          .sort(
            (a, b) => new Date(b.date).valueOf() - new Date(a.date).valueOf()
          )
          .map((project) => (
            <Link
              key={project._id}
              href={project.slug}
              className="no-underline w-full mb-0"
            >
              <article className="">
                <Image
                  src={project.thumbnail!}
                  alt={project.name}
                  width={1000}
                  height={1000}
                  className="object-cover rounded-lg h-60 sm:h-56 lg:h-36 mb-2 border-lilac-200 dark:border-lilac-900 border-1"
                />
                <div className="font-medium tracking-tight text-xl sm:text-lg text-lilac-950 dark:text-lilac-100">
                  {project.name}
                </div>
                {project.dateRange && (
                  <div className="mb-2 font-medium text-md sm:text-sm md:text-[0.825rem] leading-snug text-lilac-prose-700 dark:text-lilac-prose-300">
                    {project.dateRange}
                  </div>
                )}
                {project.description && (
                  <div className="font-normal text-md sm:text-sm md:text-[0.825rem] leading-snug text-lilac-prose-600 dark:text-lilac-prose-400">
                    {project.description}
                  </div>
                )}
              </article>
            </Link>
          ))}
      </div>
    </div>
  );
}
