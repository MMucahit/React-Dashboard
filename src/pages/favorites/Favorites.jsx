import React from "react";

// Companents
import FavoriteDataTable from "../../companents/favoriteDataTable/FavoriteDataTable";

// Columns
import { history_columns } from "../../data";

// Filter
import { history_filter } from "../../data";

// CSS
import "./favorites.scss";

function Favorites() {
  return (
    <div className="favorites">
      <div className="dataGrid">
        <FavoriteDataTable columns={history_columns} filter={history_filter} />
      </div>
    </div>
  );
}

export default Favorites;
