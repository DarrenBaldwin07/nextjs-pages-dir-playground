import React from "react"
import { useForm } from "react-hook-form"

interface FormTypes {
  email: string
  count: number
}

const Form = () => {
  const { register, handleSubmit } = useForm<FormTypes>()

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
