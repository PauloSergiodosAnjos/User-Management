import { useForm } from "react-hook-form"
import User from "../model/UserModel"
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export default function Create() {

    const { register, handleSubmit } = useForm()
    const { addUser } = useContext(UserContext)
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