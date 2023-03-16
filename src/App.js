import * as React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import {AppBar, Box, Toolbar, IconButton, Typography, Menu, Container, Avatar, Button} from '@mui/material'
import ken from './images/ken.jpg'
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { BrowserRouter, Route, Link, Routes } from "react-router-dom";

import About from "./view/About/About.js";
import Project from "./view/Project/Project.js";
import App from "./App.js";

import MenuItem from '@mui/material/MenuItem';
// import { fontSize } from '@mui/system';

const pages = ['ABOUT', 'PROJECT'];
const links = {'ABOUT': '/about', 
               'PROJECT': '/project'};
// const routers ={'ABOUT': About, 
//                 'PROJECT': Project};
// const settings = ['ABOUT', 'PROJECT'];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Container maxWidth={false} disableGutters>
      <AppBar position="static"
      sx={{bgcolor: 'rgb(46, 59, 85)'}}>
        <Container maxWidth="xl"
        sx={{margin: '0px'}}>
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                fontSize: '1.5rem',
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              JEONGHOON KIM
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: 'block', md: 'none' },
                }}>
                {/* <BrowserRouter> */}
                  {pages.map((page) => (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                      <Typography textAlign="center" href={links[page]}> {/** */}
                        {/* <Link to={links[page]} element={routers[page]}>{page}</Link> */}
                        {page}
                      </Typography>
                    </MenuItem>  
                  ))}
                  {/* <Routes>
                    <Route exact path='/' element={<App/>} />
                    <Route path='/about' element={<About/>} />
                    <Route path='/contact' element={<Project/>} />
                  </Routes>
                </BrowserRouter> */}
              </Menu>
            </Box>

            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              JEONGHOON KIM
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button 
                  key={page}
                  onClick={handleCloseNavMenu}
                  href={links[page]}
                  sx={{ my: 2, color: 'white', display: 'block', fontSize: '1.2rem' }}
                >
                  {page}
                </Button>
              ))}
            </Box>

            
          </Toolbar>
        </Container>
      </AppBar>
      <Container maxWidth={false}
      sx={{ 
        marginTop: '80px',
        textAlign: 'center', 
        mx: '0px'
      }}>
        {/* image container */}
        <Container 
        sx={{justifyContent: "center",
        display: "flex"}}>
          <Avatar
            alt="No photo available"
            src={ken}
            sx={{ width: 360, height: 360}}
            >KEN
          </Avatar>
        </Container>

        <Typography variant='h2'
        sx={{
          margin: '16px',
          fontWeight: 700,
          fontSize: '4rem',
          lineHeight: 1.5,
          color: 'rgb(46, 59, 85)',
          // letterSpacing: '2px',
          textDecoration: 'none',
        }}>
          Jeonghoon Kim
        </Typography>

        <Typography variant='h5'
        sx={{
          margin: '0px 0px 0px 0px',
          fontWeight: 400,
          lineHeight: 1.5,
          fontSize: '1.5rem',
          textDecoration: 'none',
        }}>
          Senior Stuedent at University of Minnesota, Twin-Cities
        </Typography>
        <Typography variant='h5'
        sx={{
          margin: '0px 0px 8px 0px',
          fontWeight: 400,
          lineHeight: 1.5,
          fontSize: '1.5rem',
          textDecoration: 'none',
        }}>
          Living in Minneapolis, Minnesota
        </Typography>

        {/* Buttons */}
        <Container sx={{display: 'flex', justifyContent:'center', marginTop: '16px'}}>
          <Button variant="outlined" color='success' href="https://github.com/junghun-K" sx={{minWidth:'110px', padding: '3px 9px'}}>
            <GitHubIcon></GitHubIcon>
            <Typography sx={{paddingLeft:'3px', fontSize:'14px'}}>Github</Typography>
          </Button>
          <Button variant="outlined" color='primary' href="mailto:junghun1112@gmail.com" sx={{minWidth:'110px', padding: '3px 9px' , mx: '1.3rem'}}>
            <EmailIcon></EmailIcon>
            <Typography sx={{paddingLeft:'3px', fontSize:'14px'}}>Email</Typography>
          </Button>
          <Button variant="outlined" color='warning' href="https://www.linkedin.com/in/junghun-kim-42362a24b/" sx={{minWidth:'110px', padding: '3px 9px'}}>
            <LinkedInIcon></LinkedInIcon>
            <Typography sx={{paddingLeft:'3px', fontSize:'14px'}}>LinkedIn</Typography>
          </Button>
        </Container>
        
      </Container>
    </Container>
  );
}
export default ResponsiveAppBar;
