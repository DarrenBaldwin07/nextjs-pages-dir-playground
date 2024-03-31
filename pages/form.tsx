import React from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"

interface FormTypes {
  email: string
  address: string
  count: number
}

const Form = () => {
  const { register, handleSubmit } = useForm<FormTypes>()

  const onSubmit = (data: FormTypes) => {
    console.log("DATA", data)
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col gap-4 items-center w-1/2 p-4"
    >
      <input
        type="email"
        {...register("email")}
        className="border-2 border-black"
      />
      <input
        {...register("address", { required: true })}
        className="border-2 border-black"
      />
      <input
        type="number"
        {...register("count", {
          valueAsNumber: true,
        })}
        className="border-2 border-black"
      />
      <button type="submit">Submit</button>
    </form>
  )
}

export default Form
