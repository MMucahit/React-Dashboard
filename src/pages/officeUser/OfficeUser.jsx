import React from "react";

// Companents
import UserDataTable from "../../companents/usersDataTable/UserDataTable.jsx";

// Filter
import { office_user_filter } from "../../data";

// Columns
import { user_columns } from "../../data";

// CSS
import "./officeUser.scss";
import { useParams } from "react-router-dom";

function OfficeUser() {
  const { office_name } = useParams();

  return (
    <div className="users">
      <div className="dataGrid">
        <UserDataTable
          slug="users"
          columns={user_columns}
          filter={office_user_filter}
          filterData={{
            office_name: office_name,
          }}
        />
      </div>
    </div>
  );
}

export default OfficeUser;
