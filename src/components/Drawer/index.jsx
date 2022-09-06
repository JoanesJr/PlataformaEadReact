import React from "react";
import {
  Avatar,
  Divider,
  Drawer,
  Icon,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Box } from "@mui/system";
import { useNavigate } from "react-router";


const ListItemLink = ({to, icon, label}) => {
    const navigate = useNavigate();

    const handleCLick = () => {
        navigate(to);
        // onClick();
    }


    return (
        <ListItemButton onClick={handleCLick}>
        <ListItemIcon>
            <Icon>{icon}</Icon>
        </ListItemIcon>
        <ListItemText primary={label} />
        </ListItemButton>
    );
}

const DrawerMenu = () => {
  return (
    <div className="App">
      <Drawer variant="permanent">
        <Box
          width="100%"
          height="100%"
          display="flex"
          alignItems="center"
          flexDirection="column"
        >
          <Box
            width="100%"
            height="30%"
            display="flex"
            alignItems="center"
            justifyContent="center"
            // flexDireaction="column"
          >
            <Avatar
              sx={{ height: 125, width: 125 }}
              src="https://thumbs.dreamstime.com/b/male-avatar-icon-flat-style-male-user-icon-cartoon-man-avatar-hipster-vector-stock-91462914.jpg"
            ></Avatar>
          </Box>

          <Divider />

          <Box flex={1}>
            <List component="nav">
              <ListItemLink icon="movie" label="Aulas" to="/aulas" />
              <ListItemLink icon="school" label="Cursos" to="/cursos" />
              <ListItemLink icon="person" label="Usuários" to="/usuarios" />
            </List>
          </Box>
        </Box>
      </Drawer>
    </div>
  );
};

export default DrawerMenu;
