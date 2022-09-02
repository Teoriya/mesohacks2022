const accessToken = process.env.ACCESS_TOKEN;
const apiURL = process.env.API_URL;
axios = require("axios").default,

  module.exports = {
    send: (to, content) => {
      axios({
        method: "POST", // Required, HTTP method, a string, e.g. POST, GET
        url: apiURL,
        data: {
          messaging_product: "whatsapp",
          to: to,
          text: { body: content },
        },
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + accessToken,
        },
      });
    },
    sendInteractive: (to,buttons,text,header,footer ) => {
      if(header && footer ){
      axios({
        method: "POST", // Required, HTTP method, a string, e.g. POST, GET
        url: apiURL,
        data: {
          messaging_product: "whatsapp",
          recipient_type: "individual",
          to: to,
          type: "interactive",
          interactive: {
            type: "button",
            header: {
              type: "text",
              text: header
            },
            body: {
              text
            },
            footer: {
              text: footer
            },
            action: {
              buttons
            }
          }
        },
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + accessToken,
        },
      })}
      else{
         axios({
        method: "POST", // Required, HTTP method, a string, e.g. POST, GET
        url: apiURL,
        data: {
          messaging_product: "whatsapp",
          recipient_type: "individual",
          to: to,
          type: "interactive",
          interactive: {
            type: "button",
            body: {
              text
            },
            action: {
              buttons
            }
          }
        },
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + accessToken,
        },
      })
        
      }
    },


    sendInteractiveList: (to,sections,buttonText,text,header,footer) => {
      if(header && footer ){
      axios({
        method: "POST", // Required, HTTP method, a string, e.g. POST, GET
        url: apiURL,
        data: {
          messaging_product: "whatsapp",
          recipient_type: "individual",
          to: to,
          type: "interactive",
          interactive: {
            type: "list",
            header: {
              type: "text",
              text: header
            },
            body: {
              text: text
            },
            footer: {
              text: footer
            },
            action: {
              button: buttonText,
              sections
            }
          }
        }
        ,
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + accessToken,
        },
      });
      }
      else{
axios({
        method: "POST", // Required, HTTP method, a string, e.g. POST, GET
        url: apiURL,
        data: {
          messaging_product: "whatsapp",
          recipient_type: "individual",
          to: to,
          type: "interactive",
          interactive: {
            type: "list",
            body: {
              text: text
            },
            action: {
              button: buttonText,
              sections
            }
          }
        }
        ,
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + accessToken,
        },
      });    
      }
    }  
  }