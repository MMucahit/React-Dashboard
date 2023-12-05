import React, { useState } from "react";

// Companents
import UserDataTable from "../../companents/usersDataTable/UserDataTable.jsx";
import SelectBox from "../../companents/SelectBox/SelectBox";

// Filter
import { user_filter } from "../../data";

// Columns
import { user_columns } from "../../data";

// CSS
import "./users.scss";
import { Box } from "@mui/material";

function Users() {
  const [activePointFilterValue, setActivePointFilterValue] = useState("");
  const [gainPointFilterValue, setGainPointFilterValue] = useState("");

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
            columns={user_columns}
            filter={user_filter}
            filterData={{
              activePoint: activePointFilterValue,
              gainPoint: gainPointFilterValue,
            }}
          />
        </div>
      </Box>

      <div className="dataFilter">
        <SelectBox
          filterValue={activePointFilterValue}
          setFilterValue={setActivePointFilterValue}
          filterData={[
            { data: "A" },
            { data: "B" },
            { data: "C" },
            { data: "D" },
            { data: "E" },
          ]}
          label={"Search Active Point"}
          name={"activePoint"}
        />
        <SelectBox
          filterValue={gainPointFilterValue}
          setFilterValue={setGainPointFilterValue}
          filterData={[{ data: "A" }, { data: "B" }, { data: "C" }]}
          label={"Search Gain Point"}
          name={"gainPoint"}
        />
      </div>
    </div>
  );
}

export default Users;
