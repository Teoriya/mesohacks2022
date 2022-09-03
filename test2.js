const test = require("./utils/eventsUtils")

test.listenForOnce('messageTxt',(hello)=>{console.log(hello); return true;})