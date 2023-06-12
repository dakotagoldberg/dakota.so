import Link from "next/link";

export function NameChip() {
    return (
        <Link href="/">
            <div className="flex items-center justify-center gradient-indigo-violet px-4 py-[0.115rem] rounded-full border-1 gradient-indigo-violet-background-with-border transition-transform hover:scale-105">
                <div className="font-display font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-tl from-indigo to-violet">dakota</div>
            </div>
        </Link>
    );
}