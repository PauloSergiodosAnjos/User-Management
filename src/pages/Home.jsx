import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";

export default function Home() {

    const { users, deleteUser } = useContext(UserContext)

    return(
        <>
        <div>
            <div>
                <h1>USERS</h1>
                <Link to="/new"><button>Create</button></Link>
            </div>

            <table>
                <thead>
                <tr>
                    <th>First Name</th>
                    <th>Surname</th>
                    <th>Birth Date</th>
                    <th>City</th>
                    <th>Profession</th>
                </tr>
                </thead>
                <tbody>
                {users.map((user) => (
                    <tr key={user.id}>
                    <td>{user.firstName}</td>
                    <td>{user.surname}</td>
                    <td>{user.birthDate}</td>
                    <td>{user.city}</td>
                    <td>{user.profession}</td>
                    <td>
                        <Link to={`/edit/${user.id}`}>
                        <button>Edit</button>
                        </Link>
                    </td>
                    <td><button onClick={()=> deleteUser(user)}>Delete</button></td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
        </>
    )
}