const API_BASE_ADDRESS = "http://localhost:3000";

export default class Api {
  static getMobiles() {
    const uri = API_BASE_ADDRESS + "/mobiles";
    return fetch(uri, {
      method: "GET",
    });
  }
  static getMobile(id) {
    const uri = `${API_BASE_ADDRESS}/mobiles/${id}`;
    console.log(uri);
    return fetch(uri, {
      method: "GET",
    });
  }
  static getUser(email,password) {
    const uri = `${API_BASE_ADDRESS}/user?email=${email}&password=${password}`;
    console.log(uri);
    return fetch(uri, {
      method: "GET",
    });
  }
 static getMobilesOnSearch(query){
   const uri = `${API_BASE_ADDRESS}/mobiles?q=${query}`;
   console.log(uri);
   return fetch(uri, {
    method: "GET",
  });
 }
}
