import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import { TrashIcon } from "@/components/icon"
import React, { useState } from "react";
import { Span } from "@/components/utils";

export interface ListItemProps extends React.LiHTMLAttributes<HTMLLIElement>{
    text: String,
    onDelete?: () => void;
}

export const ListItem = React.forwardRef<HTMLLIElement, ListItemProps>(


    ({ className, onDelete, ...props }, ref) => {

        const handleDeleteClick = () => {
            if (onDelete) {
                onDelete();
            }
        };


        const [check, setCheck] = useState(false);

        return (
            <div className="space-y-2">
                <div className="flex items-center justify-between rounded-md px-4 py-2 dark:bg-gray-800">
                    <div className="flex items-center">
                        <Checkbox onCheckedChange={() => setCheck(!check)} className="mr-2" />
                        {check ? <Span variant="checked" text={props.text} /> : <Span variant="default" text={props.text} />}
                    </div>
                    <Button size="icon" variant="ghost" onClick={handleDeleteClick}>
                        <TrashIcon className="w-5 h-5 text-red-700 " />
                    </Button>
                </div>
            </div>
        )
    }
)


