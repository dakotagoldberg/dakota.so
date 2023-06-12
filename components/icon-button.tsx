import Link from "next/link";

export function IconButton(props: { href?: string, icon: string, className?: string }) {
    if (props.href) {
        return <Link href={props.href} target={props.href.includes('http://') || props.href.includes('https://') || props.href.includes('mailto:') ? "_blank" : ""}>
            <div className={"flex items-center justify-center h-7 w-7 gradient-indigo-violet-background-with-border rounded-lg hover:brightness-90 hover:saturate-200 dark:hover:saturate-100 " + props.className}>
                <span className={"gradient-indigo-violet " + props.icon}></span>
            </div>
        </Link>
    }
    else {
        return <div><div className={"flex items-center justify-center h-7 w-7 gradient-indigo-violet-background-with-border rounded-lg hover:brightness-90 hover:saturate-200 dark:hover:saturate-100 " + props.className}>
            <span className={"gradient-indigo-violet " + props.icon}></span>
        </div></div>
    }
    
}