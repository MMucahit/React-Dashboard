export default class DeleteHistory {
  delete_history(employee_id) {
    return fetch(
      "http://127.0.0.1:8000/delete_history?employee_id=".concat(employee_id),
      { method: "POST" }
    ).then((response) => response.json());
  }
}
