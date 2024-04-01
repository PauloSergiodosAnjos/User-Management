import { useForm } from "react-hook-form"
import User from "../model/UserModel"
import { createClient } from "@supabase/supabase-js";

const supabase = createClient('https://riagbtjbfcihfyaxegev.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJpYWdidGpiZmNpaGZ5YXhlZ2V2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTE3MjkwMzgsImV4cCI6MjAyNzMwNTAzOH0.H5VBP0Co7P4Z0EAp0EB5rzFllu3GWRdv0_ydu2aWf3E');

export default function Create() {

    const addUser = async (user)=> {
        await supabase
        .from('st_users')
        .insert(
            {first_name: user.firstName, surname: user.surname, birth_date: user.birthDate, city: user.city, profession: user.profession}
        )
    }

    const { register, handleSubmit } = useForm()
    return(
        <>
        <h1>Create</h1>
        <form onSubmit={handleSubmit(async(data)=>{
            const user = new User(data)
            addUser(user)
        })}>
            <input placeholder="First name" {...register("firstName", {required: true})} required type="text" />
            <input placeholder="Surname" {...register("surname", {required: true})} required type="text" />
            <input placeholder="Birth date" {...register("birthDate", {required: true})} required type="date" />
            <input placeholder="City" {...register("city", {required: true})} required type="text" />
            <input placeholder="Profession" {...register("profession", {required: true})} required type="text" />
            <input type="submit" />
        </form>
        </>
    )
}