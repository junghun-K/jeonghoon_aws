import * as React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import {Grid, Paper, Link, AppBar, Box, Toolbar, IconButton, Typography, Menu, Container, Button} from '@mui/material'
import { experimentalStyled as styled } from '@mui/material/styles';
import MenuItem from '@mui/material/MenuItem';
import ScienceIcon from '@mui/icons-material/Science';
import WorkIcon from '@mui/icons-material/Work';
import SchoolIcon from '@mui/icons-material/School';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import DescriptionIcon from '@mui/icons-material/Description';
import Resume from './resume.pdf';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(5),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const pages = ['ABOUT', 'PROJECT'];
const links = {'ABOUT': '/about', 
               'PROJECT': '/project'};
const skills = ['Python', 'Pytorch', 'Tensorflow', 'Javascript', 'React', 'Node.js', 'HTML', 'CSS', 'Postman', 'SQL', 'Java', 'Docker', 'Git'];

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
        marginTop: '50px',
        textAlign: 'center', 
        mx: '0px'
      }}>
        {/* Experience / Education */}
        <Container>
          <Typography variant='h4'
          sx={{fontSize: '1.3rem', fontWeight:'700', color: '#134db6', letterSpacing: '3px'}}>EXPERIENCE / EDUCATION</Typography>
          <Timeline position="right" sx={{display:'flex', marginBottom: '0px'}}>
            <TimelineItem sx={{display:'flex'}}>
              <TimelineOppositeContent
                sx={{ m: 'auto 0' }}
                align="right"
                variant="body2"
                color="text.secondary"
                fontSize='1.2rem'
              >
                Graduated May 2023
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot color="warning">
                  <SchoolIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography variant="h6" component="span" >
                  <Link href="https://twin-cities.umn.edu/" underline="none">
                  University of Minnesota, Twin-Cities</Link>
                </Typography>
                <Typography sx={{fontSize:'1rem'}}>B.S. Computer Science</Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent
                sx={{ m: 'auto 0' }}
                align="right"
                variant="body2"
                color="text.secondary"
                fontSize='1.2rem'
              >
                Jan 2023 - May 2023
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot color="success">
                  <ScienceIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography variant="h6" component="span" href="https://twin-cities.umn.edu/">
                  <Link href="https://knowledge-computing.github.io" underline="none">
                  Knowledge Computing Lab</Link>
                </Typography>
                <Typography sx={{fontSize:'1rem'}}>Research Assistant</Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent
                sx={{ m: 'auto 0' }}
                variant="body2"
                color="text.secondary"
                fontSize='1.2rem'
              >
                May 2022 - Sept 2022
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot color="primary">
                  <WorkIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography variant="h6" component="span">
                <Link href="https://www.tesser.co.kr/" underline="none">
                    Tesser</Link>
                </Typography>
                <Typography sx={{fontSize:'1rem'}}>Data Scientist</Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent
                sx={{ m: 'auto 0' }}
                variant="body2"
                color="text.secondary"
                fontSize='1.2rem'
              >
                Mar 2021 - Dec 2021
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot color="primary">
                  <WorkIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography variant="h6" component="span">
                  <Link href="https://www.tesser.co.kr/" underline="none">
                    Tesser</Link>
                </Typography>
                <Typography sx={{fontSize:'1rem'}}>Data Engineer</Typography>
              </TimelineContent>
            </TimelineItem> 
          </Timeline>

          <Button variant="outlined" href={Resume} target="_blank" startIcon={<DescriptionIcon />}>
            resume
          </Button>

        <Container sx={{marginTop: '80px', mx: '0px'}}>
          <Typography variant='h4'
          sx={{fontSize: '1.3rem', fontWeight:'700', color: '#134db6', marginBottom: '30px', letterSpacing: '5px'}}>
            SKILLS
          </Typography>
          <Grid container spacing={2} sx={{display:'flex'}}>
          <Grid item xs={2} md={4}>
            <Item>
              <img
                src={'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png'}
                alt='Not availble'
                loading="lazy"
                width='75'
                height='75'
              />
              <Typography>{skills[0]}</Typography>
            </Item>
          </Grid>
          <Grid item xs={2} md={4}>
            <Item>
              <img
                src={'https://pytorch.org/assets/images/pytorch-logo.png'}
                alt='Not availble'
                loading="lazy"
                width='75'
                height='75'
              />
              <Typography>{skills[1]}</Typography>
            </Item>
          </Grid>
          <Grid item xs={2} md={4}>
            <Item>
            <img
                src={'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/google-tensorflow-icon.png'}
                alt='Not availble'
                loading="lazy"
                width='75'
                height='75'
              />
              <Typography>{skills[2]}</Typography>
            </Item>
          </Grid>
          <Grid item xs={2} md={4}>
            <Item>
              <img
                src={'https://www.freepnglogos.com/uploads/javascript-png/js-logo-png-5.png'}
                alt='Not availble'
                loading="lazy"
                width='75'
                height='75'
              />
              <Typography>{skills[3]}</Typography>
            </Item>
          </Grid>
          <Grid item xs={2} md={4}>
            <Item>
              <img
                src={'https://user-images.githubusercontent.com/21227322/31187159-01c8d592-a8ff-11e7-9386-af708a7ae9de.png'}
                alt= 'Not availble'
                loading="lazy"
                width='75'
                height='75'
              />
              <Typography>{skills[4]}</Typography>
            </Item>
          </Grid>
          <Grid item xs={2} md={4}>
            <Item>
            <img
                src={'https://www.freepnglogos.com/uploads/javascript-png/javascript-nodejs-logo-27.png'}
                alt= 'Not availble'
                loading="lazy"
                width='75'
                height='75'
              />
              <Typography>{skills[5]}</Typography>
            </Item>
          </Grid>
          <Grid item xs={2} md={4}>
            <Item>
              <img
                src={'https://www.freepnglogos.com/uploads/html5-logo-png/html5-logo-html-logo-0.png'}
                alt= 'Not availble'
                loading="lazy"
                width='75'
                height='75'
              />
              <Typography>{skills[6]}</Typography>
            </Item>
          </Grid>
          <Grid item xs={2} md={4}>
            <Item>
              <img
                src={'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/1200px-CSS3_logo.svg.png'}
                alt= 'Not availble'
                loading="lazy"
                width='75'
                height='75'
              />
              <Typography>{skills[7]}</Typography>
            </Item>
          </Grid>
          <Grid item xs={2} md={4}>
            <Item>
              <img
                src={'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/postman-icon.png'}
                alt= 'Not availble'
                loading="lazy"
                width='75'
                height='75'
              />
              <Typography>{skills[8]}</Typography>
            </Item>
          </Grid>
          <Grid item xs={2} md={4}>
            <Item>
              <img
                src={'https://www.freepnglogos.com/uploads/logo-mysql-png/logo-mysql-five-advantages-disadvantages-mysql-4.png'}
                alt= 'Not availble'
                loading="lazy"
                width='75'
                height='75'
              />
              <Typography>{skills[9]}</Typography>
            </Item>
          </Grid>
          <Grid item xs={2} md={4}>
            <Item>
              <img
                src={'https://assets.stickpng.com/thumbs/58480979cef1014c0b5e4901.png'}
                alt= 'Not availble'
                loading="lazy"
                width='75'
                height='75'
              />
              <Typography>{skills[10]}</Typography>
            </Item>
          </Grid>
          <Grid item xs={2} md={4}>
            <Item>
              <img
                src={'https://assets.stickpng.com/images/62a9c7c08ff6441a2952dad3.png'}
                alt= 'Not availble'
                loading="lazy"
                width='75'
                height='75'
              />
              <Typography>{skills[11]}</Typography>
            </Item>
          </Grid>
          <Grid item xs={2} md={4}>
            <Item>
              <img
                src={'https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png'}
                alt= 'Not availble'
                loading="lazy"
                width='75'
                height='75'
              />
              <Typography>{skills[12]}</Typography>
            </Item>
          </Grid>
        </Grid>
        </Container>
      </Container>
      </Container>
    </Container>
  );
}
export default About;
