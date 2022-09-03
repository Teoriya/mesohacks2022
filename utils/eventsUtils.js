const client = require("../index.js")

module.exports = {
  listenForOnce: (event, callback) => {//timeout to be implemented
    let callback2 = (...args) => {
      while (!callback(...args));
      client.removeListener(event, callback2)
    }
    client.on(event, callback2)
  }
}