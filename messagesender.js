const accessToken = process.env.ACCESS_TOKEN;
const apiURL = process.env.API_URL;

module.exports = {
  send = (to, content) => {
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
  sendIneractive = (to) => {
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
            text: "BUTTON_TEXT"
          },
          action: {
            buttons: [
              {
                type: "reply",
                reply: {
                  id: "UNIQUE_BUTTON_ID_1",
                  title: "BUTTON_TITLE_1"
                }
              },
              {
                type: "reply",
                reply: {
                  id: "UNIQUE_BUTTON_ID_2",
                  title: "BUTTON_TITLE_2"
                }
              }
            ]
          }
        }
      },
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + accessToken,
      },
    });
  },
  sendIneractiveList = (to) => {
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
      text: "HEADER_TEXT"
    },
    body: {
      text: "BODY_TEXT"
    },
    footer: {
      text: "FOOTER_TEXT"
    },
    action: {
      button: "BUTTON_TEXT",
      sections: [
        {
          title: "SECTION_1_TITLE",
          rows: [
            {
              id: "SECTION_1_ROW_1_ID",
              title: "SECTION_1_ROW_1_TITLE",
              description: "SECTION_1_ROW_1_DESCRIPTION"
            },
            {
              id: "SECTION_1_ROW_2_ID",
              title: "SECTION_1_ROW_2_TITLE",
              description: "SECTION_1_ROW_2_DESCRIPTION"
            }
          ]
        },
        {
          title: "SECTION_2_TITLE",
          rows: [
            {
              id: "SECTION_2_ROW_1_ID",
              title: "SECTION_2_ROW_1_TITLE",
              description: "SECTION_2_ROW_1_DESCRIPTION"
            },
            {
              id: "SECTION_2_ROW_2_ID",
              title: "SECTION_2_ROW_2_TITLE",
              description: "SECTION_2_ROW_2_DESCRIPTION"
            }
          ]
        }
      ]
    }
  }
}
,
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + accessToken,
    },
  });
};
}