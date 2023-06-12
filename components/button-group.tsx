export function ButtonGroup(props: { names: string[], selected: string, onClick: any }) {
    return (
        <div className="flex flex-row">
            {props.names.map((name, i) => {
                let positionStyle = "";
                let textStyle = "";

                if (i == 0) {
                    positionStyle = "rounded-l-lg border-1"
                }
                else if (i == props.names.length - 1) {
                    positionStyle = "rounded-r-lg border-1"
                }
                else {
                    positionStyle = "border-1"
                }

                if (name == props.selected) {
                    positionStyle += " gradient-indigo-violet-background-with-border z-10"
                    textStyle += "text-transparent bg-clip-text gradient-indigo-violet";
                }
                else {
                    positionStyle += " gradient-subtle-violet-with-border"
                    textStyle = "text-lilac-900 dark:text-lilac-200"
                }

                return (
                    <button onClick={() => props.onClick(name)} key={name} className={" px-4 py-1 mr-[-0.035rem] " + positionStyle}><div className={"font-medium " + textStyle}>{name}</div></button>
                );
            })}
        </div>
    );
}