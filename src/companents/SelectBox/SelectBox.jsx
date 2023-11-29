import React from "react";

// MUI
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";

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
          <InputLabel id="demo-simple-select-label">{props.label}</InputLabel>
          <Select
            name={props.name}
            labelId={props.id}
            value={props.filterValue}
            onChange={handleChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
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
