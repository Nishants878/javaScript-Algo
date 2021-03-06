const express = require("express"); // import
const app = express();
const http = require("http");
const path = require("path");
const hostname = "127.0.0.1";
let courses = require("./model/courses.model");
// app.get("/", (req, res) => res.sendFile("Index.html",{root:__dirname}));
//app.get("/", (req, res) => res.json([{ id: 1, title: "React", price: 5000 }]));
app.use(express.static(path.join(__dirname, "static")));
app.get("/", (req, res) => res.sendFile("Courses.html", { root: __dirname }));
app.get("/courses", (req, res) => {
  res.json(courses);
});
app.delete("/courses/:id", (req, res) => {
  // functional prog -> filter method (immutability)
  //   let newCourseList = courses.filter((course) => course.id !== +req.params.id);
  //   courses = newCourseList;

  // object oriented -> splice
  let theIndex = courses.findIndex((course) => course.id === +req.params.id);
  courses.splice(theIndex, 1);

  res.json({ msg: "success" });
});
app.listen(3000, hostname, () => console.log("Server running at port 3000 !"));
