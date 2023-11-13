import React from "react";

// MUI
import { Box, FormControl, MenuItem, Select } from "@mui/material";

// CSS
import "./selectBox.scss";

function SelectBox(props) {
  const handleChange = async (event) => {
    props.setFilterValue(event.target.value);
  };

  return (
    <div className="selectBox">
      <Box sx={{ minWidth: 250 }}>
        <FormControl fullWidth name={"form-control"}>
          <Select
            name={props.name}
            defaultValue="None"
            labelId={props.id}
            value={props.activePointFilterValue}
            onChange={handleChange}
          >
            {props.filterData.map((d, index) => (
              <MenuItem key={index} value={d.data}>
                {d.data}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
    </div>
  );
}

export default SelectBox;
