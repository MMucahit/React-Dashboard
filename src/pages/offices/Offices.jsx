import React, { useState } from "react";

// Companents
import OfficeDataTable from "../../companents/officesDataTable/OfficeDataTable.jsx";

// Columns
import { office_columns } from "../../data";

// Filter
import { office_filter } from "../../data";
import { office_percentage_filter } from "../../data";
import { office_filter_without_paginate } from "../../data";

// MUI
import AutoComplete from "../../companents/autoComplete/AutoComplete";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

// CSS
import "./offices.scss";
import { Box } from "@mui/material";

function Offices() {
  const [officeFilterValue, setOfficeFilterValue] = useState([]);
  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const handleFilter = () => {
    if (checked) {
      return office_percentage_filter;
    }

    return office_filter;
  };

  const handleType = () => {
    if (checked) {
      return "Percentage";
    }

    return "Number";
  };

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
            filter={handleFilter()}
            filterData={officeFilterValue}
          />
        </div>
      </Box>

      <div className="dataFilter">
        <div>
          <div className="dataSwitch">
            <FormControlLabel
              control={
                <Switch
                  checked={checked}
                  onChange={handleChange}
                  name="Percentage"
                />
              }
              label={handleType()}
            />
          </div>

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
