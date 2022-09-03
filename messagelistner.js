const { mediaFetcher, btn } = require("./utils/whtsapapiutils")
const client = require("./index")

module.exports = async (req, res) => {
  // Parse the request body from the POST
  let body = req.body;
  if (req.body.entry[0].changes[0].value.statuses) { //status updates
    res.sendStatus(200);
    return;
  }
  let dataType = req.body.entry[0].changes[0].value.messages[0].type
  if (dataType == "image" || dataType == "video" || dataType == "document") {
    //document
    mediaId = (req.body.entry[0].changes[0].value.messages[0][dataType].id)
    await mediaFetcher(mediaId)
    let raw = req.body.entry[0].changes[0].value
    let caption = req.body.entry[0].changes[0].value.messages[0][dataType].caption
    let from = req.body.entry[0].changes[0].value.messages[0].from
    client.emit('messageDoccument', { raw, mediaId, dataType, caption, from })
    res.sendStatus(200);
    return;
  }

  if (dataType == "interactive") {
    //interactive mess
    let raw = req.body.entry[0].changes[0].value
    let from = req.body.entry[0].changes[0].value.messages[0].from

    if (raw.messages[0].interactive.type == "button_reply") {
      buttonId = raw.messages[0].interactive.button_reply.id //to optimize later , as an original sendable object across code
      buttonTitle = raw.messages[0].interactive.button_reply.title
      { client.emit('buttonInteraction', { raw, buttonId, buttonTitle, dataType, from }) }
    }
    else if (raw.messages[0].interactive.type == "list_reply") {
      listId = raw.messages[0].interactive.list_reply.id
      listTitle = raw.messages[0].interactive.list_reply.title
      listDescription = raw.messages[0].interactive.list_reply.title
      client.emit('listInteraction', { raw, listId, listTitle, listDescription, dataType, from })
    }
    res.sendStatus(200);
    return;
  }

  if (dataType == "text") {
    //text

    let raw = req.body.entry[0].changes[0].value
    let content = req.body.entry[0].changes[0].value.messages[0].text.body
    let timestamp = req.body.entry[0].changes[0].value.messages[0].timestamp
    let from = req.body.entry[0].changes[0].value.messages[0].from

    client.emit('messageText', { raw, content, timestamp, dataType, from })
    res.sendStatus(200);
    return;
  }
  res.sendStatus(404);
}