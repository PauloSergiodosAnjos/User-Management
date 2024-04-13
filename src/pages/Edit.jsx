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
            <Header/>
            <input defaultValue={user.firstName} {...register("firstName", {required: true})} required type="text" />
            <input defaultValue={user.surname} {...register("surname", {required: true})} required type="text" />
            <input defaultValue={user.birthDate} {...register("birthDate", {required: true})} required type="date" />
            <input defaultValue={user.city} {...register("city", {required: true})} required type="text" />
            <input defaultValue={user.profession} {...register("profession", {required: true})} required type="text" />
            <input type="submit" />
        </form>
        </>
    )
}
//acessa pelas propriedades da classe User ./UserModel.js