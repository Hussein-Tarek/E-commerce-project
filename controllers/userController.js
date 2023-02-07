const User = require("./../models/userModel");

const createUser = (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  const gender = req.body.gender;
  const phone = req.body.phone;
  const address = req.body.address;
  const user = new User({ name, email, password, gender, phone, address });
  user
    .save()
    .then((doc) => {
      res.json(doc);
    })
    .catch((err) => {
      res.json(err);
    });
  console.log(name);
};

const getUsers = (req, res) => {
  const users = User.find()
    .then((doc) => {
      res.json(doc);
    })
    .catch((err) => {
      res.json(err);
    });
  res.send(users);
};
module.exports = { createUser, getUsers };
