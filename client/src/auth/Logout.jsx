import styles from "./logout.module.scss"
import { Button } from "@mui/material"
const Logout = ()=>{
    const handleLogout = ()=>{
        localStorage.removeItem("email")
        localStorage.removeItem("name")
        localStorage.removeItem("token")

        window.location.href = "/"
    }
    return(
        <Button 
            color="secondary"
            variant="contained"
            onClick={handleLogout}>
            Logout
        </Button>
    )
}

export default Logout