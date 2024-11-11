const { user: userModel } = require("../models");

const { validateCreateUser } = require("../validations/index");

async function doesUserExist(email) {
    const userExist = await userModel.findOne({ where: { email } });
    return !!userExist; 
  }

const createNewUser = async (req, res) => {
    
    const errors = validateCreateUser(req.body);
    
    if (errors.length > 0) {
      return res.status(400).json({ errors });
    }

  try {
    const { username, email } = req.body;

    const userExists = await doesUserExist(email);
    if (userExists) {
      return res.status(400).json({ error: "user already exits." });
    }

    const user = await userModel.create({ username, email });
    return res
      .status(201)
      .json({ message: "user created successfully", user });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "failed to create new user" });
  }
};

module.exports = { createNewUser };
