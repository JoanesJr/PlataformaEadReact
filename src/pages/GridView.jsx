import React, {useState} from "react";
import DrawerMenu from "../components/Drawer";
import { Box } from "@mui/system";
import GridView from "../components/GridView";
import { Button, Icon, ButtonGroup } from "@mui/material";
import { useNavigate } from "react-router";
import ModalPage from "../components/ModalPage";
import RegisterForm from "../components/RegisterForm";
import CourseForm from "../components/CourseForm";
import RegisterClassRoom from "../components/RegisterClassRoom";
import { useGridRow } from "../providers/GridContext";
import ConfirmDelete from "../components/ConfirmDelete";

const ButtonGrid = ({label, icon, to, onClick}) => {
  const navigate = useNavigate();

  return (
    <Button margin={1} onClick={() => navigate(to)} onClick={() => onClick()}>
      <Icon>{icon}</Icon>{label}
    </Button>
  );
}

const GridViewScreen = ({screen}) => {
  const { selectedRow } = useGridRow();
  const [modalIsOpenEdit, setIsOpenEdit] = useState(false);
  const [modalIsOpenDelete, setIsOpenDelete] = useState(false);
  const [modalIsOpenNew, setIsOpenNew] = useState(false);
  const handleOpenModal = (type) => {
    type == "edit" && setIsOpenEdit(true);
    type == "delete" && setIsOpenDelete(true);
    type == "new" && setIsOpenNew(true);
  };

  const handleCloseModal = (type) => {
    type == "edit" && setIsOpenEdit(false);
    type == "delete" && setIsOpenDelete(false);
    type == "new" && setIsOpenNew(false);
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

  const customStylesDelete = {
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
                onClick={(e) => handleOpenModal("edit")}
              />
              <ButtonGrid
                label="EXCLUIR"
                icon="clear"
                to=""
                onClick={(e) => handleOpenModal("delete")}
              />
              <ButtonGrid label="VISUALIZAR" icon="visibility" to="" />
              <ButtonGrid
                label="NOVO"
                icon="add"
                onClick={(e) => handleOpenModal("new")}
              />
            </ButtonGroup>
          </Box>
          <GridView type={screen} />
        </Box>

        {/* MODALS */}
        {/* EDIT */}
        <ModalPage
          open={modalIsOpenEdit}
          close={() => handleCloseModal("edit")}
          styleModal={customStyles}
          labelClose="Cancelar"
        >
          {screen == "user" && (
            <RegisterForm id={selectedRow} edit={true} labelButton="Editar" />
          )}
          {screen == "course" && (
            <CourseForm id={selectedRow} edit={true} labelButton="Editar" />
          )}
          {screen == "classroom" && (
            <RegisterClassRoom
              id={selectedRow}
              edit={true}
              labelButton="Editar"
            />
          )}
        </ModalPage>

        {/* NEW */}
        <ModalPage
          open={modalIsOpenNew}
          close={() => handleCloseModal("new")}
          styleModal={customStyles}
          labelClose="Cancelar"
        >
          {screen == "user" && (
            <RegisterForm id={undefined} edit={false} labelButton="Adicionar" />
          )}
          {screen == "course" && (
            <CourseForm id={undefined} edit={false} labelButton="Adicionar" />
          )}
          {screen == "classroom" && (
            <RegisterClassRoom
              id={undefined}
              edit={false}
              labelButton="Adicionar"
            />
          )}
        </ModalPage>

        {/* CONFIRMED DELETE */}
        <ModalPage
          open={modalIsOpenDelete}
          close={() => handleCloseModal("delete")}
          styleModal={customStylesDelete}
          labelClose="Cancelar"
        >
          <ConfirmDelete id={selectedRow} url={screen} />
        </ModalPage>
      </Box>
    </div>
  );
};

export default GridViewScreen;
