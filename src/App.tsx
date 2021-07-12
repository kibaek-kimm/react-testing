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

import ClickCounterApp from "./click-counter/chanllenge/App"
import JottoApp from "./jotto-app/App"

const options = [
  {
    text: 'Select Chapter',
  },
  {
    text: 'Click Counter',
    link: "/click-counter"
  },
  {
    text: 'Jotto App',
    link: "/jotto-app"
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
            <Route path="/click-counter">
              <ClickCounterApp />
            </Route>
            <Route path="/jotto-app">
              <JottoApp />
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