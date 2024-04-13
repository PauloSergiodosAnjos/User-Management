import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import Header from "../components/Header";

export default function Home() {

    const { users, deleteUser } = useContext(UserContext)

    return(
        <>
        <div className="bg-gray-200 h-screen p-5">
            <Header/>
            <div className="bg-white pt-6 shadow rounded-md">
                <div className="px-4">
                    <h2 className="text-lg leading-6 font-medium text-gray-900">Cadastro de usuarios</h2>
                </div>
                <div className="mt-6">
                    <table className="w-full divide-y divide-gray-200">
                    <thead className="bg-gray-200">
                    <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-grady-500 uppercase tracking-wider">First Name</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-grady-500 uppercase tracking-wider">Surname</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-grady-500 uppercase tracking-wider">Birth Date</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-grady-500 uppercase tracking-wider">City</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-grady-500 uppercase tracking-wider">Profession</th>
                    </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                    {users && users.map((user) => (
                        <tr key={user.id}>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">{user.firstName}</td>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">{user.surname}</td>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">{user.birthDate}</td>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">{user.city}</td>
                        <td className="px-6 py-4 text-sm font-medium text-gray-900 whitespace-nowrap">{user.profession}</td>
                        <td className="px-6 py-4 text-sm font-medium text-blue-700 whitespace-nowrap">
                            <Link to={`/edit/${user.id}`}>
                            <button>Edit</button>
                            </Link>
                        </td>
                        <td className="px-6 py-4 text-sm font-medium text-red-400 whitespace-nowrap">
                            <button onClick={()=> deleteUser(user)}>Delete</button>
                        </td>
                        </tr>
                    ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <Link to="/new"><button className="shadow bg-white my-3 rounded p-2 text-green-700">Create</button></Link>
        </div>
        </>
    )
}