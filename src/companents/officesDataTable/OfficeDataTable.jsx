import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// MUI Data Grid
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

// MUI Alert
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

// Cookie
import { useCookies } from "react-cookie";

// CSS
import "./officeDataTable.scss";

function OfficeDataTable(props) {
  const [isLoading, setIsLoading] = useState(false);
  const [row, setRow] = useState([]);
  const [totalRow, setTotalRow] = useState(0);
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);

  const [fetch_error_open, fetchErrorSetOpen] = useState(false);

  const [cookie] = useCookies(["Token"]);

  const fetch_error_handleClick = () => {
    fetchErrorSetOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    fetchErrorSetOpen(false);
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const response = await fetch(props.filter(props, page, pageSize), {
          headers: {
            Authorization: "Bearer ".concat(cookie.Token.access_token),
          },
        });
        const json = await response.json();

        fetchErrorSetOpen(false);

        if (!response.ok) {
          // Eğer response.ok false ise, bir hata oluşmuştur.
          fetch_error_handleClick();
        }
        setRow(json.items);
        setTotalRow(json.total);
      } catch (error) {
        fetch_error_handleClick();
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [page, pageSize, props]);

  const actionColumn = {
    field: "action",
    headerName: "Action",
    width: 150,
    renderCell: (params) => {
      return (
        <div className="action">
          <Link to={`/${props.slug}/${params.row.office_name}`}>
            <img src="/view.svg" alt=""></img>
          </Link>
        </div>
      );
    },
  };

  return (
    <div className="dataTable">
      <DataGrid
        autoHeight
        loading={isLoading}
        className="dataGrid"
        rows={row}
        columns={[...props.columns, actionColumn]}
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

      <Snackbar
        open={fetch_error_open}
        autoHideDuration={10000}
        onClose={fetch_error_handleClick}
      >
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          Something Wrong While Fetching Data!
        </Alert>
      </Snackbar>
    </div>
  );
}

export default OfficeDataTable;
