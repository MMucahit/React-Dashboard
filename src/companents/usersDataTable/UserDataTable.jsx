import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// MUI Data Grid
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

// MUI Alert
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

// Services
import AddHistory from "../../services/AddHistory";

// CSS
import "./userDataTable.scss";

function UserDataTable(props) {
  const [isLoading, setIsLoading] = useState(false);
  const [row, setRow] = useState([]);
  const [totalRow, setTotalRow] = useState(0);
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);

  const [error_open, errorSetOpen] = useState(false);
  const [success_open, successSetOpen] = useState(false);

  const success_handleClick = () => {
    successSetOpen(true);
  };

  const error_handleClick = () => {
    errorSetOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    successSetOpen(false);
    errorSetOpen(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const response = await fetch(props.filter(props, page, pageSize));
      const json = await response.json();

      setRow(json.items);
      setTotalRow(json.total);
      setIsLoading(false);
    };
    fetchData();
  }, [page, pageSize, props]);

  const add_history = async (employee_id) => {
    setIsLoading(true);

    let addHistory = new AddHistory();
    const response = await addHistory.add_history(employee_id);

    response.ok ? success_handleClick() : error_handleClick();

    setIsLoading(false);
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
          <Link to={`/${props.slug}/${params.row.employee_id}`}>
            <img src="/view.svg" alt=""></img>
          </Link>
          <div>
            <img
              onClick={() => add_history(params.row.employee_id)}
              src="/add.svg"
              alt=""
            ></img>
          </div>
        </div>
      );
    },
  };

  return (
    <div className="dataTable">
      <DataGrid
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
      <Snackbar open={error_open} autoHideDuration={1000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          User already in Favorite!
        </Alert>
      </Snackbar>
      <Snackbar
        open={success_open}
        autoHideDuration={1000}
        onClose={handleClose}
      >
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          User added to Favorite!
        </Alert>
      </Snackbar>
    </div>
  );
}

export default UserDataTable;