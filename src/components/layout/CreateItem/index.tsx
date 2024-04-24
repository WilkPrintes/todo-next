import { Input } from "@/components/input"
import { Button } from "@/components/ui/button"

export const CreateItem = () => {
    return (
        <div className="flex items-center mb-4">
            <Input
                className="flex-1 mr-4 rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-50"
                placeholder="Add a new task"
                type="text"
            />
            <Button>Add</Button>
        </div>
    )
}