import { cn } from "@/lib/utils"
import { cva, VariantProps } from "class-variance-authority"
import React from "react"

const itemVariants = cva(
    "dark:text-gray-400", {
    variants: {
        variant: {
            default: "text-gray-500 ",
            checked: "line-through text-gray-400"
        }
    },
    defaultVariants: {
        variant: "default"
    },
}
)


export interface SpanProps extends VariantProps<typeof itemVariants> {
    text: String
}


export const Span = React.forwardRef<HTMLLIElement, SpanProps>(

    ({variant, ...props}) => {
        return (
            <span className={cn(itemVariants({ variant }))}>{props.text}</span>
        )
    }

)