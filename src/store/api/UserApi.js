import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const UserApi=createApi({

reducerPath:"UserApi",
baseQuery:fetchBaseQuery({
    baseUrl:"https://jsonplaceholder.typicode.com/"
}),
endpoints:((builder)=>({
    getUsers:builder.query({
        query:(id)=>(id ? `users/${id}` : "users")
    })
}))



})
export const {useGetUsersQuery} =UserApi;