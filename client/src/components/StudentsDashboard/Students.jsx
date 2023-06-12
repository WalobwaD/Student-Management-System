import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {Link} from "react-router-dom"
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import StudentImage from "../../assets/students.png"
import { UserContext } from '../../context/AuthenticationContext/userContext';
import { useContext } from 'react';


const defaultTheme = createTheme();

export default function Album({students}) {
  const {token, isMonitor} = useContext(UserContext)


  const deleteData = async(id)=>{
      const response = await fetch(`https://student-management-system-1rxu.onrender.com/students/suspend/${id}`, {
          method: 'DELETE',
          headers: {
              'Content-Type': 'application/json; charset=utf-8',
              Authorization: `Bearer ${token}`
          },

      })
      const data = await response.json()
      window.location.href = '/'
  }

  console.log(isMonitor)

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              Silabu's Students<br/>
              <Typography component='p'>{students.length} Active</Typography>
            </Typography>
            
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
                Make every mind curious
            </Typography>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {students.map((student) => (
              <Grid item key={student._id} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image={StudentImage}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" sx={{color:'#7760A4'}} component="h2">
                        {student.name} {student.lastName}
                    </Typography>
                    <Typography>
                        {student.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                       sx={{color: '#7760A4',}} 
                       size="small"
                    >
                      <Link to={`/viewStudent/${student._id}`} style={{textDecoration: 'none'}} state={student} >View</Link>
                    </Button>
                    {isMonitor === 'true' &&
                        <>
                        <Button sx={{color: '#7760A4'}} size="small">
                          <Link to={`/updateStudent/${student._id}`} style={{textDecoration: 'none'}} state={student}>Update</Link>
                        </Button>
                        <Button onClick={()=>deleteData(student._id)} sx={{color: '#7760A4'}} size="small">Delete</Button>
                        </>


                    }

                   
                    
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
    </ThemeProvider>
  );
}