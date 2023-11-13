import React, { useEffect, useState } from "react";

// MUI Data Grid
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

// CSS
import "./dataTable.scss";

function DataTable(props) {
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

      setIsLoading(false);
      setRow(json.items);
      setTotalRow(json.total);
    };
    fetchData();
  }, [page, pageSize, props]);

  return (
    <div className="dataTable">
      <DataGrid
        className="dataGrid"
        rows={row}
        columns={props.columns}
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

export default DataTable;
