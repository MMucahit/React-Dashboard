export default class GetToken {
  get_token(username, password) {
    const response = fetch("http://127.0.0.1:8000/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `grant_type=&username=${username}&password=${password}&scope=&client_id=&client_secret=`,
    }).then((response) => response.json());

    return response;
  }
}
