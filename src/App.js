
import { Container, Toolbar, Typography } from "@mui/material";

function App() {
  return (
    <Container disableGutters='true'
    sx={{ 
      marginTop: '80px',
      textAlign: 'center'
    }}>
      <header>
        <Toolbar variant="regular"
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
        }}></Toolbar>
      </header>
    </Container>

  );
}

export default App;
