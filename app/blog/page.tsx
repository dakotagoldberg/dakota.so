"use client"
import { allPosts } from "@/.contentlayer/generated"
import { ButtonGroup } from "@/components/button-group"
import { formatDate } from "@/functions/formatting";
import Link from "next/link"
import { useState } from "react";
import { types } from "util";

export default function Blog() {

  const [filter, setFilter] = useState("Everything");

  let types = filter == "Blog" ? ["blog"] : (filter == "Notes" ? ["note"] : ["blog", "note"]);

  return (
    <div className="prose dark:prose-invert mt-16">
      <div className="page-title">Writing</div>
      <div className="mt-7 mb-10"><ButtonGroup names={['Everything', 'Blog', 'Notes']} selected={filter} onClick={setFilter} /></div>
      {allPosts.sort((a, b) => new Date(b.date).valueOf() - new Date(a.date).valueOf()).map((post) => (
        types.includes(post.contentType) ? <article key={post._id}>
        <Link className="no-underline" href={post.slug}>
          <h2 className="font-medium tracking-tight text-2xl text-lilac-950 dark:text-lilac-100 -mb-4">{post.title}</h2>
        </Link>
        {post.description && <p className="text-lilac-700 dark:text-lilac-600 mb-2.5">{post.description}</p>}
        <div className="flex flex-row flex-wrap items-center">
          <time className="text-sm text-lilac-600 dark:text-lilac-700" dateTime={post.date}>
            {formatDate(post.date)}
          </time>
            {post.contentType == 'note' && <div className="ml-2 px-2 rounded-full gradient-subtle-violet-with-border border-1 text-sm text-lilac-500 dark:text-lilac-700">Note</div>}
        </div>
      </article> : null
      ))}
    </div>
  )
}
