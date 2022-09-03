const client = require("../index.js")
const {sendInteractive} = require("../messagesender")
const userSchema = require("../schemas/userSchema")
const {btn} = require("../utils/whtsapapiutils")
const funcc = async ({from})=>{ 
  const result = await userSchema.findOne({phone:from})
  if(!result){sendInteractive(from,[btn("adminContact","Contact Admin")],"Oops :(\n\nWe are in beta right now. Please contact app admins to get registered in our Beta Program.","Hello New User","Managify")}
}


client.on("messageText",funcc)
client.on("messageDoccument",funcc)
//https://wa.me/1XXXXXXXXXX?text=I'm%20interested%20in%20your%20Managify%20Beta