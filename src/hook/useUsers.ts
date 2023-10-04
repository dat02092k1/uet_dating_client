import { useMutation, useQuery } from "@tanstack/react-query"
import { createUser, getUsers } from "../api/user"
import { User } from "../types/types";
import { queryClient } from "../config/react_query";

const key = 'users'

export const useGetUsers = () => {
    return useQuery([key], getUsers); 
}

export const useCreateUser = () => {
    return useMutation(createUser, {
        onSuccess: (user: User) => {
            queryClient.setQueryData([key], (prevUsers: User[] | undefined) => prevUsers ? [user, ...prevUsers]: [user])
        }
    })
}
