import { useForm } from "react-hook-form"
import User from "../model/UserModel"
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import Header from "../components/Header";

export default function Create() {

    const { register, handleSubmit } = useForm()
    const { addUser } = useContext(UserContext)
    return(
        <>
        <form onSubmit={handleSubmit(async(data)=>{
            const user = new User(data)
            addUser(user)
        })}>
            <div className="p-5 bg-slate-200 h-screen text-center">
            <Header/>
                <input className="p-2 mr-3 rounded" placeholder="First name" {...register("firstName", {required: true})} required type="text" />
                <input className="p-2 mr-3 rounded" placeholder="Surname" {...register("surname", {required: true})} required type="text" />
                <input className="p-2 mr-3 rounded" placeholder="Birth date" {...register("birthDate", {required: true})} required type="date" />
                <input className="p-2 mr-3 rounded" placeholder="City" {...register("city", {required: true})} required type="text" />
                <input className="p-2 mr-3 rounded" placeholder="Profession" {...register("profession", {required: true})} required type="text" />
                <input className="bg-white rounded p-2 w-20 bg-green-200 cursor-pointer" type="submit" />
            </div>
        </form>
        </>
    )
}