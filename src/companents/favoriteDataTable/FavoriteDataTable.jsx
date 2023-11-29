import React, { useEffect, useState } from "react";

// MUI Data Grid
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

// MUI Alert
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

// Services
import DeleteHistory from "../../services/DeleteHistory";

// CSS
import "./favoriteDataTable.scss";

function FavoriteDataTable(props) {
  const [isLoading, setIsLoading] = useState(false);
  const [row, setRow] = useState([]);
  const [totalRow, setTotalRow] = useState(0);
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);

  const [open, setOpen] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    const response = await fetch(props.filter(props, page, pageSize));
    const json = await response.json();

    setRow(json.items);
    setTotalRow(json.total);
    setIsLoading(false);
  };

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  useEffect(() => {
    fetchData();
  }, [page, pageSize, props]);

  const delete_history = async (employee_id) => {
    setIsLoading(true);

    let deleteHistory = new DeleteHistory();
    await deleteHistory.delete_history(employee_id);

    fetchData();
    handleClick();
  };

  const isCloseColumn = {
    field: "isClose",
    headerName: "Actif Ciro",
    width: 150,
    renderCell: (params) => {
      return (
        <div>
          {params.row.isClose !== 1 ? (
            <h2 style={{ color: "red" }}>{params.row.isClose}</h2>
          ) : (
            <h2 style={{ color: "green" }}>{params.row.isClose}</h2>
          )}
        </div>
      );
    },
  };

  const isNewColumn = {
    field: "isNew",
    headerName: "Yeni Danışman",
    width: 150,
    renderCell: (params) => {
      return (
        <div>
          {params.row.isNew !== 1 ? (
            <h2 style={{ color: "red" }}>{params.row.isNew}</h2>
          ) : (
            <h2 style={{ color: "green" }}>{params.row.isNew}</h2>
          )}
        </div>
      );
    },
  };

  const actionColumn = {
    field: "action",
    headerName: "Action",
    width: 150,
    renderCell: (params) => {
      return (
        <div className="action">
          <img
            onClick={() => delete_history(params.row.employee_id)}
            src="/delete.svg"
            alt=""
          ></img>
        </div>
      );
    },
  };

  return (
    <div className="dataTable">
      <DataGrid
        autoHeight
        sx={{
          "& .css-t89xny-MuiDataGrid-columnHeaderTitle": {
            fontSize: "larger",
            color: "black",
          },
        }}
        loading={isLoading}
        className="dataGrid"
        rows={row}
        columns={[...props.columns, isNewColumn, isCloseColumn, actionColumn]}
        rowCount={totalRow}
        paginationMode="server"
        initialState={{
          pagination: {
            paginationModel: {
              page: page,
              pageSize: pageSize,
            },
          },
        }}
        pageSizeOptions={[10, 15, 25, 50, 100]}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        disableEval
        onPaginationModelChange={(event) => {
          setPage(event.page);
          setPageSize(event.pageSize);
        }}
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 100 },
          },
        }}
      />
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          User Deleted!
        </Alert>
      </Snackbar>
    </div>
  );
}

export default FavoriteDataTable;
