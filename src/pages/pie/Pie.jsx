import React from "react";

// MUI
import { Box } from "@mui/material";

// Companents
import FavoriteDataTable from "../../companents/favoriteDataTable/FavoriteDataTable";

// Columns
import { user_columns } from "../../data";

// CSS
import "./pie.scss";

function Pie(props) {
  return (
    <div className="pie">
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
          <FavoriteDataTable columns={user_columns} filter={props.filter} />
        </div>
      </Box>
    </div>
  );
}

export default Pie;
