import React, { useEffect, useState } from "react";

// MUI
import { Autocomplete, TextField } from "@mui/material";

// MUI Alert
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

// Cookie
import { useCookies } from "react-cookie";

// CSS
import "./autoComplete.scss";

function AutoComplete(props) {
  const [office, setOffice] = useState([]);

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

  const handleChange = async (event, newValue) => {
    props.setfilterValue(newValue);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(props.filter(), {
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
        setOffice(json);
      } catch (error) {
        fetch_error_handleClick();
      }
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
      <Snackbar
        open={fetch_error_open}
        autoHideDuration={10000}
        onClose={fetch_error_handleClick}
      >
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          Something Happened While Fetching Office!
        </Alert>
      </Snackbar>
    </div>
  );
}

export default AutoComplete;
