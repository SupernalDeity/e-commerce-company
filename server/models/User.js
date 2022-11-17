const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
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
    minlength: 5,
  },
  evsrCart: {
    type: Boolean,
    default: false,
  },
  evsrOwned: {
    type: Boolean,
    default: false,
  },
  h2pCart: {
    type: Boolean,
    default: false,
  },
  h2pOwned: {
    type: Boolean,
    default: false,
  },
  how2Cart: {
    type: Boolean,
    default: false,
  },
  how2Owned: {
    type: Boolean,
    default: false,
  },
  wdbCart: {
    type: Boolean,
    default: false,
  },
  wdbOwned: {
    type: Boolean,
    default: false,
  },
  jsbCart: {
    type: Boolean,
    default: false,
  },
  jsbOwned: {
    type: Boolean,
    default: false,
  },
  js10Cart: {
    type: Boolean,
    default: false,
  },
  js10Owned: {
    type: Boolean,
    default: false,
  },
  hcfullCart: {
    type: Boolean,
    default: false,
  },
  hcfullOwned: {
    type: Boolean,
    default: false,
  },
  hc30Cart: {
    type: Boolean,
    default: false,
  },
  hc30Owned: {
    type: Boolean,
    default: false,
  },
  hcbCart: {
    type: Boolean,
    default: false,
  },
  hcbOwned: {
    type: Boolean,
    default: false,
  },
  pfullCart: {
    type: Boolean,
    default: false,
  },
  pfullOwned: {
    type: Boolean,
    default: false,
  },
  p30Cart: {
    type: Boolean,
    default: false,
  },
  p30Owned: {
    type: Boolean,
    default: false,
  },
  mdbbCart: {
    type: Boolean,
    default: false,
  },
  mdbbOwned: {
    type: Boolean,
    default: false,
  },
  efullCart: {
    type: Boolean,
    default: false,
  },
  efullOwned: {
    type: Boolean,
    default: false,
  },
  r60Cart: {
    type: Boolean,
    default: false,
  },
  r60Owned: {
    type: Boolean,
    default: false,
  },
  nfullCart: {
    type: Boolean,
    default: false,
  },
  nfullOwned: {
    type: Boolean,
    default: false,
  },
});

userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }
  next();
});

userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const User = model('User', userSchema);

module.exports = User;
