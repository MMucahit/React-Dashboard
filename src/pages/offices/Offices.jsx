import React from "react";

// Companents
import DataTable from "../../companents/dataTable/DataTable";

// Columns
import { office_columns } from "../../data";

// Filter
import { office_filter } from "../../data";

// CSS
import "./offices.scss";

function Offices() {
  return (
    <div className="offices">
      <div className="dataGrid">
        <DataTable columns={office_columns} filter={office_filter} />
      </div>
    </div>
  );
}

export default Offices;
