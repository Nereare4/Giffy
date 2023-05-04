import { Link } from "wouter";
import './styles/Header.css'
import useUser from "../hooks/useUser";

export default function Header() {

  //const isLogged = false
  const {isLogged, logout} = useUser()

  const handleClick = e =>{
    e.preventDefault()
    logout()
  }

  return (
    <header className="gf-header">
        {
          isLogged 
          ? <Link to="#" onClick={handleClick}>Logout</Link>
          : <Link to="/login">Login</Link>
        }
    </header>
  )
}