import Cookies from "js-cookie";

export default class GetByEmployeeId {
  get_by_employee_id(employee_id) {
    const cookie = Cookies.get("Token");

    return fetch(
      "https://fastapi-app-async-ftqcb6wz6q-uc.a.run.app/get_by_employee_id/".concat(
        employee_id
      ),
      {
        method: "GET",
        headers: {
          Authorization: "Bearer ".concat(JSON.parse(cookie).access_token),
        },
      }
    ).then((response) => response.json());
  }
}
