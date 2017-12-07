const prompt = require("prompt-sync")();
const request = require("sync-request");

const url = process.argv[2] + '/super-chat';

var nombre = prompt("Escribe tu nombre: ");

while (chat !== "") {
  var chat = prompt(">>> ");
  var res = request('POST', url, {
    json: {
      name: nombre,
      message: chat
    }
  });
  var messages = JSON.parse(res.getBody('utf8'));
  console.log(messages);
}

console.log("Ready" + "🙌 ");
