import React, { useEffect, useState } from "react";

// MUI
import { Autocomplete, TextField } from "@mui/material";

// CSS
import "./autoComplete.scss";

function AutoComplete(props) {
  const [office, setOffice] = useState([]);

  const handleChange = async (event, newValue) => {
    props.setfilterValue(newValue);
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(props.filter());
      const json = await response.json();

      setOffice(json);
    };
    fetchData();
  }, [props]);

  return (
    <div className="autoComplete">
      <Autocomplete
        multiple
        isOptionEqualToValue={(option, value) =>
          option.office_name === value.office_name
        }
        onChange={handleChange}
        id="multiple-limit-tags"
        options={office}
        getOptionLabel={(option) => option.office_name}
        renderInput={(params) => (
          <TextField {...params} label="Search Office" placeholder="Offices" />
        )}
        sx={{ width: "300px" }}
      />
    </div>
  );
}

export default AutoComplete;
