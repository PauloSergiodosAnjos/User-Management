import { createClient } from "@supabase/supabase-js";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext()

const supabase = createClient('https://riagbtjbfcihfyaxegev.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJpYWdidGpiZmNpaGZ5YXhlZ2V2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE3MjkwMzgsImV4cCI6MjAyNzMwNTAzOH0.H5VBP0Co7P4Z0EAp0EB5rzFllu3GWRdv0_ydu2aWf3E');

export default function UserContextProvider({children}) {
    const [users, setUsers] = useState([])
    const navigate = useNavigate()

    useEffect(()=>{
        getUsers()
    }, [])

    const getUsers = async ()=> {
        const {data} = await supabase.from("st_users").select(
            `
            id,
            firstName:first_name,
            surname,
            birthDate:birth_date,
            city,
            profession
            `
        )
        setUsers(data)
    }

    const getSpecificUser = (userId)=> {
        return users.find(user => user.id === +userId)
    }

    
    const addUser = async (user)=> {
        await supabase
        .from('st_users')
        .insert(
            {first_name: user.firstName, surname: user.surname, birth_date: user.birthDate, city: user.city, profession: user.profession}
        )
        await getUsers()
        navigate("/")
    }

    const deleteUser = async (user)=> {
        await supabase
        .from('st_users')
        .delete()
        .eq("id", user.id)
        await getUsers()
    }

    const editUser = async(user, id)=> {
        await supabase
        .from('st_users')
        .update({first_name: user.firstName, surname: user.surname, birth_date: user.birthDate, city: user.city, profession: user.profession})
        .eq('id', String(id))
        await getUsers()
        navigate("/")
    }

    const userFuncs = {
        users,
        getUsers,
        getSpecificUser,
        addUser,
        deleteUser,
        editUser
    }

    return(
        <UserContext.Provider value={userFuncs}>
            {children}
        </UserContext.Provider>
    )
}