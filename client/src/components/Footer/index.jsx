import style from "./index.module.scss"
const Footer = ()=>{

    return (

        <div className={style.footer}>
            <h5>Copyright © {new Date().getFullYear()} Walobwa Dan</h5>

        </div>
        
    )
}

export default Footer