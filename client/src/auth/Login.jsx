import { useState } from "react"

const Login = ()=>{
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const loginUser = async (e)=>{
        e.preventDefault()
        const response = await fetch('http://localhost:8080/auth/login', 
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email, 
                password
            })

        },
        )
        const data = await response.json()
        if (data.status === 'success') {
            console.log(data)

            localStorage.setItem('email', data.existingUser.email)
            localStorage.setItem('name', data.existingUser.name)
            localStorage.setItem('token', data.existingUser.authentication.sessionToken)

            window.location.href = '/'
        }else {
            console.log('invalid email')
        }
    }
    return (

        <section>
            <form onSubmit={loginUser}>
                <input
                    name="email"
                    value={email}
                    type="email" 
                    onChange={(e)=>setEmail(e.target.value)}/>
                <input 
                    name="password"
                    value={password}
                    type="password" 
                    onChange={(e)=>setPassword(e.target.value)}/>
                <input type="submit"/>
            </form>
        </section>
    )
}

export default Login