
const userService = require('../services/userService.js');
const { send } = require('../messagesender');

module.exports = {
  
  profile: async (req, res) => {
    try {
      const data = await userService.getById(req.user._id);
      res.status(200).json({
        status: 'success',
        data,
      });
    } catch (err) {
      res.status(400).json({
        status: 'fail',
        message: err.message,
      });
    }
  },

  sendOTP: async (req, res) => {
    try {
      const { phone } = req.body;
      const data = await userService.getByPhone(phone);
      if (data) {
        // Generate a random 4 digit number
        const otp = Math.floor(1000 + Math.random() * 9000);

        // Set OTP Expiry Time to 30 minutes
        const expiryTime = new Date();
        expiryTime.setMinutes(expiryTime.getMinutes() + 30);

        // Update User with OTP and Expiry Time
        const updatedUser = await userService.updateByPhone(phone, {
          otp,
          otpExpiry: expiryTime,
          otpExpired: false,
        });

        // Send OTP to User
        await send(phone, `Your OTP is ${otp}. It will expire in 30 minutes.`);
        res.status(200).json({
          status: 'success',
          data: updatedUser,
        });
      } else {
        res.status(404).json({
          status: 'fail',
          message: 'User not found',
        });
      }
    } catch (err) {
      res.status(400).json({
        status: 'fail',
        message: err.message,
      });
    }
  },

  verifyOTP: async (req, res) => {
    try {
      const { phone, otp } = req.body;
      const data = await userService.getByPhone(phone);
      if (data) {
        if (data.otp === otp) {
          if (data.otpExpired || data.otpExpiry < new Date()) {
            const updatedUser = await userService.updateByPhone(phone, {
              otp: null,
              otpExpiry: null,
              otpExpired: true,
            });
            res.status(400).json({
              status: 'fail',
              message: 'OTP Expired',
            });
          } else {
            const updatedUser = await userService.updateByPhone(phone, {
              otp: null,
              otpExpiry: null,
              otpExpired: true,
            });
            res.status(200).json({
              status: 'success',
              data: updatedUser,
            });
          }
        } else {
          res.status(400).json({
            status: 'fail',
            message: 'Invalid OTP',
          });
        }
      } else {
        res.status(404).json({
          status: 'fail',
          message: 'User not found',
        });
      }
    } catch (err) {
      res.status(400).json({
        status: 'fail',
        message: err.message,
      });
    }
  },

};