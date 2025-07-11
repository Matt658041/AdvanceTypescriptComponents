import { ComponentPropsWithoutRef, forwardRef} from "react";



type InputProps = {
    label: string;
    id: string;
} & ComponentPropsWithoutRef<"input">;


const Input = forwardRef <HTMLInputElement, InputProps>(function Input({ label, id, ...props}, ref) {
    // const { label, id } = props;
    return (
        <p>
            <label htmlFor={label}>{label}</label>
            <input id={id} name={id} {...props} ref={ref} />
        </p>
    )
})

export default Input;