const express = require("express");
const {
  getUsers,
  getUserId,
  addUser,
  updateUser,
  deleteUser,
} = require("../controlers/user.controller");

const router = express.Router();

//Get all user
router.get("/", getUsers);
//Get user by Id
router.get("/:id", getUserId);
//Add user
router.post("/", addUser);
//Update user by Id
router.put("/:id", updateUser);
//Delete user by Id
router.delete("/:id", deleteUser);

module.exports = router;
