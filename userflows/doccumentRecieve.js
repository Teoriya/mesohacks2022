const client = require("../index.js")
const { sendInteractiveList } = require("../messagesender")
const { btn } = require("../utils/whtsapapiutils")
const userService = require("../services/userService.js");
const tagService = require("../services/tagService.js");

const funcc = async ({ from }) => {
  const result = await userService.getByPhone(from);
  let sections = [];
  await Promise.all(result.subjects.map(async subject => {
    const tags = await tagService.getByPhoneAndSub(from, subject)
    let rows = [];
    tags.forEach((tag) => {
      if (tag.deadline) {
        rows.push({ id: tag.name, title: tag.name, description: tag.deadline })
      }
      else {
        rows.push({ id: tag.name, title: tag.name })
      }
      rows.push({id:"createTag",title:"Create new Tag"})
    })
    let section = {
      title: subject,
      rows
    }
    sections.push(section)
  }))

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

// await Promise.all(coOrgIds.map(async (id) => {
//   if (id === orgId) {
//     coOrgIdsSameAsOrgId.push(id);
//   }
//   const isExists = await organizationService.checkExistsById(id, true);
//   if (!isExists || id === orgId) {
//     invalidCoorganizationIds.push(id);
//   }
// }));