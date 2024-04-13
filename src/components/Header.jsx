import { Link } from "react-router-dom";

export default function Header() {
    return(
        <header style={{
            display: "flex",
            gap: "1.2rem",
            marginBottom: "1rem"
        }}>
                <Link className="rounded-lg hover:bg-slate-100 hover:text-slate-900 p-1" to="/">Home</Link>
                <Link className="rounded-lg hover:bg-slate-100 hover:text-slate-900 p-1" to="/new">Create</Link>
        </header>
    )
}