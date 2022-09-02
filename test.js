const client = require("./index.js")

client.on("messageDoccument",(obj)=>console.log(obj.raw.messages[0]))
client.on("listInteraction",(obj)=>console.log(obj))
client.on("buttonInteraction",(obj)=>console.log(obj))
client.on("messageTxt",({raw,content,timestamp})=>console.log(timestamp))