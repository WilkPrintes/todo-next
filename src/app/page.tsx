"use client"

import { Input } from "@/components/input/"
import { ListItem } from "@/components/layout"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { useForm, SubmitHandler } from "react-hook-form"

export default function Home() {

  type Inputs = {
    example: string

  }

  const [items, setItems] = useState<string[]>([]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>()

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    setItems([...items, data.example]);
    reset();
    console.log(items);
  }

  const handleDeleteItem = (index: number) => {
    setItems(items.filter((_, i) => i !== index));
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-950">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6 dark:bg-gray-900">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-50">Todo List</h1>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="flex items-center mb-4">
          <Input
            placeholder="Add a new task"
            type="text"
            {...register("example")}
          />
          <Button type="submit">Add</Button>
        </form>
        {items.map( (item, index) => {
          return (
            <ListItem text={item} onDelete={() => handleDeleteItem(index)} />
          )
        })}
        <div className="mt-6 flex justify-end">
          <Button variant="outline" onClick={() => setItems([])}>Clear Completed</Button>
        </div>
      </div>
    </div>
  );
}

