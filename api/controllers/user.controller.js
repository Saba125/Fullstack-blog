import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
export const registerUser = async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hashSync(req.body.password, 5);
    const newUser = await new User({
      ...req.body,
      password: hashedPassword,
    });
    await newUser.save();
    res.status(200).send("User has been registered");
  } catch (error) {
    if (error.name === "MongoError" && error.code === 11000) {
      return res.status(400).send("Username is already taken. Please choose a different one.");
    }

    return res.status(404).send(`Could not create user ${error.message}`);
  }
};
export const loginUser = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) {
      return res.status(404).send("Could not find user");
    }
    const isCorrect = await bcrypt.compare(req.body.password, user.password);
    if (!isCorrect) {
      return res.status(400).send("Invalid password or username");
    }
    const token = jwt.sign({ id: user.id }, process.env.JWT_KEY);
    const { password, ...info } = user._doc;
    res.cookie("accessToken", token, { httpOnly: true }).send(info);
  } catch (error) {
    res.status(500).send(`Could not login ${error.message}`);
  }
};
export const logOut = (req, res) => {
  try {
    res.clearCookie("accessToken");
    res.status(200).send("Logout successful");
  } catch (error) {
    res.status(500).send("Could not logout", error.message);
  }
};
export const getUser = async(req, res) => {
  try {
    const id = req.params.id
    const user = await User.findById(id)
    const {password, ...info} = user._doc
    res.send(info)
  } catch (error) {
    res.status(500).send("Could not find user", error.message)
  }
}