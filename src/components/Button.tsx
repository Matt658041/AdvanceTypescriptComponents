import { ComponentPropsWithoutRef } from "react";


type ButtonProps = & ComponentPropsWithoutRef<"button"> & {
  href?: never;
}
type AnchroProps = ComponentPropsWithoutRef<"a"> & {
href?: string;
}

function isAnchorProps(props: ButtonProps | AnchroProps) : props is AnchroProps {
    return 'href' in props;
}

export function Button(props: ButtonProps | AnchroProps) {

    if (isAnchorProps(props)) {
        return <a className="button" {...props}></a>
    }
  return <button className="button"{...props}></button>;
}
