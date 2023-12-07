import React from "react";
import { useParams } from "react-router-dom";

// Companents
import UserDataTable from "../../companents/usersDataTable/UserDataTable.jsx";

// Filter
import { office_user_filter } from "../../data";

// Columns
import { user_columns } from "../../data";
import { user_columns_mobile } from "../../data";

// MUI
import { Box } from "@mui/material";

// CSS
import "./officeUser.scss";

function OfficeUser() {
  const { office_name } = useParams();

  return (
    <div className="users">
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
          <UserDataTable
            slug="users"
            columns={{ user: user_columns, user_mobile: user_columns_mobile }}
            filter={office_user_filter}
            filterData={{
              office_name: office_name,
            }}
          />
        </div>
      </Box>
    </div>
  );
}

export default OfficeUser;
