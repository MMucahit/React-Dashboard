export default class GetToken {
  get_token(username, password) {
    const REACT_APP_API_URL = process.env.REACT_APP_API_URL;

    return fetch(REACT_APP_API_URL.concat("login"), {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `grant_type=&username=${username}&password=${password}&scope=&client_id=&client_secret=`,
    }).then((response) => response.json());
  }
}
