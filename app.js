const express = require("express");
const app = express();
const path = require("path")
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static(path.join(__dirname, "public")))



app.set("view engine", "pug")
app.set("views", "views")

const adminRoutes = require("./routes/admin")
const shopRoutes = require("./routes/shop")


app.use("/admin", adminRoutes.routes)
app.use(shopRoutes)

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "views", "404.html"))
})

const port = 3000
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
