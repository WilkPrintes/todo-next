import React from "react";

import { cn } from "@/lib/utils"

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> { }

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, ...props }, ref) => {
        return (
            <input 
                type={type}
                className={cn("flex-1 mr-4 rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-50", className)}
                ref={ref}
                {...props}
            />
        )
    }
)

Input.displayName = "Input"

export { Input }