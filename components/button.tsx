import Link from "next/link"

export function Button( props: {href?: string, onClick?: any, label: string} ) {
    if (props.href) {
        return <Link className="no-underline" href={props.href}>
            <button className="flex flex-row items-center space-between mt-10 px-3 py-0.5 rounded-md font-medium text-lilac-700 dark:text-lilac-600 gradient-subtle-violet-with-border border-1 hover:brightness-[0.975] hover:saturate-150 dark:hover:brightness-[1.25] hover:saturate-100">
                {props.label}
                <span className="ml-3 h-5 w-5 icon-[ri--arrow-right-up-line] bg-lilac-700 dark:bg-lilac-600"></span>
            </button>
        </Link>
    }
    else {
        return <button onClick={props.onClick} className="flex flex-row items-center space-between mt-10 px-3 py-0.5 rounded-md font-medium text-lilac-700 dark:text-lilac-600 gradient-subtle-violet-with-border border-1 hover:brightness-[0.975] hover:saturate-150 dark:hover:brightness-[1.25] hover:saturate-100">
            {props.label}
        </button>
    }
}