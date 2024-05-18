require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cors = require("cors");

const app = express();

//Config JSON response
app.use(express.json());
app.use(cors());

//Public route - Open route
app.get("/", (req, res) => {
  res.status(200).json({ msg: "Bem vindo" });
});

//Private route
app.get("/user/:id", checkToken, async(req, res) => {
  const id = req.params.id

  //Check if user exists
  const user = await User.findById(id, "-password")

  if (!user) {
    return res.status(404).json({ msg: "User not found." })
  }

  res.status(200).json({ user })
})

//Check if token is valid
function checkToken(req, res, next) {
  const authHeader = req.headers["authorization"]
  const token = authHeader && authHeader.split(" ")[1]

  if (!token) {
    return res.status(401).json({ msg: "Acesso negado!" })
  }

  try {
    const secret = process.env.SECRET
    jwt.verify(token, secret)
    next()
  } catch(error) {
    res.status(400).json({ msg: "token inválido" })
  }
}

//Models
const User = require("./models/User");

//Credentials
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;

//Acessing database
mongoose
  .connect(
    `mongodb+srv://${dbUser}:${dbPassword}@cluster0.bvpaukv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
  )
  .then(() => {
    app.listen(3001);
    console.log("Conectado ao banco! porta 3001");
  })
  .catch((err) => console.log(err));

//Signup User
app.post("/auth/signup", async (req, res) => {
  const { name, email, password, confirmpassword } = req.body;

  //Validation
  if (!name) {
    return res.status(422).json({ msg: "Name is required!" });
  }

  if (!email) {
    return res.status(422).json({ msg: "E-mail is required!" });
  }

  if (!password) {
    return res.status(422).json({ msg: "Password is required!" });
  }

  if (password !== confirmpassword) {
    return res.status(422).json({ msg: "Passwords do not match!" });
  }

  //Check if e-mail already exists
  const userExists = await User.findOne({ email: email });
  if (userExists) {
    return res.status(422).json({ msg: "This e-mail has already been taken." });
  }

  //Create password
  const salt = await bcrypt.genSalt(12);
  const passwordHash = await bcrypt.hash(password, salt);

  //Create user
  const user = new User({
    name,
    email,
    password: passwordHash,
  });

  try {
    await user.save();
    res.status(201).json({ msg: "Usuário criado com sucesso" });
  } catch (error) {
    res.status(500).json({ msg: "Erro no servidor" });
  }
});

//Login
app.post("/auth/login", async (req, res) => {
  const { email, password } = req.body;

  //Validacao
  if (!email) {
    return res.status(422).json({ msg: "E-mail is required!" });
  }

  if (!password) {
    return res.status(422).json({ msg: "Password is required!" });
  }

  //Check if user exists
  const user = await User.findOne({ email: email });

  if (!user) {
    return res.status(404).json({ msg: "User not found." });
  }

  //Check if password match
  const checkPassword = await bcrypt.compare(password, user.password);

  if (!checkPassword) {
    return res.status(422).json({ msg: "Incorrect password!" });
  }

  try {
    const secret = process.env.SECRET;
    const token = jwt.sign(
      { id: user._id }, 
      secret
    ) 
    res.status(200).json({ msg: "Autenticaçao realizada com sucesso", token })
  } catch (err) {
    return res.status(500).json({ msg: "Error serverside" });
  }
});
