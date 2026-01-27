const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const express = require("express");

const app = express();
app.use(express.json());

let users = [
  { name: "Sahil Talreja", email: "sahil@gmail.com", password: "sahil123" },
  { name: "Rahul Mehta", email: "rahul@gmail.com", password: "rahul123" },
  { name: "Aman Verma", email: "aman@gmail.com", password: "aman123" },
  { name: "Neha Sharma", email: "neha@gmail.com", password: "neha123" },
  { name: "Priya Singh", email: "priya@gmail.com", password: "priya123" },
  { name: "Rohit Kumar", email: "rohit@gmail.com", password: "rohit123" },
  { name: "Anjali Gupta", email: "anjali@gmail.com", password: "anjali123" },
  { name: "Karan Patel", email: "karan@gmail.com", password: "karan123" },
  { name: "Pooja Jain", email: "pooja@gmail.com", password: "pooja123" },
  { name: "Arjun Malhotra", email: "arjun@gmail.com", password: "arjun123" }
];

const SECRET = "mySecretKey";

// Hash all passwords on server start
async function hashing() {
  for (let i in users) {
    users[i].hashed=await bcrypt.hash(users[i].password,10);
    console.log(users[i]);
  }
}
hashing();


app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = users.find(u => u.email === email);
  if (!user) return res.status(401).json({ msg: "Invalid user" });

  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.status(401).json({ msg: "Invalid Password" });

  const token = jwt.sign(
    { name: user.name, email: user.email },
    SECRET,
    { expiresIn: "5m" }
  );

  res.json({ token });
});

function auth(req, res, next) {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(403).json({ msg: "No token" });

  jwt.verify(token, SECRET, (err, decoded) => {
    if (err) return res.status(401).json({ msg: "Token expired or invalid" });
    console.log(decoded);
    req.user = decoded;
    next();
  });
}

app.get("/dashboard", auth, (req, res) => {
  res.json({ msg: `Welcome ${req.user.name}` });
});

app.listen(3000, () => console.log("Server running on 3000"));
