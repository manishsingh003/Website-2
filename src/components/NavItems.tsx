import * as React from 'react';
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import HomeIcon from '@material-ui/icons/Home';
import ImportantDevicesIcon from '@material-ui/icons/ImportantDevices'
import InfoIcon from '@material-ui/icons/Info';
import MailIcon from '@material-ui/icons/Mail';

const CustomLink = styled(Link)`
  text-decoration: none;
`

const NavItems = (
  <div>
    <CustomLink to="/">
      <ListItem button={true}>
        <ListItemIcon>
            <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </ListItem>
    </CustomLink>
    <CustomLink to="/material-generator">
      <ListItem button={true}>
        <ListItemIcon>
          <ImportantDevicesIcon />
        </ListItemIcon>
        <ListItemText primary="Material Generator" />
      </ListItem>
    </CustomLink>
    <CustomLink to="/contact"> 
      <ListItem button={true}>
        <ListItemIcon>
          <MailIcon />
        </ListItemIcon>
        <ListItemText primary="Contact Us" />
      </ListItem>
    </CustomLink>
    <CustomLink to="/about-us">
      <ListItem button={true}>
        <ListItemIcon>
          <InfoIcon />
        </ListItemIcon>
        <ListItemText primary="About Us" />
      </ListItem>
    </CustomLink>
  </div>
);

export default NavItems;