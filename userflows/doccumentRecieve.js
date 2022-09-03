const client = require("../index.js")
const { sendInteractiveList } = require("../messagesender")
const { btn } = require("../utils/whtsapapiutils")
const userService = require("../services/userService.js");
const tagService = require("../services/tagService.js");

const funcc = async ({ from }) => {
  const result = await userService.getByPhone(from);
  let sections = [];
  result.subjects.forEach(subject => {
    const tags = await tagService.getByPhoneAndSub(from, subject)
    let section = {
      title:
      
    }




  })

  if (result) { sendInteractiveList(from, sections, "Select", "Please select what is this resource related to.", "New Resource", "Managify") }
}

client.on("messageDoccument", funcc)


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