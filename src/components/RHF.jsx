import React from 'react'
import {useForm} from "react-hook-form"
const RHF = () => {
  const {handleSubmit,reset,register,formState:{errors}}=useForm()
  const submithandle=(data)=>{
    console.log(data)
    reset()
  }
  return (
    <form onSubmit={handleSubmit(submithandle)}>
      <input {...register("UserName",{required:"true"})} placeholder='Username' />
      {errors.UserName && <p>Username is required</p>}
      <input {...register("Age",{required:"true"})} placeholder='Age' />
          {errors.Age && <p>Age is required</p>}
      <input {...register("Country",{required:"true"})} placeholder='Country' />
            {errors.Country && <p>Country is required</p>}
      <button type='submit'>Submitt</button>
    </form>
  )
}

export default RHF
