const express = require("express");
const {
  getUserJson,
  postUserLogin,
  postToken,
  postUserRegister,
  updatePassword,
  deleteLogout,
} = require("../controlers/auth.controller");
const verifyToken = require("../middleware/auth");

const router = express.Router();

// Get json token
router.get("/me", verifyToken, getUserJson);
// post login token
router.post("/auth/login", postUserLogin);
// post token
router.post("/token", postToken);
// post register token
router.post("/auth/register", postUserRegister);
// Update password
router.put("/auth/update-password", verifyToken, updatePassword);
// Delete refesh token
router.delete("/logout", verifyToken, deleteLogout);

module.exports = router;
