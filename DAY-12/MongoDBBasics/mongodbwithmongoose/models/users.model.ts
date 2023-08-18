import mongoose from "mongoose";
const { Schema } = mongoose;

const usersSchema = new Schema({
  name: String,
  age: Number,
});
// mongoose.model(nameofcollectioninDB,Schema)
const User = mongoose.model("users", usersSchema);
export default User;
