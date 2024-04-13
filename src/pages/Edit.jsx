import { useContext } from "react"
import { UserContext } from "../contexts/UserContext"
import { Link, useParams } from "react-router-dom"
import { useForm } from "react-hook-form"
import Header from "../components/Header"

export default function Edit() {
    
    const { getSpecificUser, editUser } = useContext(UserContext)
    const { id } = useParams()
    const user = getSpecificUser(id)
    const { register, handleSubmit } = useForm()

    return(
        <>
        <form onSubmit={handleSubmit(async(data)=>{
            editUser(data, user.id)
        })}>
            <div className="p-5 bg-slate-200 h-screen text-center">
                <Header/>
                <input className="p-2 mr-3 rounded" defaultValue={user.firstName} {...register("firstName", {required: true})} required type="text" />
                <input className="p-2 mr-3 rounded" defaultValue={user.surname} {...register("surname", {required: true})} required type="text" />
                <input className="p-2 mr-3 rounded" defaultValue={user.birthDate} {...register("birthDate", {required: true})} required type="date" />
                <input className="p-2 mr-3 rounded" defaultValue={user.city} {...register("city", {required: true})} required type="text" />
                <input className="p-2 mr-3 rounded" defaultValue={user.profession} {...register("profession", {required: true})} required type="text" />
                <input className="bg-white rounded p-2 w-20 bg-green-200 cursor-pointer" type="submit" />
            </div>
        </form>
        </>
    )
}
//acessa pelas propriedades da classe User ./UserModel.js