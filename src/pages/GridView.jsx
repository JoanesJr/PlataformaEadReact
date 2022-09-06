import React, {useState} from "react";
import DrawerMenu from "../components/Drawer";
import { Box } from "@mui/system";
import GridView from "../components/GridView";
import { Button, Icon, ButtonGroup } from "@mui/material";
import { useNavigate } from "react-router";
import ModalPage from "../components/ModalPage";
import RegisterForm from "../components/RegisterForm";
// import Modal from "react-modal";
import style from "../components/RegisterClassRoom/RegisterClassRoom.module.css";

// Modal.setAppElement("#root");

const ButtonGrid = ({label, icon, to, onClick}) => {
  const navigate = useNavigate();

  return (
    <Button margin={1} onClick={() => navigate(to)} onClick={() => onClick()}>
      <Icon>{icon}</Icon>{label}
    </Button>
  );
}

const GridViewScreen = ({screen}) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const handleOpenModel = () => {
    setIsOpen(true);
  };

  const handleCloseModel = () => {
    setIsOpen(false);
  };

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "rgb(62, 62, 77)",
    },
    overlay: {
      backgroundColor: "rgb(7, 7, 7)",
    },
  };


  return (
    <div className="App">
      <DrawerMenu style={{ marginLeft: "2px" }} />

      <Box
        width="90vw"
        height="100vh"
        display="flex"
        alignItems="center"
        flexDirection="column"
      >
        <Box flex={1} width="100%" marginLeft={39}>
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="flex-end"
            padding={3}
          >
            <ButtonGroup
              variant="contained"
              aria-label="outlined primary button group"
            >
              <ButtonGrid
                label="EDITAR"
                icon="edit"
                to=""
                onClick={(e) => handleOpenModel()}
              />
              <ButtonGrid label="EXCLUIR" icon="clear" to="" />
              <ButtonGrid label="VISUALIZAR" icon="visibility" to="" />
              <ButtonGrid label="NOVO" icon="add" to="/curso/criar" />
            </ButtonGroup>
          </Box>
          <GridView type={screen} />
        </Box>
        <ModalPage
          open={modalIsOpen}
          close={handleCloseModel}
          styleModal={customStyles}
          labelClose="Cancelar"
        >
          <RegisterForm />
        </ModalPage>
      </Box>
    </div>
  );
};

export default GridViewScreen;
