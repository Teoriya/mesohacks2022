const client = require("../index.js")
const { sendInteractive } = require("../messagesender")
const { btn } = require("../utils/whtsapapiutils")
const userService = require("../services/userService.js");
const funcc = async ({ from }) => {
  const result = await userService.getByPhone(from);
  if (!result) { sendInteractive(from, [btn("adminContact", "Contact Admin")], "Oops :(\n\nWe are in beta right now. Please contact app admins to get registered in our Beta Program.", "Hello New User", "Managify") }
}


client.on("messageText", funcc)
client.on("messageDoccument", funcc)
