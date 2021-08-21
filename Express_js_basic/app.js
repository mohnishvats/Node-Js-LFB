const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

//  Important
//  Q.Why do we use body parser in node JS?
//   Body-parser is the Node. js body parsing middleware.
// It is responsible for parsing the incoming request bodies in a middleware before you handle it.

const app = express();
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use((req, res, next) => {
//   console.log("in this middleware");
//   next(); //this allows the request to travel to the next middleware
// });

//app.get() will fire only when get request is coming
//app.post() will filter the post request

// app.get("/add-product", (req, res, next) => {
//   console.log("in other middleware");
//   res.send("<h1>Add Product Page</h1>"); //sending the response
// });

// app.use("/", (req, res, next) => {
//   console.log("in other middleware");
//   res.send("<h1>hello</h1>"); //sending the response
// });

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

//The express. static() function is a built-in middleware function in Express.
//It serves static files and is based on serve-static. Parameters:
//The root parameter describes the root directory from which to serve static assets
app.use(express.static(path.join(__dirname, "public")));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, "Views", "404.html"));
});

// const server = http.createServer(app);
// server.listen(3000);

app.listen(3000); //this will do work of both of upper two lines
