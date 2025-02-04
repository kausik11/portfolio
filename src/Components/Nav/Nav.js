import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import facebook from '../../image/logo/facebook_logo.png'
import git from '../../image/logo/git_logo.png'
import gmail from '../../image/logo/gmail_logo.png'
import linkedin from '../../image/logo/linkedin_logo.png'
import './Nav.css'



interface Props {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window?: () => Window;
  }

const Nav = (props: Props) => {
    const {window} = props
    
    const [mobileOpen, setMobileOpen] = useState(false);

const drawerWidth = 240;
const navItems = [facebook,git,gmail,linkedin];

const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        KS Portfolio.
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton>
              <ListItemText primary={item}/>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex',maxWidth:"100vw"}}>
      <CssBaseline />
      <AppBar component="nav" sx={{ backgroundColor: '#205b7b', maxWidth:"100vw"}}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h4"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
            KS <span style={{color:"#82c988",fontWeight:"400"}}>Portfolio.</span>
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' }}}>
           <IconButton>
            {navItems.map((item)=>(
              <a href='mailto:kkausik11@gmail.com' target='_blank'><img alt='logo' src={item} className='navlogo'></img></a>
            ))}
           </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
      <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
            backgroundColor: '#323b4c' 
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      </Box>
  )
}

export default Nav
