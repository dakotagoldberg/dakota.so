import { defineDocumentType, makeSource } from "contentlayer/source-files"

/** @type {import('contentlayer/source-files').ComputedFields} */
const computedFields = {
  slug: {
    type: "string",
    resolve: (doc) => `/${doc._raw.flattenedPath}`,
  },
  slugAsParams: {
    type: "string",
    resolve: (doc) => doc._raw.flattenedPath.split("/").slice(1).join("/"),
  },
}

export const Page = defineDocumentType(() => ({
  name: "Page",
  filePathPattern: `pages/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
    },
    date: {
      type: "date",
    },
    contentType: {
      type: "string",
    },
    tags: { 
      type: 'list', 
      of: { type: 'string' } 
    },
    lastmod: { 
      type: 'date' 
    },
    draft: { 
      type: 'boolean',
      defaultValue: false,
    },
    thumbnail: { 
      type: 'string' 
    },
    headerImage: { 
      type: 'string' 
    },
    showDescriptionOnPost: {
      type: 'boolean',
    },
    contents: { 
      type: 'list', 
      of: { type: 'json' } 
    },
  },
  computedFields,
}))

export const Post = defineDocumentType(() => ({
  name: "Post",
  filePathPattern: `blog/**/*.mdx`,
  contentType: "mdx",
  fields: {
    title: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
    },
    date: {
      type: "date",
      required: true,
    },
    contentType: {
      type: "string",
      required: true,
    },
    tags: { 
      type: 'list', 
      of: { type: 'string' } 
    },
    lastmod: { 
      type: 'date' 
    },
    draft: { 
      type: 'boolean',
      defaultValue: false,
    },
    thumbnail: { 
      type: 'string' 
    },
    headerImage: { 
      type: 'string' 
    },
    showDescriptionOnPost: {
      type: 'boolean',
    },
    featured: {
      type: 'boolean',
    },
  },
  computedFields,
}))

export const Project = defineDocumentType(() => ({
  name: "Project",
  filePathPattern: `projects/**/*.mdx`,
  contentType: "mdx",
  fields: {
    name: {
      type: "string",
      required: true,
    },
    description: {
      type: "string",
    },
    date: {
      type: "date",
      required: true,
    },
    dateRange: {
      type: "string",
    },
    tags: {
      type: "list",
      of: { type: "string" }
    },
    thumbnail: {
      type: "string",
    },
    headerImage: {
      type: "string",
    },
    draft: {
      type: "boolean",
      defaultValue: false,
    },
    status: {
      type: "string",
    },
    featured: {
      type: 'boolean',
    }
  },
  computedFields,
}))


export default makeSource({
  contentDirPath: "./content",
  documentTypes: [Post, Page, Project],
})
