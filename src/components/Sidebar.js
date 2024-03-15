import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import PostAddIcon from '@mui/icons-material/PostAdd';
import SearchIcon from '@mui/icons-material/Search';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getPage } from '../slices/navbarSlice';

const drawerWidth = 240;

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));


const SidebarIcons=(index, iconColor)=>{
    if (index===0){
        return (<PostAddIcon color={iconColor}/>)
    }
    if (index===1){
        return (<SearchIcon color={iconColor}/>)
    }
    if (index===2){
        return (<HomeOutlinedIcon color={iconColor}/>)
    }
};

const Sidebar = ({isOpen, setOpen, pages, links}) => {
    const theme = useTheme();
    const navigate = useNavigate();
    const crrPage = useSelector(getPage);
  
    const handleDrawerClose = () => {
      setOpen(false);
    };
    return ( 
        <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        
        variant="persistent"
        anchor="left"
        open={isOpen}
        PaperProps={{
            sx: {
              backgroundColor: "#FAF9F6",
            }
          }}
      >
        <DrawerHeader >
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {pages.map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton onClick={() => navigate(links[index])}>
                <ListItemIcon>
                  {SidebarIcons(index, (crrPage === text.toLowerCase() ? "primary" : "black"))}
                </ListItemIcon>
                <ListItemText primary={text} primaryTypographyProps={{color: (crrPage === text.toLowerCase() ? "primary" : "black")}}/>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        <Divider />
        {/* <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List> */}
      </Drawer>
     );
}
 
export default Sidebar;