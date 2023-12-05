import React, { useState } from "react";

// Companents
import OfficeDataTable from "../../companents/officesDataTable/OfficeDataTable.jsx";

// Columns
import { office_columns } from "../../data";

// Filter
import { office_filter } from "../../data";
import { office_filter_without_paginate } from "../../data";

// MUI
import AutoComplete from "../../companents/autoComplete/AutoComplete";

// CSS
import "./offices.scss";
import { Box } from "@mui/material";

function Offices() {
  const [officeFilterValue, setOfficeFilterValue] = useState([]);

  return (
    <div className="offices">
      <Box
        sx={{
          height: "100%",
          width: "99%",
          "& .css-t89xny-MuiDataGrid-columnHeaderTitle": {
            fontSize: "larger",
            color: "black",
          },
        }}
      >
        <div className="dataGrid">
          <OfficeDataTable
            slug="offices"
            columns={office_columns}
            filter={office_filter}
            filterData={officeFilterValue}
          />
        </div>
      </Box>

      <div className="dataFilter">
        <div>
          <AutoComplete
            filter={office_filter_without_paginate}
            setfilterValue={setOfficeFilterValue}
            filterData={officeFilterValue}
          />
        </div>
      </div>
    </div>
  );
}

export default Offices;
