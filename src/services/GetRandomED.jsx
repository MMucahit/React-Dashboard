import axios from "axios";

export default class GetRandomED {
  get_random_ED(employee_id) {
    return axios.get("http://127.0.0.1:8000/get_random_ED");
  }
}
