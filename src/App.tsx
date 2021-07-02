import React, { useMemo } from "react";
import {
  Switch,
  Route,
  useHistory,
} from "react-router-dom";
import CssBaseline from '@material-ui/core/CssBaseline';
import { 
  Typography, 
  Container, Box,
  MenuItem,
  Menu,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";

import AppChapter1 from "../src/chapter1/chanllenge/App"
// import AppChapter2 from "../src/chapter2/"

const options = [
  {
    text: 'Select Chapter',
  },
  {
    text: 'Chapter1 - Counter',
    link: "/chapter1"
  },
  {
    text: 'Chapter2 - Jotto App',
    link: "/chapter2"
  }
];

export default function MainApp() {
  const history = useHistory();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedIndex, setSelectedIndex] = React.useState<number>();
  const appTitle = useMemo(() => {
    if (typeof selectedIndex === "number") {
      return options[selectedIndex].text;
    }

    return null;
  }, [selectedIndex])


  const handleClickListItem = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (event: any, index: number, link?: string) => {
      setSelectedIndex(index);
      setAnchorEl(null);
      if (link) {
        history.push(link)
      }
    }
  ;

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <CssBaseline />
      <Container maxWidth="md">
        <Box mt={5} mb={5} position="relative">
          <Typography variant="h3" gutterBottom>
            React Testing with Jest and Enzyme
          </Typography>
          <Box position="absolute" top={0} right={0}>
            <List component="nav" aria-label="Device settings">
              <ListItem
                button
                aria-haspopup="true"
                aria-controls="lock-menu"
                aria-label="Select chapters"
                onClick={handleClickListItem}
              >
                <ListItemText primary={!selectedIndex ? "Select chapter" : options[selectedIndex].text} />
              </ListItem>
            </List>
            <Menu
              id="lock-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              {options.map((option, index) => (
                <MenuItem
                  key={option.text}
                  disabled={index === 0}
                  selected={index === selectedIndex}
                  onClick={(event) => handleMenuItemClick(event, index, option.link)}
                >
                  {option.text}
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Box>

        <div className="app-wrapper">
          {appTitle && (
            <Box mb={4}>
              <Typography variant="h4" gutterBottom>
                {appTitle}
              </Typography>
            </Box>
          )}
          <Switch>
            <Route path="/chapter1">
              <AppChapter1 />
            </Route>
            <Route path="/chapter2">
            <div>2222</div>
            </Route>
            <Route path="/">
            <div>main</div>
            </Route>
          </Switch>
        </div>
        
      </Container>
    </>
  )
}