var axios = require("axios");
var MockAdapter = require("axios-mock-adapter");

// This sets the mock adapter on the default instance
var mock = new MockAdapter(axios);

// Mock any GET request to /users
// arguments for reply are (status, data, headers)
mock.onGet("/converter/1").reply(200, {
  currency: { id: 1, PEN: 4.2, USD: 1 },
});


export default function request() {
    return axios.get("/converter/1").then(function (response) {
      return response.data
    });
}