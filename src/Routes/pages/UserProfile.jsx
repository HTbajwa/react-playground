import React from 'react'
import { useNavigate } from 'react-router-dom'

const UserProfile = () => {
    const users=[
        
    {
        id:1,
        name:"h",
        user:101
    },
{
        id:2,
        name:"a",
        user:102
    },

    {
        id:3,
        name:"d",
        user:103
    },

    {
        id:4,
        name:"i",
        user:104
    },

    {
        id:5,
        name:"a",
        user:105
    },
]
const navigate=useNavigate()
const handleclick=(id)=>{
navigate(`/user/${id}`)
}
  return (
    <div>
      <h1>User Profile</h1>
      {
        users.map((elem,key)=>{
            return <div key={key}>
                <h1 onClick={()=>handleclick(elem.id)}>{elem.name}</h1>
                </div>

        })
      }
      <button onClick={()=>navigate(-1)}>back</button>
    </div>
  )
}

export default UserProfile
