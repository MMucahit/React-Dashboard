import Cookies from "js-cookie";

export default class AddHistory {
  add_history(employee_id) {
    const cookie = Cookies.get("Token");

    return fetch(
      "https://fastapi-app-async-ftqcb6wz6q-uc.a.run.app/add_history?employee_id=".concat(
        employee_id
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
