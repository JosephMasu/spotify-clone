import React, { forwardRef } from 'react';
import { twMerge } from 'tailwind-merge';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
    className,
    children,
    disabled,
    type = "button",
    ...props
}, ref) => {
    return (
        <button
            type={type}
            className={twMerge(`
                w-full
                rounded-full
                p-2
                bg-green-500
                text-black
                font-bold
                border-transparent
                px-3
                py-3
                hover:bg-green-600
                disabled:opacity-50
                disabled:cursor-not-allowed
                transition
            `
        ,className
    )}
    disabled={disabled}
    ref={ref}
    {...props}>
            {children}
        </button>
    );
});

Button.displayName = "Button";

export default Button;
