import Cookies from "js-cookie";

export default class GetRandomED {
  get_random_ED() {
    const cookie = Cookies.get("Token");

    return fetch(
      "https://fastapi-app-async-ftqcb6wz6q-uc.a.run.app/get_random_ED",
      {
        method: "GET",
        headers: {
          Authorization: "Bearer ".concat(JSON.parse(cookie).access_token),
        },
      }
    ).then((response) => response.json());
  }
}
