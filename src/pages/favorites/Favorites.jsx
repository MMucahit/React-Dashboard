import React from "react";

// Companents
import FavoriteDataTable from "../../companents/favoriteDataTable/FavoriteDataTable";

// Columns
import { history_columns } from "../../data";

// Filter
import { history_filter } from "../../data";

// CSS
import "./favorites.scss";
import { Box } from "@mui/material";

function Favorites() {
  return (
    <div className="favorites">
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
          <FavoriteDataTable
            columns={history_columns}
            filter={history_filter}
          />
        </div>
      </Box>
    </div>
  );
}

export default Favorites;
