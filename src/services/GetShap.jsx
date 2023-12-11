import Cookies from "js-cookie";

export default class GetShap {
  get_shap(employee_id) {
    const cookie = Cookies.get("Token");

    const REACT_APP_API_URL = process.env.REACT_APP_API_URL;

    return fetch(
      REACT_APP_API_URL.concat("get_user_shap/".concat(employee_id)),
      {
        method: "GET",
        headers: {
          Authorization: "Bearer ".concat(JSON.parse(cookie).access_token),
        },
      }
    ).then((response) => response.json());
  }
}
