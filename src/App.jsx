import { BrowserRouter } from "react-router-dom"
import UserContextProvider from "./contexts/UserContext"
import Router from "./routes/Router"

function App() {
  return (
    <BrowserRouter>
      <UserContextProvider>
        <Router/>
      </UserContextProvider>
    </BrowserRouter>
  )
}

export default App
