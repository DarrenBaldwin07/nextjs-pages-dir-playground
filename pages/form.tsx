import React from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"

const formSchema = z.object({
  email: z.string().email(),
  count: z.coerce.number(),
})

interface FormTypes {
  email: string
  count: number
}

const Form = () => {
  const { register, handleSubmit } = useForm<FormTypes>({
    resolver: zodResolver(formSchema),
  })

  return (
    <form
      onSubmit={handleSubmit((data) => {
        console.log(data)
      })}
    >
      <input
        type="email"
        required
        {...register("email")}
        style={{ color: "black" }}
      />
      <input
        type="number"
        required
        {...register("count", {
          valueAsNumber: true,
        })}
        style={{ color: "black" }}
      />
      <button type="submit">Submit</button>
    </form>
  )
}

export default Form
