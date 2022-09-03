const user = require('../models/user.model');

module.exports = {

  // Getting User by ID
  getById: async (id) => {
    try{
      const data = await user.findById(id);
      return data;
    } catch (err) {
      throw err;
    }
  },

  // Getting User by Phone
  getByPhone: async (phone) => {
    try{
      const data = await user.findOne({ phone });
      return data;
    } catch (err) {
      throw err;
    }
  },
  
  // Updating User by ID
  updateById: async (id, body) => {
    try{
      const data = await user.findByIdAndUpdate(id, body, { new: true });
      return data;
    } catch (err) {
      throw err;
    }
  },

  // Updating User by Phone
  updateByPhone: async (phone, body) => {
    try{
      const data = await user.findOneAndUpdate({ phone }, body, { new: true });
      return data;
    } catch (err) {
      throw err;
    }
  },

  // Creating User
  create: async (body) => {
    try{
      const data = await user.create(body);
      return data;
    } catch (err) {
      throw err;
    }
  },

  // Deleting User by ID
  deleteById: async (id) => {
    try{
      const data = await user.findByIdAndDelete(id);
      return data;
    } catch (err) {
      throw err;
    }
  },

  // Deleting User by Phone
  deleteByPhone: async (phone) => {
    try{
      const data = await user.findOneAndDelete({ phone });
      return data;
    } catch (err) {
      throw err;
    }
  },
};
