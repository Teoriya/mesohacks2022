const client = require("../index.js")
const {send} = require("../messagesender")
const userSchema = require("../schemas/userSchema")

const func = ({from,buttonId})=>{
  if(buttonId=="adminContact"){send(from,"https://wa.me/919871359617?text=I'm%20interested%20in%20Managify%20Beta \n\nClick on this link to get in touch with our app admin :)")
                              }
}
client.on("buttonInteraction",func)