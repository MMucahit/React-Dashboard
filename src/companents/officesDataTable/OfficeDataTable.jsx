import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// MUI Data Grid
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

// CSS
import "./officeDataTable.scss";

function OfficeDataTable(props) {
  const [isLoading, setIsLoading] = useState(false);
  const [row, setRow] = useState([]);
  const [totalRow, setTotalRow] = useState(0);
  const [page, setPage] = useState(0);
  const [pageSize, setPageSize] = useState(10);

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
        sx={{
          "& .css-t89xny-MuiDataGrid-columnHeaderTitle": {
            fontSize: "larger",
            color: "black",
          },
        }}
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
    </div>
  );
}

export default OfficeDataTable;
