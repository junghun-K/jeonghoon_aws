
import { AppBar, Container, Toolbar, Typography } from "@mui/material";

function App() {
  return (
    <App disableGutters='true'
    sx={{ 
      marginTop: '80px',
      textAlign: 'center'
    }}>
      <AppBar
      sx={{
        display:'flex',
        flexDirection:'column',
        width: '100%',
        position: 'fixed',
        zIndex: '1100',
        top: '0px',
        left: 'auto',
        right: '0px',
        color: 'rgb(255,255,255)',
        backgroundColor: 'rgb(46, 59, 85)'

      }}>
        <Container
        sx={{
          margin: '0px'
        }}>
          <Toolbar variant="regular"
          sx={{
            
          }}></Toolbar>
        </Container>
      </AppBar>
      <Container>
        <Typography>Hello world</Typography>
      </Container>
    </App>
  );
}

export default App;
