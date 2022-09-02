const {mediaFetcher,btn} = require("./whtsapapiutils")

module.exports = async(req, res) => {
  // Parse the request body from the POST
  let body = req.body;
  if (req.body.entry[0].changes[0].value.statuses) { //status updates
    res.sendStatus(200);
    return;
  }
  typeofdata = req.body.entry[0].changes[0].value.messages[0].type
  console.log(typeofdata)
  if(typeofdata == "image" || typeofdata == "video" || typeofdata == "document" ){
    //document
    mediaId = (req.body.entry[0].changes[0].value.messages[0][typeofdata].id)
    await mediaFetcher(mediaId)
  }
  
  if(typeofdata == "interactive")
  {
      //interactive message
    
  }

  console.log(JSON.stringify(req.body.entry[0].changes[0]))
  // Check the Incoming webhook message
  if (
    req.body.entry &&
    body.entry[0].changes &&
    body.entry[0].changes[0] &&
    body.entry[0].changes[0].value.messages &&
    body.entry[0].changes[0].value.messages[0]
  ) {
    res.sendStatus(200);
  }
  else
    res.sendStatus(404)
  // console.log(JSON.stringify(req.body, null, 2));
}