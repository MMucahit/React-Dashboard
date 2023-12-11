import Cookies from "js-cookie";

export default class DeleteHistory {
  delete_history(employee_id) {
    const cookie = Cookies.get("Token");

    const REACT_APP_API_URL = process.env.REACT_APP_API_URL;

    return fetch(
      REACT_APP_API_URL.concat(
        "delete_history?employee_id=".concat(employee_id)
      ),
      {
        method: "POST",
        headers: {
          Authorization: "Bearer ".concat(JSON.parse(cookie).access_token),
        },
      }
    );
  }
}
