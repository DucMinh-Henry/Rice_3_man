const { json } = require("express");
const {
  getusers,
  getuserId,
  adduser,
  updateuser,
  deleteuser,
} = require("../services/userService");

//Get all User
const getUsers = async (req, res) => {
  let user = await getusers();
  return res.json({ Users: user });
};

//Get User by Id
const getUserId = async (req, res) => {
  let idUser = req.params.id;
  let user = await getuserId(idUser);
  return res.json({ Users: user });
};

// Add User
const addUser = async (req, res) => {
  try {
    let { id, name, email, phone, avatar, address, role } = req.body;
    await adduser(id, name, email, phone, avatar, address, role);
    return res.json("Add Successful!");
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// Update User
const updateUser = async (req, res) => {
  try {
    let { id, name, email, phone, avatar, address, role, password } = req.body;
    await updateuser(id, name, email, phone, avatar, address, role, password);
    return res.json("Update Successful!");
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

// Delete User
const deleteUser = async (req, res) => {
  try {
    let idUser = req.params.id;
    await deleteuser(idUser);
    return res.json("Delete Successful!");
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getUsers,
  getUserId,
  addUser,
  updateUser,
  deleteUser,
};
