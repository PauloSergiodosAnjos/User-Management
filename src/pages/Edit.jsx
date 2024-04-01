import { useContext } from "react"
import { UserContext } from "../contexts/UserContext"
import { useParams } from "react-router-dom"

export default function Edit() {
    
    const { getSpecificUser } = useContext(UserContext)
    const { id } = useParams()
    const user = getSpecificUser(id)

    console.log(user.id);

    return(
        <>
        <h1>Edit</h1>
        </>
    )
}
//acessa pelas propriedades da classe User ./UserModel.js