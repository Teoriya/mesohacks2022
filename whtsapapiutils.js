axios = require("axios").default,
  apiUrl = "https://graph.facebook.com/v13.0/"
const accessToken = process.env.ACCESS_TOKEN;
const fs = require('fs');

module.exports = {

  mediaFetcher: async (id) => {
    resp = await axios({
      method: "GET", // Required, HTTP method, a string, e.g. POST, GET
      url: apiUrl + id,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + accessToken,
      },
    });
    // console.log(resp.data)
    outputMedia = await axios({
      method: "GET", // Required, HTTP method, a string, e.g. POST, GET
      url: resp.data.url,
      responseType: 'stream',
      headers: {
        Authorization: "Bearer " + accessToken,
      },
    }).then(
      response =>
        new Promise((resolve, reject) => {
          response.data
            .pipe(fs.createWriteStream(id + "." + resp.data.mime_type.split("/")[1]))
            .on('finish', () => resolve())
            .on('error', e => reject(e));
        }),
    );
  },

  btn: (id,title)=>{ return {
                  type: "reply",
                  reply: {
                    id,
                    title
                  }
                }}
/*              sections: [
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
  */
}