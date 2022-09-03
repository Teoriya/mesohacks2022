const tag = require('../models/tag.model');

module.exports = {

  // Getting tag by Phone
  getByPhone: async (phone) => {
    try {
      const data = await tag.findOne({ phone });
      return data;
    } catch (err) {
      throw err;
    }
  },

  //Getting tag by Phone and Subject
  getByPhoneAndSub: async (phone, subject) => {
    try {
      const data = await tag.find({ phone, subject });
      return data;
    } catch (err) {
      throw err;
    }
  },

  // Updating tag by Phone
  updateByPhone: async (phone, body) => {
    try {
      const data = await tag.findOneAndUpdate({ phone }, body, { new: true });
      return data;
    } catch (err) {
      throw err;
    }
  },

  // Creating tag
  create: async (body) => {
    try {
      const data = await tag.create(body);
      return data;
    } catch (err) {
      throw err;
    }
  },

  // Deleting tag by Name
  deleteByName: async (name) => {
    try {
      const data = await tag.findOneAndDelete({ name });
      return data;
    } catch (err) {
      throw err;
    }
  },
};
