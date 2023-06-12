import Image from "next/image"
import Link from './link'
import { useMDXComponent } from "next-contentlayer/hooks"
import DesignShowcase from './design-showcase'


const components = {
  Image,
  DesignShowcase,
  Link
}

interface MdxProps {
  code: string
}

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code)

  return <Component components={components} />
}

