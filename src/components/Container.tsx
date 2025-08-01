import { ReactNode, ElementType, ComponentPropsWithRef } from "react";


type ContainerProps<T extends ElementType> = {
    as?: T;
    children: ReactNode;
} & ComponentPropsWithRef<T>;

export default function Container<C extends ElementType>({ as, children, ...props }: ContainerProps<C>) {
    const Component = as || "div";
   return (
       <Component {...props}>{children}</Component> )
 
}

