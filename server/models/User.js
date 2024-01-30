const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Must match an email address!'],
  },
  password: {
    type: String,
    required: true,
    unique: true,
    minlength: 5,
  },
  gamerTag: {
    type: String,
  },
  console: {
    type: String,
  },
  friends: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],
  rivals: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],
  profilePic: {
    type: String,
  },
  timePreferences: {
    type: Array,
  },
  gamePreferences: {
    type: String,
  },
  userbio: {
    type: String,
    maxlength: 300,
  },
  country: {
    type: String,
  }
});

// set up pre-save middleware to create password
userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
      const saltRounds = 10;
      this.password = await bcrypt.hash(this.password, saltRounds);
    }
  
    next();
  });
  
  // compare the incoming password with the hashed password
  userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
  };
  
  const User = model('User', userSchema);
  
  module.exports = User;
