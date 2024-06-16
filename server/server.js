require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");

const { fileUrlToPath } = require("url");
const multer = require("multer");
const bodyParser = require("body-parser");
const path = require("path");
const Order = require("./db/order.model");

const authRoutes = require("./routes/auth.js");
const productsRoutes = require("./routes/products.js");
const favoritesRoutes = require("./routes/favorites.js");
const ordersRoutes = require("./routes/orders.js");
const  {verifyToken}  = require("./middleware/auth.js");
const { register } = require("./controllers/auth.js");



const { MONGO_URL, PORT = 8080 } = process.env;

if (!MONGO_URL) {
    console.error("Missing MONGO_URL environment variable");
    process.exit(1);
}


const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use("/assets", express.static(path.join(__dirname, "public/assets")));

//File Storage
const storage = multer.diskStorage({
  destination: function (req, res, cb) {
    cb(null, "public/assets");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage });

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:5173");
  res.header(
    "Access-Control-Allow-Methods",
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

// Routes with Files

//later

//Routes
app.use('/auth', authRoutes)
app.use('/products', productsRoutes)
app.use('/favorites', favoritesRoutes )
app.use('/orders', ordersRoutes)

//Set up server
const main = async () => {
  await mongoose.connect(MONGO_URL);

  app.listen(PORT, () => {
    console.log("App is listening on 8080");
    console.log("http://localhost:8080/products");
  });
};

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
