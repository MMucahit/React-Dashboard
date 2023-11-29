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

function Users() {
  const [activePointFilterValue, setActivePointFilterValue] = useState("");
  const [gainPointFilterValue, setGainPointFilterValue] = useState("");

  return (
    <div className="users">
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
