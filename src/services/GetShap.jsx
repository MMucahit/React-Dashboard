import axios from "axios";

export default class GetShap {
  get_shap(employee_id) {
    return axios.get(
      "http://127.0.0.1:8000/get_user_shap/".concat(employee_id)
    );
  }
}
