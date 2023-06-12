import styles from "./index.module.scss"
import logo from "../../assets/logo.png"
import { Box } from "@mui/material"
import {ArrowForward} from "@mui/icons-material"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { UserContext } from "../../context/AuthenticationContext/userContext"

const Home =()=>{
    const {name, email} = useContext(UserContext)
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <img src={logo}/>
            </div>
            <div className={styles.textContent}>
                <h2>Creating the <b>next billion curious minds</b> for Africa.</h2>
                <div
                    className={styles.button}
                >
                    {email
                        ?
                        <Box
                        component={Link}
                        to="/students"
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                        }}
                    >
                        Go to Class DashBoard <ArrowForward color="#7760A4"/>
                    </Box>
                    :
                    <Box
                    component={Link}
                    to="/login"
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    Sign In <ArrowForward color="#7760A4"/>
                </Box>
                    }

            </div>
            </div>

        </div>
    )
}

export default Home