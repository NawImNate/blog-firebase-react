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
