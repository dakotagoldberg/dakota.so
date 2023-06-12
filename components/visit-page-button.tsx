import { IconButton } from "./icon-button";

export function VisitPageButton(props: { href: string, className?: string }) {
    return (
        <IconButton href={props.href} icon="icon-[ri--arrow-right-up-line] h-[1.35rem] w-[1.35rem]" className={props.className} />
    );
}