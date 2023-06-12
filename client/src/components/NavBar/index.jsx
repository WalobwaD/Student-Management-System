import Logout from "../../auth/Logout";
import { Link } from "react-router-dom";
import styles from "./index.module.scss"
import { useContext } from "react";
import { UserContext } from "../../context/AuthenticationContext/userContext";
import Logo from "../../assets/teacher.png"


const NavBar = ()=>{
    const {username, email} = useContext(UserContext)
    return (
        <>
            {email 
            ?
                <nav className={styles.navContainer}>
                    <Link
                        to='/'
                        className={styles.navLogo}>
                        <img src={Logo}/>
                    </Link>
                    <div className={styles.navLinks}>
                        <Link to="/">Home</Link>
                        <Link to="/students">Class DashBoard</Link>
                    </div>
                    <div className={styles.user}>
                        <div className={styles.icon}>
                            <i className="fa-solid fa-user"></i>
                            <span>{username}</span>
                        </div>
                        <Logout/>
                    </div>
                </nav>
            :
                <nav className={styles.navContainer}>
                    <Link
                        to='/'
                        className={styles.navLogo}>
                        <img src={Logo}/>
                    </Link>
                    <div className={styles.navLinks}>
                        <Link to="/">Home</Link>
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                    </div>

                </nav>
        }
        </>


    )
}

export default NavBar;