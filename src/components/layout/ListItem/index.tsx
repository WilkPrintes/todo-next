import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { TrashIcon } from "@/components/icon"
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import React, { useState } from "react";

const itemVariants = cva(
    "dark:text-gray-200", {
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

export interface ListItemProps extends React.LiHTMLAttributes<HTMLLIElement>, VariantProps<typeof itemVariants> {
    text: String,
    onDelete?: () => void;
}

export const ListItem = React.forwardRef<HTMLLIElement, ListItemProps>(


    ({ className, variant, onDelete, ...props }, ref) => {

        const handleDeleteClick = () => {
            if (onDelete) {
                onDelete();
            }
        };


        const [check, setCheck] = useState(false);

        const HandleChange = () => {
            console.log("bom dia")
            if (check)
                variant = "checked"
            else
                variant = "default"
            setCheck(!check)
        }

        return (
            <div className="space-y-2">
                <div className="flex items-center justify-between rounded-md px-4 py-2 dark:bg-gray-800">
                    <div className="flex items-center">
                        <Checkbox onCheckedChange={HandleChange} className="mr-2" />
                        <span className={cn(itemVariants({ variant, className }))}>{props.text}</span>
                    </div>
                    <Button size="icon" variant="ghost" onClick={handleDeleteClick}>
                        <TrashIcon className="w-5 h-5 text-red-700 " />
                    </Button>
                </div>
            </div>
        )
    }
)


