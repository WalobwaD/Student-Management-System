import GroupIcon from '@mui/icons-material/Group';
import { Avatar } from '@mui/material';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';

import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { useContext, useState } from 'react';
import { UserContext } from '../../context/AuthenticationContext/userContext';
import { useLocation } from 'react-router-dom';


// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();




const UpdateStudent = ()=>{
    const student= useLocation().state
    const {token} = useContext(UserContext)
    const [name, setName] = useState(student.name)
    const [email, setEmail] = useState(student.email)
    const [password, setPassword] = useState(student.password)
    const [monitor, setMonitor] = useState(false)
    const [lastName, setlastName] = useState(student.lastName)
    const [description, setDescription] = useState(student.description)
    const [level, setLevel] = useState(student.level)

  const handleSubmit = async (e)=>{
      e.preventDefault()
      const response = await fetch(`https://student-management-system-1rxu.onrender.com/students/update/${student._id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          name,
          lastName,
          email,
          description,
          level,
          monitor,
          password
        })
      })
      const data = await response.json()
      if (data.status === 'success') {
          console.log('success')
          window.location.href = '/'
      } else{
          console.log('invalid email')
      }
}
  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: '#7760A4' }}>
            <GroupIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Update {name} {lastName}'s profile
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  color = 'secondary'
                  autoComplete="given-name"
                  name="name"
                  value={name}
                  sx={{
                    '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: '#7760A4' } },
                  }}
                  required
                  fullWidth
                  id="name"
                  label="First Name"
                  onChange={(e)=>setName(e.target.value)}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  color = 'secondary'
                  value={lastName}
                  fullWidth
                  sx={{
                    '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: '#7760A4' } },
                  }}
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  onChange={(e)=>setlastName(e.target.value)}
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  color = 'secondary'
                  required
                  value={email}
                  sx={{
                    '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: '#7760A4' } },
                  }}
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  onChange={(e)=>setEmail(e.target.value)}
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  color = 'secondary'
                  fullWidth
                  value={description}
                  sx={{
                    '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: '#7760A4' } },
                  }}
                  id="description"
                  label="Descriprtion"
                  name="description"
                  onChange={(e)=>setDescription(e.target.value)}
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  color = 'secondary'
                  fullWidth
                  sx={{
                    '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: '#7760A4' } },
                  }}
                  id="level"
                  label="level"
                  name="level"
                  value={level}
                  type='number'
                  onChange={(e)=>setLevel(e.target.value)}
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  color='secondary'
                  required
                  fullWidth
                  sx={{
                    '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: '#7760A4' } },
                  }}
                  name="password"
                  label="Password"
                  value={password}
                  type="password"
                  id="password"
                  onChange={(e)=>setPassword(e.target.value)}
                  autoComplete="new-password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              color='secondary'
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Update
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}


export default UpdateStudent