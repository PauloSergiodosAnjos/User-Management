import UserContextProvider from "./contexts/UserContext"
import Router from "./routes/Router"

function App() {
  return (
    <UserContextProvider>
      <Router/>
    </UserContextProvider>
  )
}

export default App
