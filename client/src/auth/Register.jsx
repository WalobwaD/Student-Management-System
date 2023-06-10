import { useState } from 'react'

function App() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')


  const registerUser = async (e)=>{
    e.preventDefault()
    const response = await fetch('http://localhost:8080/auth/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        email,
        password
      })
    })
    const data = await response.json()
    if (data.status === 'success') {
        console.log('success')
        window.location.href = '/login'
    } else{
        console.log('invalid email')
    }
  }

  return (
    <>
      <form onSubmit={registerUser}>
        <input 
        onChange={(e)=>setName(e.target.value)}
        type='text' 
        name='name'
        value={name}
        />

        <input 
          onChange={(e)=>setEmail(e.target.value)}
          type='email' 
          value={email}
          name='email'
        />
        <input
          onChange={(e)=>setPassword(e.target.value)}        
          type='password' 
          value={password}
          name='password'
        />

        <input type='submit'/>
      </form>
    </>
  )
}

export default App
