import * as React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import {AppBar, Box, Toolbar, IconButton, Typography, Menu, Container, Avatar, Button} from '@mui/material'
import {List, ListItem, ListItemText, ListItemAvatar} from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
// import { fontSize } from '@mui/system';

const pages = ['ABOUT', 'PROJECT'];
const links = {'ABOUT': '/about', 
               'PROJECT': '/project'};

function About() {
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
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center" href={links[page]}> {/** */}
                      {/* <Link to={links[page]} element={routers[page]}>{page}</Link> */}
                      {page}
                    </Typography>
                  </MenuItem>  
                ))}
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
        marginTop: '10px',
        textAlign: 'center', 
        mx: '0px'
      }}>
        {/* Experience / Education */}
        <Container>
          <Typography variant='h4'
          sx={{fontSize: '1.3rem', fontWeight:'700', color: '#134db6'}}>EXPERIENCE / EDUCATION</Typography>
          <Timeline position="right">
            <TimelineItem>
              <TimelineOppositeContent
                sx={{ m: 'auto 0' }}
                align="right"
                variant="body2"
                color="text.secondary"
              >
                9:30 am
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot>
                  <ImageIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography variant="h6" component="span">
                  Eat
                </Typography>
                <Typography>Because you need strength</Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent
                sx={{ m: 'auto 0' }}
                variant="body2"
                color="text.secondary"
              >
                10:00 am
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot color="primary">
                  <ImageIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography variant="h6" component="span">
                  Code
                </Typography>
                <Typography>Because it&apos;s awesome!</Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot color="primary" variant="outlined">
                  <ImageIcon />
                </TimelineDot>
                <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography variant="h6" component="span">
                  Sleep
                </Typography>
                <Typography>Because you need rest</Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                <TimelineDot color="secondary">
                  <ImageIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography variant="h6" component="span">
                  Repeat
                </Typography>
                <Typography>Because this is the life you love!</Typography>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
          {/* <List sx={{ width: '100%', maxWidth: 700, margin: 'auto' }}>
            <ListItem noWrap sx={{display: { xs: 'none', md: 'flex' }}} >
              <Typography sx={{fontSize: '1.1rem'}}> ~ May 2023</Typography>
              <ListItemAvatar>
                <Avatar>
                  <SchoolIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Photos" secondary="Jan 9, 2014" />
            </ListItem>
            <ListItem>
              <ListItemAvatar>
                <Avatar>
                  <WorkIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Work" secondary="Jan 7, 2014" />
            </ListItem>
            
          </List> */}
        </Container>
      </Container>
    </Container>
  );
}
export default About;
