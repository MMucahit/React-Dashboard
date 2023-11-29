export default class AddHistory {
  add_history(employee_id) {
    return fetch(
      "http://127.0.0.1:8000/add_history?employee_id=".concat(employee_id),
      { method: "POST" }
    );
  }
}
