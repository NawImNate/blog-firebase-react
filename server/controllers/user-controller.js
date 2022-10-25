import User from "../model/User";

export const getAllUser = async (req, res, next) => {
  let users;
  try {
    users = await User.find();
  } catch (err) {
    console.log(err.message);
  }
  if (!users) {
    res.status(404).json({ message: "No users found" });
  }
  return res.status(200).json({ users });
};

export const signup = async (req, res, next) => {
  // define req body
  const { name, email, password } = req.body;
  // define variable for validation
  let existingUser;
  // search for user using mongoose findOne
  try {
    existingUser = await User.findOne({ email });
  } catch (err) {
    return console.log(err.message);
  }
  if (existingUser) {
    return res.status(400).json({ message: "User Exists, please login" });
  }
  // if no existing user save a new user and return json or err msg if not successful.
  const user = new User({
    name,
    email,
    password,
  });
  try {
    await user.save();
  } catch (error) {
    return console.log(error.message);
  }
  return res.status(201).json({ user });
};
