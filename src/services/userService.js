const connection = require("../config/database");

// Get all user
const getusers = async (req, res) => {
  let [results, fields] = await connection.query(
    "SELECT * FROM rice_4_man.users"
  );
  return results;
};

//Get User by Id
const getuserId = async (id) => {
  let [results, fields] = await connection.query(
    "SELECT * FROM rice_4_man.users WHERE id = ?",
    [id]
  );
  let user = results && results.length > 0 ? results[0] : {};
  return user;
};

//Add user
const adduser = async (id, name, email, phone, avatar, address, role) => {
  let [results, fields] = await connection.query(
    "INSERT INTO `rice_4_man`.`users` (`id`, `name`, `email`,`phone`, `avatar`, `address`, `role`) VALUES (?, ?, ?, ?, ?, ?);",
    [id, name, email, phone, avatar, address, role]
  );
};

//Update user
const updateuser = async (
  id,
  name,
  email,
  phone,
  avatar,
  address,
  role,
  password
) => {
  let query =
    "UPDATE `rice_4_man`.`users` SET `name` = ?, `email` = ?, `phone` = ?, `avatar` = ?, `address` = ?, `role` = ?, `password` = ? WHERE `id` = ?;";
  let params = [name, email, phone, avatar, address, role, password, id];

  let [results, fields] = await connection.query(query, params);
  return results;
};

//Delete User
const deleteuser = async (id) => {
  let [results, fields] = await connection.query(
    "DELETE FROM rice_4_man.users WHERE id = ?;",
    [id]
  );
};

module.exports = {
  getusers,
  getuserId,
  adduser,
  updateuser,
  deleteuser,
};
