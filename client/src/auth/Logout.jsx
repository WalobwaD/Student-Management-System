import styles from "./logout.module.scss"

const Logout = ()=>{
    const handleLogout = ()=>{
        localStorage.removeItem("email")
        localStorage.removeItem("name")
        localStorage.removeItem("token")

        window.location.href = "/"
    }
    return(
        <button 
            className={styles.logoutBtn}
            onClick={handleLogout}>
            Logout
        </button>
    )
}

export default Logout