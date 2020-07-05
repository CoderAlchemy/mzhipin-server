const { mongoose } = require('./db_conn')

const userSchema = mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  type: { type: String, required: true },
  header: { type: String },
  post: { type: String },
  info: { type: String },
  company: { type: String },
  salary: { type: String }
})

const UserModel = mongoose.model('user', userSchema)

exports.UserModel = UserModel