import { allPosts } from "@/.contentlayer/generated"
import { Button } from "@/components/button"
import { IconButton } from "@/components/icon-button"
import { VisitPageButton } from "@/components/visit-page-button"
import Link from "next/link"

export default function Home() {
  return (
    <div className="flex flex-col items-center prose dark:prose-invert">
      <div className="flex flex-col mt-14 rounded-xl gradient-subtle-violet-with-border border-1 pl-8 pr-5 pt-8 pb-2.5">
        <div className="flex flex-row text-2xl text-lilac-950 dark:text-lilac-50 font-[550] tracking-tight">{"Hey, I'm Dakota"}<IconButton className="ml-2 mt-0.5" icon="icon-[fluent--sparkle-20-filled] h-[1.35rem] w-[1.35rem]"/></div>
        <div className="w-11/12 sm:w-3/4 mt-2 text-lilac-900 dark:text-lilac-200 font-normal tracking-tight text-md leading-snug">I’m a first-year student at MIT chasing storms, side quests, and solutions to important problems.</div>
        <div className="flex flex-row space-x-1.5 mt-3">
          <IconButton href="mailto:dakotag@mit.edu" icon="icon-[tabler--mail-filled] h-4 w-4"/>
          <IconButton href="https://twitter.com/dakotagoldberg" icon="icon-[mdi--twitter] h-4 w-4"/>
          <IconButton href="https://www.instagram.com/dakota.elle/" icon="icon-[mdi--instagram] h-4 w-4"/>
        </div>
        <Link className="no-underline self-end -mt-2" href="/about">
          <div className="text-lilac-600 dark:text-lilac-700 font-medium transition hover:brightness-75">Read More <span className="icon-[ri--arrow-right-up-line] bg-lilac-600 dark:bg-lilac-700 h-5 w-5 align-middle mb-0.5"></span></div>
        </Link>
      </div>
      <div className="self-start mt-10 mb-5">
        <div className="flex flex-row text-xl text-lilac-950 dark:text-lilac-50 font-medium tracking-tight -mb-3"><VisitPageButton href="/blog" className="mr-2"/>Recent thoughts</div>
        <div className="">
          {allPosts.map((post) => {
            if (post.featured) {
              return (
                <div className="-mb-3" key={post._id}>
                  <Link className="no-underline" href={post.slug}>
                    <h2 className="font-medium tracking-tight text-lg text-lilac-950 dark:text-lilac-100 -mb-4">{post.title}</h2>
                  </Link>
                    {post.description && <p className="text-sm text-lilac-700 dark:text-lilac-600 mb-1">{post.description}</p>}
                </div>
              )
            }
          })}
        </div>
        <Button label="All Posts" href="/blog" />
      </div>
      <div className="self-start mt-10 mb-5">
        <div className="flex flex-row text-xl text-lilac-950 dark:text-lilac-50 font-medium tracking-tight"><VisitPageButton href="/projects" className="mr-2"/>Featured Projects</div>
        <div className="mt-5 -mb-5 text-md text-lilac-800 dark:text-lilac-500">No projects are currently featured.</div>
        <Button label="All Projects" href="/projects" />
      </div>
    </div>
  )
}
