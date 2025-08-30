const User = require('../models/User');
const getUserProfile = async (req, res) => {

const user = await User.findById(req.user._id);

  if (user) {
    res.json({
      _id: user._id,
      username: user.username,
      email: user.email,
      role: user.role,
    });
  } else {
    res.status(404).json({ message: 'User not found' });
  }
};

const mockCheckout = async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    if (user.role === 'premium') {
      return res.status(400).json({ message: 'User is already a premium member' });
    }
    else{
      await user.updateOne({role:'premium'})
      await user.save();
    }

    res.json({
      message: 'Subscription upgraded successfully!',
      role: user.role,
    });
  } else {
    res.status(404).json({ message: 'User not found' });
  }
};

module.exports = { getUserProfile, mockCheckout };