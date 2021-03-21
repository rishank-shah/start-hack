import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AssignmentIcon from '@material-ui/icons/Assignment';
import FormatListNumberedIcon from '@material-ui/icons/FormatListNumbered';
import ChatIcon from '@material-ui/icons/Chat';
import TimerIcon from '@material-ui/icons/Timer';
import EventIcon from '@material-ui/icons/Event';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export const mainListItems = (
  
  <div>
    <ListItem button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <Link to="/"><ListItemText primary="Dashboard" /></Link>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <FormatListNumberedIcon />
       
      </ListItemIcon>
      <Link to="/todo"><ListItemText primary="ToDo's" /></Link>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ChatIcon />
      </ListItemIcon>
      <Link to="/chat"><ListItemText primary="Chat" /></Link>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <FitnessCenterIcon />
      </ListItemIcon>
      <Link to="/exercise"><ListItemText primary="Personal Health" /></Link>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <TimerIcon />
      </ListItemIcon>
      <Link to="/set-timer"><ListItemText primary="Timer" /></Link>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <EventIcon />
      </ListItemIcon>
      <Link to="/calendar"><ListItemText primary="Calendar" /></Link>
    </ListItem>
  </div>


  

);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Saved reports</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItem>
  </div>
);