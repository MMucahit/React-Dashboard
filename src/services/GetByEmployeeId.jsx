import axios from "axios";

export default class GetByEmployeeId {
  get_by_employee_id(employee_id) {
    return axios.get(
      "http://127.0.0.1:8000/get_by_employee_id/".concat(employee_id)
    );
  }
}
