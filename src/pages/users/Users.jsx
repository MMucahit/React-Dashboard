import React, { useState } from "react";

// Companents
import DataTable from "../../companents/dataTable/DataTable";
import SelectBox from "../../companents/SelectBox/SelectBox";

// Columns
import { user_columns } from "../../data";

// Filter
import { user_filter } from "../../data";

// CSS
import "./users.scss";

function Users() {
  const [activePointFilterValue, setActivePointFilterValue] = useState("None");
  const [gainPointFilterValue, setGainPointFilterValue] = useState("None");

  return (
    <div className="users">
      <div className="dataGrid">
        <DataTable
          filterData={{
            activePoint: activePointFilterValue,
            gainPoint: gainPointFilterValue,
          }}
          columns={user_columns}
          filter={user_filter}
        />
      </div>
      <div className="dataFilter">
        <h2>Filter by Active Point</h2>
        <SelectBox
          filterValue={activePointFilterValue}
          setFilterValue={setActivePointFilterValue}
          filterData={[
            { data: "None" },
            { data: "A" },
            { data: "B" },
            { data: "C" },
            { data: "D" },
            { data: "E" },
          ]}
          name={"activePoint"}
        />
        <h2>Filter by Gain Point</h2>
        <SelectBox
          filterValue={gainPointFilterValue}
          setFilterValue={setGainPointFilterValue}
          filterData={[
            { data: "None" },
            { data: "A" },
            { data: "B" },
            { data: "C" },
          ]}
          name={"gainPoint"}
        />
      </div>
    </div>
  );
}

export default Users;
