import Modal from "react-modal";
import { Box } from "@mui/system";
import { Button, Icon } from "@mui/material";

Modal.setAppElement("#root");

const ModalPage = ({ children, open, close, styleModal, labelClose, labelConfirmed }) => {
  return (
    <Modal isOpen={open} onRequestClose={close} style={styleModal}>
      {children}

      <Box display="flex" alignItems="center" justifyContent="flex-end">
        {labelConfirmed && (
          <Box>
            <Button variant="contained" color="success">
              {labelConfirmed}
            </Button>
          </Box>
        )}
        <Box>
          <Button variant="contained" color="error" onClick={() => close()}>
            {labelClose}
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default ModalPage;