import { useState } from "react";
import { Box } from "@mui/system";
import { Button, Alert } from "@mui/material";
import api from "../../api/api";

const ConfirmDelete = ({ id, url }) => {
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);
    const del = () => {
        api.delete(`${url}/${id}`).then(({data}) => {
            setError(null);
            setSuccess(data);
        }).catch(({data}) => {
            setError(data);
            setSuccess(null);
        });
    }


  return (
    <Box
      height={300}
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <Box displau="flex" flexDirection="column" position="relative" top="-40px">
        {error && <Alert severity="error">{error}</Alert>}

        {success && <Alert severity="success">{success}</Alert>}
      </Box>
      <Alert severity="error">
        ESSA AÇÃO É IRREVERSIVEL, TEM CERTEZA QUE DESEJA EXCLUIR?{" "}
      </Alert>
      <Box
        position="relative"
        top="145px"
        display="flex"
        width={300}
        justifyContent="flex-end"
        marginRight={3}
      >
        <Button variant="contained" color="success" onClick={del}>
          Excluir
        </Button>
      </Box>
    </Box>
  );
};

export default ConfirmDelete;
