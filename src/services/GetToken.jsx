export default class GetToken {
  get_token(username, password) {
    return fetch("https://fastapi-app-async-ftqcb6wz6q-uc.a.run.app/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `grant_type=&username=${username}&password=${password}&scope=&client_id=&client_secret=`,
    }).then((response) => response.json());
  }
}
