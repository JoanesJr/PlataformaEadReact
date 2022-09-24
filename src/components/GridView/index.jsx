import React, {useEffect} from "react";
import api from "../../api/api";
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";
import { useState } from "react";
import { useGridRow } from "../../providers/GridContext";


const GridView = ({type}) => {

    const [list, setList] = useState([]);
    const [pageSize, setPageSize] = useState(5);
    const {setSelectedRow} = useGridRow();

    const handleRow = event => {
      setSelectedRow(event.id)
    }

    let makeList = [];

    // set data values
    switch (type) {
      case "course":
        list.map((value, key) => {
        let makeObj = {
          id: value.id,
          col2: value.name,
          col3: value.description
        };

          makeList.push(makeObj);
          });
          break;

      case "classroom":
        list.map((value, key) => {
        let makeObj = {
          id: value.id,
          col2: value.title,
          col3: value.description
        };

          makeList.push(makeObj);
          });
          break;
    
      case "user":
        list.map((value, key) => {
          let makeObj = {
            id: value.id,
            col2: `${value.firstName} ${value.lastName}`,
            col3: value.birth
          };

          makeList.push(makeObj);
          });
          break;
      }

      // =====================
    

    const rows: GridRowsProp = makeList;

    const columns: GridColDef[] = [
      {
        field: "id",
        headerName: "Id",
        width: 80,
        headerClassName: "super-app-theme--header",
        headerAlign: "center",
      },
      {
        field: "col2",
        headerName: "Nome",
        width: 200,
        headerClassName: "super-app-theme--header",
        headerAlign: "center",
      },
      {
        field: "col3",
        headerName: type=='course' || type=='classroom' ? "Descrição" : "Nascimento",
        width: 600,
        headerClassName: "super-app-theme--header",
        headerAlign: "center",
      },
    ];

    useEffect(() => {
        const get = () => {
            let all = [];
            api
              .get(type)
              .then(({ data }) => {
                data.map((value) => {
                  all.push(value);
                });
                setList(all);
              })
              .catch((err) => {
                console.log(err);
              });
        }

        get();
    }, [list]);

   return (
     <div style={{ height: "90%", width: "100%" }}>
       <DataGrid
         pageSize={pageSize}
         onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
         rows={rows}
         columns={columns}
         rowsPerPageOptions={[5, 10, 15, 20, 50, 100]}
         pagination
         onRowClick={handleRow}
       />
     </div>
   );
}


export default GridView;